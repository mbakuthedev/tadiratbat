import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { allCells, cellSlug } from '../data/products'
import { MECTRONIC } from '../data/site'

export function StockPage() {
  const cells = useMemo(() => allCells(), [])
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return cells.slice(0, 12)
    return cells.filter((cell) => `${cell.model} ${cell.catalog || ''} ${cell.seriesName}`.toLowerCase().includes(value))
  }, [cells, query])

  return (
    <div>
      <PageTitle title="Stock Check" lede="Distributor inventory on the Tadiran site is handled by Mectronic, a third-party provider. This catalog search covers the publicly listed models and catalog numbers." />
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        <img src={MECTRONIC} alt="Mectronic" className="mb-6 h-12 w-auto" />
        <form className="flex max-w-xl gap-2" onSubmit={(event) => event.preventDefault()}>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Model or catalog number" aria-label="Stock search" className="h-11 flex-1 border border-neutral-300 px-3 outline-none focus:border-magenta" />
          <button type="submit" className="bg-navy px-5 text-sm font-extrabold text-white">SEARCH</button>
        </form>
        <p className="mt-3 text-sm text-ink">{query ? `${results.length} catalog matches` : 'Showing a sample of the catalog. Type a model such as TL-4903 or TLI-1550A.'}</p>
        <div className="mt-6 overflow-x-auto border border-neutral-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-3 py-2">Model</th>
                <th className="px-3 py-2">Catalog</th>
                <th className="px-3 py-2">Family</th>
                <th className="px-3 py-2">Data sheet</th>
              </tr>
            </thead>
            <tbody>
              {results.map((cell) => (
                <tr key={`${cell.series}-${cell.model}`} className="border-t border-neutral-200">
                  <td className="px-3 py-2">
                    <Link className="font-bold text-plum underline" to={`/products/${cell.series}/${cellSlug(cell.model)}`}>{cell.model}</Link>
                  </td>
                  <td className="px-3 py-2">{cell.catalog || '—'}</td>
                  <td className="px-3 py-2">{cell.seriesName}</td>
                  <td className="px-3 py-2">
                    {cell.pdf ? <a className="font-bold text-plum underline" href={cell.pdf} target="_blank" rel="noreferrer">PDF</a> : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {results.length === 0 && <p className="mt-4">No published model matches that search. Contact sales@tadiranbat.com for a distributor quote.</p>}
      </div>
    </div>
  )
}
