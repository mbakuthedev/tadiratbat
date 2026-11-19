import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { applications } from '../data/applications'

export function ApplicationsPage() {
  return (
    <div>
      <PageTitle title="Applications" lede="Browse the industries Tadiran publishes as fits for ultra-long-life lithium batteries." />
      <div className="mx-auto grid max-w-[1100px] gap-4 px-4 py-10 sm:grid-cols-2 md:px-6 lg:grid-cols-3">
        {applications.map((item) => (
          <Link key={item.slug} to={`/applications/${item.slug}`} className="relative block aspect-square overflow-hidden no-underline">
            <img src={item.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
            <span className="absolute inset-x-3 bottom-4 text-center text-[26px] font-black text-white">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
