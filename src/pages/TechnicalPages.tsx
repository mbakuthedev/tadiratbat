import { useMemo, useState, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { policyDocs, sdsDocs, shippingDocs } from '../data/content'
import { allCells, cellSlug, series } from '../data/products'
import { FACTORY, SELF_DISCHARGE, UL_LOGO } from '../data/site'

const links = [
  ['product-overview', 'Product Overview'],
  ['comparing-lithium-chemistries', 'Comparing Lithium Chemistries'],
  ['long-life-lithium-batteries', 'Long-Life Lithium Batteries'],
  ['better-by-design', 'Better by Design'],
  ['un-38-3', 'UN 38.3 Test Summary Reports'],
  ['eu-battery-regulations', 'EU Battery Regulations'],
  ['packaging-and-shipping', 'Packaging and Shipping'],
  ['safety-data-sheets', 'Material Safety Data Sheets'],
  ['third-party-certifications', 'Third Party Certifications'],
  ['ul-listed', 'UL-Listed'],
  ['product-data-sheets', 'Product Data Sheets'],
  ['discontinued-products', 'Products No Longer Supported'],
  ['terms-and-conditions', 'Terms and Conditions'],
  ['testimonials', 'Testimonials'],
] as const

function DocList({ items }: { items: { title: string; href: string }[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.href + item.title}>
          <a href={item.href} target="_blank" rel="noreferrer" className="font-semibold text-plum underline">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function TechnicalIndexPage() {
  return (
    <div>
      <PageTitle title="Technical Data" lede="Data sheets, safety documents, shipping guidance, and the design notes Tadiran publishes with its cells." />
      <div className="mx-auto grid max-w-[1100px] gap-3 px-4 py-10 md:px-6">
        {links.map(([slug, label]) => (
          <Link key={slug} to={`/technical-data/${slug}`} className="border border-neutral-200 px-4 py-3 font-bold no-underline hover:border-magenta hover:text-magenta">
            {label}
          </Link>
        ))}
        <a href="https://eeworldonline.tradepub.com/free/w_defa4462/" target="_blank" rel="noreferrer" className="border border-neutral-200 px-4 py-3 font-bold no-underline hover:border-magenta hover:text-magenta">
          Design Guide on Lithium Batteries for Harsh Environments
        </a>
      </div>
    </div>
  )
}

export function TechnicalPage() {
  const { slug = '' } = useParams()
  if (slug === 'product-data-sheets') return <Datasheets />
  const page = pages[slug]
  if (!page) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl">Page not found</h1>
        <Link to="/technical-data" className="mt-4 inline-block text-plum underline">Technical data</Link>
      </div>
    )
  }
  return (
    <div>
      <PageTitle title={page.title} lede={page.lede} />
      <div className="prose-tadiran mx-auto max-w-[900px] px-4 py-10 text-[16px] leading-7 md:px-6">{page.body}</div>
    </div>
  )
}

function Datasheets() {
  const [query, setQuery] = useState('')
  const [family, setFamily] = useState('all')
  const rows = useMemo(() => {
    return allCells().filter((cell) => {
      if (!cell.pdf) return false
      if (family !== 'all' && cell.series !== family) return false
      const value = query.trim().toLowerCase()
      if (!value) return true
      return `${cell.model} ${cell.seriesName}`.toLowerCase().includes(value)
    })
  }, [query, family])

  return (
    <div>
      <PageTitle title="Product Data Sheets" lede="Public PDF data sheets posted by Tadiran. Each link opens the original file." />
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter by model" aria-label="Filter data sheets" className="h-11 flex-1 border border-neutral-300 px-3 outline-none focus:border-magenta" />
          <select value={family} onChange={(event) => setFamily(event.target.value)} aria-label="Series" className="h-11 border border-neutral-300 px-3">
            <option value="all">All families</option>
            {series.filter((item) => item.groups.length).map((item) => (
              <option key={item.slug} value={item.slug}>{item.menu}</option>
            ))}
          </select>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((cell) => (
            <li key={cell.model} className="flex items-center justify-between gap-3 border border-neutral-200 px-3 py-3">
              <Link to={`/products/${cell.series}/${cellSlug(cell.model)}`} className="font-bold text-plum underline">{cell.model}</Link>
              <a href={cell.pdf} target="_blank" rel="noreferrer" className="text-sm font-extrabold text-navy underline">PDF</a>
            </li>
          ))}
        </ul>
        {rows.length === 0 && <p className="mt-4">No data sheet matches that filter.</p>}
      </div>
    </div>
  )
}

const pages: Record<string, { title: string; lede?: string; body: ReactNode }> = {
  'product-overview': {
    title: 'Product Overview',
    lede: 'Tadiran industrial grade lithium batteries go where others don’t dare.',
    body: (
      <>
        <img src={FACTORY} alt="Tadiran manufacturing" className="mb-6 w-full" />
        <p>Pound for pound, Tadiran bobbin-type lithium thionyl chloride (LiSOCl2) cells are presented as the most energetic and reliable batteries in this class: high energy density, high capacity, and high pulse capability. Standard cells and custom packs are described as lead-free RoHS, WEEE EC, and REACH compliant, with annual self-discharge under 1% per year and the ability to power certain low-current applications for up to 40 years.</p>
        <ul>
          <li>Highest energy density</li>
          <li>Highest capacity</li>
          <li>Widest temperature range</li>
          <li>Up to 40-year operating life</li>
          <li>Small form factor</li>
          <li>UL recognition</li>
          <li>Lead-free RoHS, WEEE EC, and REACH</li>
        </ul>
        <p>LiSOCl2 covers low-power, high-pulse, and extended-temperature versions. TLM Series lithium metal oxide covers high pulse and high drain, including medical and military/aerospace. TLI Series covers industrial rechargeable Li-ion for energy harvesting.</p>
        <ul>
          <li>iXtra Series — up to 10-year operating life with moderate pulses</li>
          <li>TRR Series — up to 20-year operating life with moderate to high pulses</li>
          <li>TLM Series — up to 20-year shelf life, high pulses of short duration</li>
          <li>XOL Series — up to 40-year operating life with low pulses</li>
          <li>Extended temperature — up to +125°C and as low as −90°C</li>
          <li>PulsesPlus — up to 40-year operating life with very high pulses</li>
          <li>Rechargeable Li-ion — up to 20-year operating life and 5,000 charge cycles</li>
        </ul>
      </>
    ),
  },
  'comparing-lithium-chemistries': {
    title: 'Comparing Lithium Chemistries',
    lede: 'Figures below are the ones Tadiran publishes for its own families.',
    body: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-3 py-2">Family</th>
              <th className="px-3 py-2">Chemistry</th>
              <th className="px-3 py-2">Voltage</th>
              <th className="px-3 py-2">Self-discharge</th>
              <th className="px-3 py-2">Temperature</th>
              <th className="px-3 py-2">Best fit</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['XOL', 'LiSOCl2 bobbin', '3.6 V', '0.7% / year', '−80°C to +125°C published range', 'Low pulses, up to 40 years'],
              ['iXtra', 'LiSOCl2 bobbin', '3.6 V', 'Very low', '−80°C to +125°C published range', 'Moderate continuous current'],
              ['TLH', 'LiSOCl2, extended temp', '3.6 V', 'Very low', '−55°C to +125°C', 'Extreme heat, cold chain to −85°C'],
              ['PulsesPlus', 'LiSOCl2 + HLC', '3.6 V or 3.9 V', '< 1% / year', '−40°C to 85°C', 'High pulses, up to 40 years'],
              ['TLM', 'Lithium metal oxide', '4.0 V', '< 3% / year', '−40°C to +85°C; HT to +135°C', 'High pulse, 20-year shelf life'],
              ['TLI', 'Industrial Li-ion', '4 V', '< 5% / year', '−40°C to +85°C; HT to +135°C', 'Recharge, energy harvesting'],
            ].map((row) => (
              <tr key={row[0]} className="border-t border-neutral-200">
                {row.map((cell) => (
                  <td key={cell} className="px-3 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  'long-life-lithium-batteries': {
    title: 'Long-Life Lithium Batteries',
    body: (
      <>
        <img src={SELF_DISCHARGE} alt="Self-discharge comparison" className="mb-6 w-full max-w-sm" />
        <p>Tadiran bobbin-type LiSOCl2 batteries are published with an annual self-discharge rate of 0.7% per year, so after 30 years a cell can retain nearly 80% of its original capacity before the device’s own consumption is counted.</p>
        <p>The same page contrasts competing LiSOCl2 cells at up to 3% self-discharge per year, which can exhaust up to 90% of capacity over 30 years and, once device current is included, can fall below a usable threshold in less than 10 years.</p>
        <p>XOL cells are the low-pulse, up-to-40-year family. PulsesPlus keeps that life while adding pulse current through a hybrid layer capacitor.</p>
      </>
    ),
  },
  'better-by-design': {
    title: 'Better by Design',
    body: (
      <>
        <p>Tadiran attributes the self-discharge difference to raw-material quality and a manufacturing process refined over decades. The imitators page says more than 100 steps go into a Tadiran cell, and that shortcuts show up as batch-to-batch inconsistency even when a fresh cell looks identical.</p>
        <p>Published construction points used across the catalog:</p>
        <ul>
          <li>Glass-to-metal hermetic seal instead of a crimp</li>
          <li>Passivation harnessed for low self-discharge, with an HLC where voltage delay cannot be tolerated</li>
          <li>Non-flammable electrolyte on PulsesPlus and a non-pressurized system on the UL discussion</li>
          <li>Limited electrode surface area to limit short-circuit current</li>
        </ul>
      </>
    ),
  },
  'un-38-3': {
    title: 'UN 38.3 Test Summary Reports',
    lede: 'Lithium cells are tested to UN 38.3 before they are offered for transport.',
    body: (
      <>
        <p>Tadiran publishes UN 38.3 test summary reports by product. The individual report files are issued per cell family and were not copied into this recreation. Use the data sheet for the electrical rating, and ask sales@tadiranbatt-europe.com for the current test summary that matches the exact model and revision.</p>
        <p>TLM Military Grade literature also cites UN 1642 and IEC 60086 mechanical and electrical abuse tests, and states those cells can be shipped as non-hazardous goods.</p>
        <Link to="/technical-data/safety-data-sheets" className="font-bold text-plum underline">Shipping documents and safety data sheets</Link>
      </>
    ),
  },
  'eu-battery-regulations': {
    title: 'EU Battery Regulations',
    body: (
      <>
        <p>Tadiran’s product overview states that standard cells and custom battery packs are certified lead-free and compliant with RoHS, WEEE EC, and REACH. The detailed EU Battery Regulation filings are maintained by Tadiran and were not republished as a local legal summary.</p>
        <p>For a current declaration on a specific cell, contact sales@tadiranbatt-europe.com and include the model number.</p>
      </>
    ),
  },
  'packaging-and-shipping': {
    title: 'Packaging and Shipping',
    body: (
      <>
        <p>Tadiran posts these shipping documents for download:</p>
        <DocList items={shippingDocs} />
        <p>Disposal guidance is posted with the safety data sheets.</p>
      </>
    ),
  },
  'safety-data-sheets': {
    title: 'Material Safety Data Sheets',
    body: (
      <>
        <h3>SDS information</h3>
        <DocList items={sdsDocs} />
        <h3>Other documents</h3>
        <DocList items={policyDocs} />
      </>
    ),
  },
  'third-party-certifications': {
    title: 'Third Party Certifications',
    body: (
      <>
        <p>Published compliance statements on the product overview:</p>
        <ul>
          <li>UL recognition — see the UL-Listed page and the TLM safety discussion</li>
          <li>Lead-free RoHS</li>
          <li>WEEE EC</li>
          <li>REACH</li>
        </ul>
        <p>TLM Military Grade cells are additionally described against MIL-STD-810G, UN 1642, and IEC 60086. Ask Tadiran for the certificate that matches a specific model.</p>
      </>
    ),
  },
  'ul-listed': {
    title: 'UL-Listed',
    body: (
      <>
        <img src={UL_LOGO} alt="UL" className="mb-6 h-20 w-auto" />
        <p>Safety advantages Tadiran lists for its lithium batteries:</p>
        <ul>
          <li>The electrochemical system is non-pressurized.</li>
          <li>The internal design includes a limited electrode surface area for limiting the short circuit current.</li>
          <li>Hermetic sealing isolates the cell chemicals from the outside atmosphere, including under extreme temperature cycling.</li>
          <li>The electrolyte is non-flammable.</li>
          <li>Tadiran lithium batteries are free of heavy metals.</li>
        </ul>
        <p>The page states that Tadiran batteries offer the greatest possible peace of mind to design engineers and end users.</p>
      </>
    ),
  },
  'discontinued-products': {
    title: 'Products No Longer Supported',
    body: (
      <>
        <p>The supported catalog is the families listed under Products. Tadiran keeps a separate list of parts that are no longer supported. That legacy table was not copied here, because unpublished cross-references should come from Tadiran rather than be guessed.</p>
        <p>If you have an older part number — field returns have included cells such as the TL-2100 used in early Aclara meters — send it to sales@tadiranbatt-europe.com for the current replacement.</p>
        <Link to="/products" className="font-bold text-plum underline">Current products</Link>
      </>
    ),
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions',
    body: (
      <>
        <p>Purchasing terms posted with the safety-document library:</p>
        <DocList items={policyDocs.filter((item) => /terms|purchasing|ethics|quality/i.test(item.title))} />
      </>
    ),
  },
  testimonials: {
    title: 'Testimonials',
    body: (
      <>
        <h3>Aclara automatic meter reading units</h3>
        <p>Twenty-five years ago, Aclara (formerly Hexagram, Inc.) installed hundreds of thousands of automatic meter reading devices. Powered by a Tadiran TL-2100 AA-size lithium thionyl chloride battery, virtually all of those devices were still operating on the original battery. Laboratory tests confirmed the cells had retained nearly 25% of their original capacity. Aclara selected Tadiran for higher energy density, higher capacity, a temperature range of −55°C to +85°C, and 20+ year service life.</p>
        <h3>AMSAFE airbags</h3>
        <p>AMSAFE aviation airbags protect passengers, pilots, and crew. They are powered by Tadiran PulsesPlus batteries chosen for compact size, high energy, safety, and 20+ year service life. The packs deliver instantaneous power so the airbag can deploy in less than 50 milliseconds.</p>
        <h3>Oceanographic instruments</h3>
        <p>An ocean engineer describes PulsesPlus packs in Nortek Aquadopp acoustic wave current meters and profilers. The pack is credited with extended life, an extended temperature range, and over three times the capacity of an alkaline pack of equal size.</p>
      </>
    ),
  },
}
