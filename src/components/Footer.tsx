import { Link } from 'react-router-dom'
import { company, LOGO } from '../data/site'

const technical = [
  { label: 'Product Overview', to: '/technical-data/product-overview' },
  { label: 'Testimonials', to: '/technical-data/testimonials' },
  { label: 'Comparing Lithium Batteries', to: '/technical-data/comparing-lithium-chemistries' },
  { label: 'Long-Life Lithium Batteries', to: '/technical-data/long-life-lithium-batteries' },
  { label: 'Better by Design', to: '/technical-data/better-by-design' },
  { label: 'UN 38.3 Test Summary Reports', to: '/technical-data/un-38-3' },
  { label: 'Packaging and Shipping', to: '/technical-data/packaging-and-shipping' },
  { label: 'Safety Data Sheets', to: '/technical-data/safety-data-sheets' },
  { label: 'Third Party Certifications', to: '/technical-data/third-party-certifications' },
  { label: 'Discontinued Products', to: '/technical-data/discontinued-products' },
  { label: 'UL-Listed', to: '/technical-data/ul-listed' },
  { label: 'Product Data Sheets', to: '/technical-data/product-data-sheets' },
  { label: 'Terms and Conditions', to: '/technical-data/terms-and-conditions' },
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-12 md:grid-cols-[1.1fr_1fr] md:px-6">
        <div>
          <Link to="/">
            <img src={LOGO} alt="Tadiran Batteries" className="h-10 w-auto" />
          </Link>
          <p className="mt-6 text-[15px] leading-7">
            {company.address[0]}
            <br />
            {company.address[1]}
          </p>
          <p className="mt-4 text-[15px] leading-7">
            Telephone: {company.phone}
            <br />
            Toll Free Telephone: {company.tollFree}
            <br />
            Fax: {company.fax}
            <br />
            E-mail:{' '}
            <a className="underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <div className="mt-5 flex gap-3">
            {company.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className="grid h-9 w-9 place-items-center rounded-full border border-white/40 text-xs font-extrabold hover:border-magenta hover:text-magenta">
                {item.label.slice(0, 2)}
              </a>
            ))}
          </div>
          <Link to="/" className="mt-6 inline-block text-sm font-extrabold underline">
            BACK TO HOME
          </Link>
        </div>
        <div>
          <h6 className="text-lg">Technical Information</h6>
          <ul className="mt-4 grid gap-1.5 text-[14px] sm:grid-cols-2">
            {technical.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="underline hover:text-magenta">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/70">
        Tadiran Batteries · Lake Success, NY · Product documents open the public files posted by Tadiran.
      </div>
    </footer>
  )
}
