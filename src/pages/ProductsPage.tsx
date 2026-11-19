import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { series } from '../data/products'

export function ProductsPage() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return series
    return series.filter((item) => `${item.name} ${item.menu} ${item.card} ${item.tagline}`.toLowerCase().includes(value))
  }, [query])

  return (
    <div>
      <PageTitle kicker="Catalog" title="Products" lede="Primary lithium thionyl chloride, hybrid pulse packs, high-power lithium metal oxide, and industrial rechargeable cells." />
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        <label className="block max-w-md text-sm font-bold">
          Filter families
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search XOL, PulsesPlus, TLI…" className="mt-2 w-full border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-magenta" />
        </label>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <Link key={item.slug} to={`/products/${item.slug}`} className="border border-neutral-200 no-underline hover:shadow-md">
              <img src={item.image} alt="" className="aspect-[4/3] w-full object-cover" />
              <div className="p-4">
                <h2 className="text-[22px] text-black">{item.name}</h2>
                <p className="mt-2 text-[15px] text-ink">{item.card}</p>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p className="mt-8">No product family matches that filter.</p>}
      </div>
    </div>
  )
}
