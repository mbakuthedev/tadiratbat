import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { articles, pressReleases, whitepapers } from '../data/content'
import { PR_ICON } from '../data/site'

export function articleSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function ArticlesPage() {
  const [query, setQuery] = useState('')
  const rows = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return articles
    return articles.filter((article) => `${article.title} ${article.source}`.toLowerCase().includes(value))
  }, [query])
  return (
    <div>
      <PageTitle title="Articles" lede="Trade-press articles listed on the Tadiran media page. Full reprints stay with the original publications." />
      <div className="mx-auto max-w-[1100px] px-4 py-10 md:px-6">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter articles" aria-label="Filter articles" className="mb-6 w-full max-w-md border border-neutral-300 px-3 py-2 outline-none focus:border-magenta" />
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {rows.map((article) => (
            <li key={article.title} className="py-3">
              <Link to={`/media/articles/${articleSlug(article.title)}`} className="text-[17px] font-bold text-plum underline">{article.title}</Link>
              <p className="text-sm text-ink">As appeared in {article.source}</p>
            </li>
          ))}
        </ul>
        {rows.length === 0 && <p className="mt-4">No article matches that filter.</p>}
      </div>
    </div>
  )
}

export function ArticleDetailPage() {
  const { slug = '' } = useParams()
  const article = articles.find((item) => articleSlug(item.title) === slug)
  const paper = whitepapers.find((item) => item.slug === slug)
  if (!article && !paper) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl">Article not found</h1>
        <Link to="/media/articles" className="mt-4 inline-block text-plum underline">All articles</Link>
      </div>
    )
  }
  if (paper && !article) {
    return (
      <div>
        <PageTitle kicker="Whitepaper" title={paper.title} />
        <div className="mx-auto max-w-[800px] px-4 py-10 text-[17px] leading-8 md:px-6">
          <p>{paper.summary}</p>
          <p className="mt-4 text-sm text-ink">Topic summary based on specifications Tadiran publishes. The original whitepaper PDF is distributed by Tadiran and was not copied here.</p>
        </div>
      </div>
    )
  }
  return (
    <div>
      <PageTitle kicker={article?.source} title={article?.title || ''} />
      <div className="mx-auto max-w-[800px] px-4 py-10 text-[17px] leading-8 md:px-6">
        <p>
          This title is listed on Tadiran’s public articles index as appearing in {article?.source}. The full article text is published by that outlet and is not reproduced here.
        </p>
        <p className="mt-4">
          The recurring subjects in the archive are 40-year LiSOCl2 life, self-discharge, passivation, PulsesPlus pulses, industrial versus consumer cells, and energy harvesting with TLI rechargeable cells.
        </p>
        <Link to="/media/articles" className="mt-6 inline-block font-bold text-plum underline">Back to articles</Link>
      </div>
    </div>
  )
}

export function WhitepaperPage() {
  const { slug = '' } = useParams()
  const paper = whitepapers.find((item) => item.slug === slug)
  if (!paper) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl">Whitepaper not found</h1>
      </div>
    )
  }
  return (
    <div>
      <PageTitle kicker="Whitepaper" title={paper.title} />
      <div className="mx-auto max-w-[800px] px-4 py-10 text-[17px] leading-8 md:px-6">
        <p>{paper.summary}</p>
        <p className="mt-4 text-sm text-ink">Topic summary based on specifications Tadiran publishes. The original whitepaper file is not copied into this recreation.</p>
      </div>
    </div>
  )
}

export function PressPage() {
  return (
    <div>
      <PageTitle title="Press Releases" />
      <div className="mx-auto max-w-[900px] px-4 py-10 md:px-6">
        <img src={PR_ICON} alt="" className="mb-6 h-16 w-auto" />
        <ul className="space-y-6">
          {pressReleases.map((item) => (
            <li key={item.title} className="border-b border-neutral-200 pb-5">
              <h2 className="text-[22px]">{item.title}</h2>
              <p className="mt-2 text-[15px] leading-7">{item.detail}</p>
              {item.series && (
                <Link to={`/products/${item.series}`} className="mt-2 inline-block text-sm font-bold text-plum underline">Related products</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
