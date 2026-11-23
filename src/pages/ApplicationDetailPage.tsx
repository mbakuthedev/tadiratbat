import { Link, useParams } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { findApplication } from '../data/applications'
import { findSeries } from '../data/products'

export function ApplicationDetailPage() {
  const { slug = '' } = useParams()
  const item = findApplication(slug)
  if (!item) {
    return (
      <div className="mx-auto max-w-[1100px] px-4 py-16">
        <h1 className="text-4xl">Application not found</h1>
        <Link to="/applications" className="mt-4 inline-block text-plum underline">All applications</Link>
      </div>
    )
  }
  return (
    <div>
      <PageTitle kicker="Applications" title={item.name} lede={item.summary} />
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-10 md:px-6 lg:grid-cols-[340px_1fr]">
        <img src={item.image} alt="" className="w-full object-cover" />
        <div className="text-[16px] leading-7">
          {item.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4">{paragraph}</p>
          ))}
          <h2 className="mt-6 text-[26px]">Commonly chosen families</h2>
          <ul className="mt-3 space-y-2">
            {item.series.map((seriesSlug) => {
              const family = findSeries(seriesSlug)
              return (
                <li key={seriesSlug}>
                  <Link to={`/products/${seriesSlug}`} className="font-bold text-plum underline">
                    {family?.menu || seriesSlug}
                  </Link>
                </li>
              )
            })}
          </ul>
          {!item.verified && (
            <p className="mt-6 text-sm text-ink">
              Summary compiled from Tadiran’s published application categories and product positioning. The utility-metering, military, high-temperature, low-temperature, and oceanographic pages include text taken from the public site.
            </p>
          )}
          <Link to="/contact" className="mt-6 inline-block bg-navy px-6 py-3 text-sm font-extrabold text-white no-underline">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
