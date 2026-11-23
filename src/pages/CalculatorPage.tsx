import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { allCells, cellSlug, type Cell } from '../data/products'
import { CALC_IMAGE } from '../data/site'

type ListedCell = Cell & { series: string; seriesName: string }

const families = [
  { id: 'xol', label: 'XOL — low pulse, up to 40 years', temp: [-55, 85] },
  { id: 'ixtra', label: 'iXtra — moderate continuous current', temp: [-55, 85] },
  { id: 'tlh', label: 'TLH — extended temperature', temp: [-55, 125] },
  { id: 'pulsesplus', label: 'PulsesPlus — high pulses', temp: [-40, 85] },
  { id: 'tlm', label: 'TLM — very high pulses', temp: [-40, 85] },
  { id: 'tli', label: 'TLI — rechargeable', temp: [-40, 85] },
]

export function CalculatorPage() {
  const [stage, setStage] = useState<'choose' | 'early' | 'advanced'>('choose')
  const [years, setYears] = useState(15)
  const [backgroundUa, setBackgroundUa] = useState(50)
  const [pulseMa, setPulseMa] = useState(100)
  const [pulsesPerDay, setPulsesPerDay] = useState(24)
  const [pulseMs, setPulseMs] = useState(100)
  const [minTemp, setMinTemp] = useState(-20)
  const [maxTemp, setMaxTemp] = useState(60)
  const [harvest, setHarvest] = useState(false)

  const result = useMemo(() => {
    const backgroundAh = (backgroundUa * 1e-6 * 24 * 365 * years)
    const pulseAh = (pulseMa / 1000) * (pulseMs / 1000) * pulsesPerDay * 365 * years / 3600
    const selfDischarge = harvest ? 0.05 : pulseMa > 500 ? 0.01 : 0.007
    const requiredAh = (backgroundAh + pulseAh) / Math.max(0.05, 1 - selfDischarge * years)

    let family = 'xol'
    let reason = 'Low background current and a long life point to an XOL bobbin LiSOCl2 cell.'
    if (harvest) {
      family = 'tli'
      reason = 'An energy-harvesting design points to a TLI industrial rechargeable cell.'
    } else if (maxTemp > 85 || minTemp < -55) {
      family = 'tlh'
      reason = 'The temperature window is outside the standard −55°C to +85°C cell note, so start with TLH or a modified low-temperature cell.'
    } else if (pulseMa >= 1000) {
      family = 'tlm'
      reason = 'Pulses at or above 1 A of short duration point to TLM lithium metal oxide.'
    } else if (pulseMa >= 50) {
      family = 'pulsesplus'
      reason = 'Periodic pulses with a long standby point to PulsesPlus (LiSOCl2 plus a hybrid layer capacitor).'
    } else if (backgroundUa >= 500) {
      family = 'ixtra'
      reason = 'A higher continuous draw points to the iXtra series.'
    }

    const candidates = (allCells() as ListedCell[])
      .filter((cell) => cell.series === family && cell.capacity && !cell.model.startsWith('HLC'))
      .map((cell) => ({ ...cell, ah: Number(String(cell.capacity).replace(/,/g, '')) / (family === 'tlm' || family === 'tli' ? 1000 : 1) }))
      .filter((cell) => Number.isFinite(cell.ah))
      .sort((a, b) => a.ah - b.ah)

    const pick = candidates.find((cell) => cell.ah >= requiredAh) || candidates[candidates.length - 1]

    return { backgroundAh, pulseAh, requiredAh, family, reason, pick }
  }, [years, backgroundUa, pulseMa, pulsesPerDay, pulseMs, minTemp, maxTemp, harvest])

  return (
    <div>
      <PageTitle title="Battery Calculator" lede="Trying to design a battery for your IoT, remote, or wireless device?" />
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-10 md:px-6 lg:grid-cols-[280px_1fr]">
        <img src={CALC_IMAGE} alt="Battery calculator" className="w-full object-contain" />
        <div className="text-[16px] leading-7">
          <p>Whether you are just starting or already validating the electronics, Tadiran’s tools are meant to identify a suitable battery. At an early stage, the calculator walks through life, space, protocols, and climate. For a finished power profile, Tadiran’s engineering team prepares a personalized lifetime model.</p>
          <p className="mt-3 text-sm text-ink">The estimator below uses the published capacities and self-discharge rates in this catalog. It is a planning aid, not Tadiran’s proprietary lifetime model.</p>
        </div>
      </div>

      {stage === 'choose' && (
        <div className="mx-auto grid max-w-[1100px] gap-4 px-4 pb-12 md:grid-cols-2 md:px-6">
          <button type="button" onClick={() => setStage('early')} className="border border-black p-6 text-left hover:border-magenta">
            <h2 className="text-[26px]">Tadiran Battery Calculator</h2>
            <p className="mt-2">My project is at an early stage. I want an initial battery recommendation.</p>
          </button>
          <button type="button" onClick={() => setStage('advanced')} className="border border-black p-6 text-left hover:border-magenta">
            <h2 className="text-[26px]">Tadiran Battery Lifetime Model</h2>
            <p className="mt-2">My electronic design is already defined. I need a personalized proposal.</p>
          </button>
        </div>
      )}

      {stage === 'advanced' && (
        <div className="mx-auto max-w-[800px] px-4 pb-12 md:px-6">
          <p className="mb-4">A detailed lifetime calculation needs the real load profile. Contact the sales team with your operating profile.</p>
          <Link to="/contact" className="inline-block bg-navy px-6 py-3 text-sm font-extrabold text-white no-underline">Contact us</Link>
          <button type="button" onClick={() => setStage('choose')} className="ml-3 text-sm font-bold text-plum underline">Back</button>
        </div>
      )}

      {stage === 'early' && (
        <div className="mx-auto grid max-w-[1100px] gap-8 px-4 pb-12 md:px-6 lg:grid-cols-2">
          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <Range label="Operating life (years)" min={1} max={40} value={years} onChange={setYears} />
            <Range label="Background current (µA)" min={1} max={5000} value={backgroundUa} onChange={setBackgroundUa} />
            <Range label="Pulse current (mA)" min={0} max={15000} value={pulseMa} onChange={setPulseMa} />
            <Range label="Pulses per day" min={0} max={1000} value={pulsesPerDay} onChange={setPulsesPerDay} />
            <Range label="Pulse width (ms)" min={1} max={2000} value={pulseMs} onChange={setPulseMs} />
            <div className="grid grid-cols-2 gap-3">
              <label className="text-sm font-bold">Min °C
                <input type="number" value={minTemp} onChange={(event) => setMinTemp(Number(event.target.value))} className="mt-1 w-full border border-neutral-300 px-3 py-2 font-normal" />
              </label>
              <label className="text-sm font-bold">Max °C
                <input type="number" value={maxTemp} onChange={(event) => setMaxTemp(Number(event.target.value))} className="mt-1 w-full border border-neutral-300 px-3 py-2 font-normal" />
              </label>
            </div>
            <label className="flex items-center gap-2 text-sm font-bold">
              <input type="checkbox" checked={harvest} onChange={(event) => setHarvest(event.target.checked)} />
              The device harvests energy and can recharge
            </label>
            <button type="button" onClick={() => setStage('choose')} className="w-fit text-sm font-bold text-plum underline">Start over</button>
          </form>
          <aside className="border border-neutral-200 bg-mist p-5">
            <h2 className="text-[26px]">Recommendation</h2>
            <p className="mt-3">{result.reason}</p>
            <p className="mt-3 text-sm">Estimated draw over life: {result.requiredAh.toFixed(2)} Ah, including a self-discharge allowance. Background {result.backgroundAh.toFixed(3)} Ah, pulses {result.pulseAh.toFixed(3)} Ah.</p>
            <p className="mt-3 font-bold">{families.find((item) => item.id === result.family)?.label}</p>
            {result.pick && (
              <p className="mt-3">
                Closest listed cell:{' '}
                <Link className="font-bold text-plum underline" to={`/products/${result.pick.series}/${cellSlug(result.pick.model)}`}>
                  {result.pick.model}
                </Link>
                {' '}({result.pick.capacity} {result.family === 'tli' || result.family === 'tlm' ? 'mAh' : 'Ah'})
              </p>
            )}
            <Link to="/contact" className="mt-5 inline-block bg-navy px-5 py-2 text-sm font-extrabold text-white no-underline">Contact us</Link>
          </aside>
        </div>
      )}
    </div>
  )
}

function Range({ label, min, max, value, onChange }: { label: string; min: number; max: number; value: number; onChange: (value: number) => void }) {
  return (
    <label className="text-sm font-bold">
      <span className="flex justify-between"><span>{label}</span><span>{value}</span></span>
      <input type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} className="mt-2 w-full accent-magenta" />
    </label>
  )
}
