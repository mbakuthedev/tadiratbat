import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { findCell } from '../data/products'

export function CellPage() {
  const { slug = '', model = '' } = useParams()
  const match = findCell(slug, model)

  if (!match) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl">Model not found</h1>
        <Link to="/products" className="mt-4 inline-block text-plum underline">Back to products</Link>
      </div>
    )
  }

  const { series: family, cell, group } = match
  const facts = [
    ['Series', family.name],
    ['Group', group.title],
    ['Cell size', cell.size],
    ['Catalog number', cell.catalog],
    ['Nominal voltage', cell.voltage ? `${cell.voltage} V` : family.slug === 'xol' || family.slug === 'ixtra' || family.slug === 'tlh' ? '3.6 V' : undefined],
    ['Capacity', cell.capacity],
    ['Nominal discharge', cell.current],
    ['Maximum pulse', cell.pulse ? `${cell.pulse} A` : undefined],
    ['Dimensions (mm)', cell.metric],
    ['Dimensions (in)', cell.standard],
    ['Terminations', cell.terminations],
  ].filter((entry) => entry[1])

  return (
    <div>
      <PageTitle kicker={family.menu} title={cell.model} lede={family.tagline} />
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-10 md:px-6 lg:grid-cols-[280px_1fr]">
        <img src={family.image} alt="" className="w-full border border-neutral-200 object-cover" />
        <div>
          <dl className="divide-y divide-neutral-200 border border-neutral-200">
            {facts.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[180px_1fr] gap-3 px-4 py-3 text-[15px]">
                <dt className="font-bold">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-3">
            {cell.pdf ? (
              <a href={cell.pdf} target="_blank" rel="noreferrer" className="bg-navy px-6 py-3 text-sm font-extrabold text-white no-underline hover:bg-[#1c1e57]">
                Download data sheet
              </a>
            ) : (
              <Link to="/contact" className="bg-navy px-6 py-3 text-sm font-extrabold text-white no-underline">
                Request data sheet
              </Link>
            )}
            <Link to={`/products/${family.slug}`} className="border border-black px-6 py-3 text-sm font-extrabold no-underline">
              Back to {family.menu}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
