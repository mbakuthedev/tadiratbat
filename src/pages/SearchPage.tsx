import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { applications } from '../data/applications'
import { articles, pressReleases, whitepapers } from '../data/content'
import { allCells, cellSlug, series } from '../data/products'
import { articleSlug } from './MediaPages'

const staticPages = [
  { title: 'Contact Us', to: '/contact' },
  { title: 'Battery Calculator', to: '/battery-calculator' },
  { title: 'Stock Check', to: '/stock-check' },
  { title: 'Application Questionnaire', to: '/questionnaire' },
  { title: 'Product Data Sheets', to: '/technical-data/product-data-sheets' },
  { title: 'Safety Data Sheets', to: '/technical-data/safety-data-sheets' },
  { title: 'North America Distributors', to: '/distributors/north-america' },
  { title: 'International Distributors', to: '/distributors/international' },
]

export function SearchPage() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') || ''
  const results = useMemo(() => search(query), [query])

  return (
    <div>
      <PageTitle title="Search" lede={query ? `Results for “${query}”` : 'Search products, applications, articles, and documents.'} />
      <div className="mx-auto max-w-[900px] px-4 py-10 md:px-6">
        <form
          className="flex gap-2"
          onSubmit={(event) => {
            event.preventDefault()
            const data = new FormData(event.currentTarget)
            setParams({ q: String(data.get('q') || '') })
          }}
        >
          <input name="q" defaultValue={query} aria-label="Search" className="h-11 flex-1 border border-neutral-300 px-3 outline-none focus:border-magenta" />
          <button className="bg-black px-5 text-sm font-extrabold text-white">SEARCH</button>
        </form>
        <ul className="mt-8 divide-y divide-neutral-200">
          {results.map((result) => (
            <li key={result.to + result.title} className="py-4">
              <p className="text-xs font-extrabold uppercase tracking-wide text-magenta">{result.kind}</p>
              <Link to={result.to} className="text-[18px] font-bold text-plum underline">{result.title}</Link>
              <p className="text-sm text-ink">{result.text}</p>
            </li>
          ))}
        </ul>
        {query && results.length === 0 && <p className="mt-6">Nothing in the public catalog matches that search.</p>}
      </div>
    </div>
  )
}

function search(query: string) {
  const value = query.trim().toLowerCase()
  if (value.length < 2) return []
  const hits: { kind: string; title: string; text: string; to: string }[] = []
  for (const item of series) {
    if (`${item.name} ${item.menu} ${item.card} ${item.paragraphs.join(' ')}`.toLowerCase().includes(value)) {
      hits.push({ kind: 'Product family', title: item.name, text: item.card, to: `/products/${item.slug}` })
    }
  }
  for (const cell of allCells()) {
    if (`${cell.model} ${cell.catalog || ''}`.toLowerCase().includes(value)) {
      hits.push({ kind: 'Model', title: cell.model, text: cell.seriesName, to: `/products/${cell.series}/${cellSlug(cell.model)}` })
    }
  }
  for (const item of applications) {
    if (`${item.name} ${item.summary} ${item.paragraphs.join(' ')}`.toLowerCase().includes(value)) {
      hits.push({ kind: 'Application', title: item.name, text: item.summary, to: `/applications/${item.slug}` })
    }
  }
  for (const item of articles) {
    if (`${item.title} ${item.source}`.toLowerCase().includes(value)) {
      hits.push({ kind: 'Article', title: item.title, text: item.source, to: `/media/articles/${articleSlug(item.title)}` })
    }
  }
  for (const item of pressReleases) {
    if (item.title.toLowerCase().includes(value)) {
      hits.push({ kind: 'Press release', title: item.title, text: item.detail, to: '/media/press-releases' })
    }
  }
  for (const item of whitepapers) {
    if (`${item.title} ${item.summary}`.toLowerCase().includes(value)) {
      hits.push({ kind: 'Whitepaper', title: item.title, text: item.summary, to: `/media/whitepapers/${item.slug}` })
    }
  }
  for (const item of staticPages) {
    if (item.title.toLowerCase().includes(value)) hits.push({ kind: 'Page', title: item.title, text: '', to: item.to })
  }
  return hits.slice(0, 40)
}
