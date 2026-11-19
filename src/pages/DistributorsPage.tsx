import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { international, northAmerica, type Distributor } from '../data/content'
import { MAP } from '../data/site'

function Table({ rows }: { rows: Distributor[] }) {
  return (
    <div className="overflow-x-auto border border-neutral-200">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="bg-navy text-white">
          <tr>
            <th className="px-3 py-2">Distributor</th>
            <th className="px-3 py-2">Phone</th>
            <th className="px-3 py-2">Web / email</th>
            <th className="px-3 py-2">Coverage</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="border-t border-neutral-200 align-top">
              <td className="px-3 py-3 font-bold">{row.name}</td>
              <td className="px-3 py-3">{row.phone || '—'}</td>
              <td className="px-3 py-3">
                {row.web && <a className="block text-plum underline" href={row.web} target="_blank" rel="noreferrer">{row.web.replace(/^https?:\/\//, '')}</a>}
                {row.email && <a className="block text-plum underline" href={`mailto:${row.email}`}>{row.email}</a>}
                {row.address && <span className="mt-1 block text-ink">{row.address}</span>}
              </td>
              <td className="px-3 py-3">{row.type || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function DistributorsPage() {
  return (
    <div>
      <PageTitle title="Distributors" lede="Tadiran sells through a North American network and international representatives." />
      <div className="mx-auto grid max-w-[1100px] gap-6 px-4 py-10 md:grid-cols-2 md:px-6">
        <img src={MAP} alt="North America" className="w-full border border-neutral-200 object-cover" />
        <div className="flex flex-col justify-center gap-4">
          <Link to="/distributors/north-america" className="border border-black px-5 py-4 text-lg font-extrabold no-underline hover:bg-black hover:text-white">Sales Network – North America</Link>
          <Link to="/distributors/international" className="border border-black px-5 py-4 text-lg font-extrabold no-underline hover:bg-black hover:text-white">Sales Network – International</Link>
        </div>
      </div>
    </div>
  )
}

export function NorthAmericaPage() {
  const [query, setQuery] = useState('')
  const rows = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return northAmerica
    return northAmerica.filter((row) => `${row.name} ${row.type} ${row.email || ''}`.toLowerCase().includes(value))
  }, [query])
  return (
    <div>
      <PageTitle title="Sales Network – North America" />
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter distributors" aria-label="Filter distributors" className="mb-4 w-full max-w-md border border-neutral-300 px-3 py-2 outline-none focus:border-magenta" />
        <Table rows={rows} />
      </div>
    </div>
  )
}

export function InternationalPage() {
  const [query, setQuery] = useState('')
  const groups = useMemo(() => {
    const value = query.trim().toLowerCase()
    return international
      .map((group) => ({
        ...group,
        entries: group.entries.filter((entry) => `${group.country} ${entry.name} ${entry.address || ''}`.toLowerCase().includes(value)),
      }))
      .filter((group) => group.entries.length)
  }, [query])
  return (
    <div>
      <PageTitle title="Sales Network – International" />
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter by country or company" aria-label="Filter international distributors" className="mb-6 w-full max-w-md border border-neutral-300 px-3 py-2 outline-none focus:border-magenta" />
        <div className="space-y-8">
          {groups.map((group) => (
            <section key={group.country}>
              <h2 className="mb-3 text-[28px]">{group.country}</h2>
              <Table rows={group.entries} />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
