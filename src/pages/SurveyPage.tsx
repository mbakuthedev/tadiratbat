import { useEffect, useState } from 'react'
import { PageTitle } from '../components/PageTitle'

const ads = [
  { id: 'extreme', title: 'Batteries powering your devices to the EXTREME', text: 'The homepage line: ultra-long-life lithium for industrial devices.' },
  { id: 'imitators', title: 'Beware of imitators', text: 'Low self-discharge extends battery life up to 4× longer.' },
  { id: 'forty', title: 'Is a 40-year battery real?', text: 'The question behind the Embedded Executive conversation with Sol Jacobs.' },
]

export function SurveyPage() {
  const [choice, setChoice] = useState<string | null>(null)
  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    const saved = localStorage.getItem('tadiran-ad-survey')
    if (!saved) return
    try {
      const parsed = JSON.parse(saved) as { choice?: string; counts?: Record<string, number> }
      setChoice(parsed.choice || null)
      setCounts(parsed.counts || {})
    } catch {
      localStorage.removeItem('tadiran-ad-survey')
    }
  }, [])

  function vote(id: string) {
    const next = { ...counts, [id]: (counts[id] || 0) + 1 }
    setCounts(next)
    setChoice(id)
    localStorage.setItem('tadiran-ad-survey', JSON.stringify({ choice: id, counts: next }))
  }

  const total = Object.values(counts).reduce((sum, count) => sum + count, 0)

  return (
    <div>
      <PageTitle title="Ad Survey" lede="Tadiran asks visitors which campaign line they prefer. Votes stay in this browser." />
      <div className="mx-auto grid max-w-[1100px] gap-4 px-4 py-10 md:px-6">
        {ads.map((ad) => {
          const count = counts[ad.id] || 0
          const share = total ? Math.round((count / total) * 100) : 0
          return (
            <button key={ad.id} type="button" onClick={() => vote(ad.id)} className={`border p-5 text-left ${choice === ad.id ? 'border-magenta' : 'border-neutral-300'}`}>
              <h2 className="text-[24px]">{ad.title}</h2>
              <p className="mt-2 text-[15px]">{ad.text}</p>
              {total > 0 && (
                <div className="mt-4">
                  <div className="h-2 bg-neutral-200"><div className="h-2 bg-magenta" style={{ width: `${share}%` }} /></div>
                  <p className="mt-1 text-xs">{share}% of votes in this browser ({count})</p>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
