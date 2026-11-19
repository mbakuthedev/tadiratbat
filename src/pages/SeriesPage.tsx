import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { SpecTable } from '../components/SpecTable'
import { findSeries } from '../data/products'

export function SeriesPage() {
  const { slug = '' } = useParams()
  const item = findSeries(slug)
  const [query, setQuery] = useState('')

  const groups = useMemo(() => {
    if (!item) return []
    const value = query.trim().toLowerCase()
    if (!value) return item.groups
    return item.groups
      .map((group) => ({
        ...group,
        rows: group.rows.filter((row) => `${row.model} ${row.catalog || ''} ${row.size || ''}`.toLowerCase().includes(value)),
      }))
      .filter((group) => group.rows.length)
  }, [item, query])

  if (!item) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl">Product family not found</h1>
        <Link to="/products" className="mt-4 inline-block text-plum underline">Back to products</Link>
      </div>
    )
  }

  return (
    <div>
      <PageTitle kicker="Products" title={item.name} lede={item.tagline} />
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-10 md:px-6 lg:grid-cols-[320px_1fr]">
        <img src={item.image} alt="" className="w-full border border-neutral-200 object-cover" />
        <div className="prose-tadiran text-[16px] leading-7">
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      {(item.applications || item.benefits) && (
        <div className="mx-auto grid max-w-[1100px] gap-8 px-4 pb-6 md:grid-cols-2 md:px-6">
          {item.applications && (
            <div>
              <h3 className="text-[24px]">Typical Applications</h3>
              <ul className="mt-3 list-disc pl-5 text-[15px] leading-7">
                {item.applications.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          )}
          {item.benefits && (
            <div>
              <h3 className="text-[24px]">Key Benefits</h3>
              <ul className="mt-3 list-disc pl-5 text-[15px] leading-7">
                {item.benefits.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {item.groups.length > 0 && (
        <div className="mx-auto max-w-[1100px] px-4 pb-12 md:px-6">
          <label className="mb-6 block max-w-md text-sm font-bold">
            Filter models
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Model or catalog number" className="mt-2 w-full border border-neutral-300 px-3 py-2 font-normal outline-none focus:border-magenta" />
          </label>
          {groups.map((group) => (
            <SpecTable key={group.title} group={group} seriesSlug={item.slug} />
          ))}
          {groups.length === 0 && <p>No model matches that filter.</p>}
        </div>
      )}
    </div>
  )
}
