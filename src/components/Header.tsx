import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { applications } from '../data/applications'
import { series } from '../data/products'
import { CALC_ICON, LOGO } from '../data/site'

type Child = { label: string; to?: string; href?: string }
type Item = { label: string; to?: string; children?: Child[]; accent?: boolean }

const items: Item[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Products',
    to: '/products',
    children: [
      ...series.map((item) => ({ label: item.menu, to: `/products/${item.slug}` })),
      { label: 'Lithium Battery Application Questionnaire', to: '/questionnaire' },
    ],
  },
  {
    label: 'Applications',
    children: [
      ...applications.map((item) => ({ label: item.name.replace('Utility/AMR/AMI', 'AMR/AMI Utility Metering').replace('Industrial IoT', 'Industrial Internet of Things').replace('Military & Aerospace', 'Military/Aerospace'), to: `/applications/${item.slug}` })),
      { label: 'Lithium Battery Application Questionnaire', to: '/questionnaire' },
    ],
  },
  { label: 'Stock Check', to: '/stock-check' },
  {
    label: 'Technical Data',
    to: '/technical-data',
    children: [
      { label: 'Product Overview', to: '/technical-data/product-overview' },
      { label: 'Comparing Lithium Chemistries', to: '/technical-data/comparing-lithium-chemistries' },
      { label: 'Long-Life Lithium Batteries', to: '/technical-data/long-life-lithium-batteries' },
      { label: 'Better by Design', to: '/technical-data/better-by-design' },
      { label: 'Design Guide on Lithium Batteries for Harsh Environments', href: 'https://eeworldonline.tradepub.com/free/w_defa4462/' },
      { label: 'UN 38.3 Test Summary Reports', to: '/technical-data/un-38-3' },
      { label: 'EU Battery Regulations', to: '/technical-data/eu-battery-regulations' },
      { label: 'Packaging and Shipping', to: '/technical-data/packaging-and-shipping' },
      { label: 'Material Safety Data Sheets', to: '/technical-data/safety-data-sheets' },
      { label: 'Third Party Certifications', to: '/technical-data/third-party-certifications' },
      { label: 'UL-Listed', to: '/technical-data/ul-listed' },
      { label: 'Product Data Sheets', to: '/technical-data/product-data-sheets' },
      { label: 'Products No Longer Supported', to: '/technical-data/discontinued-products' },
      { label: 'Terms and Conditions', to: '/technical-data/terms-and-conditions' },
      { label: 'Lithium Battery Application Questionnaire', to: '/questionnaire' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Battery Calculator', to: '/battery-calculator', accent: true },
]

function ChildLink({ child, onClick }: { child: Child; onClick?: () => void }) {
  const className = 'block px-5 py-3 text-[13px] text-black no-underline hover:bg-mist hover:text-magenta'
  if (child.href) {
    return (
      <a href={child.href} target="_blank" rel="noreferrer" className={className} onClick={onClick}>
        {child.label}
      </a>
    )
  }
  return (
    <Link to={child.to || '/'} className={className} onClick={onClick}>
      {child.label}
    </Link>
  )
}

export function Header() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  function search(event: FormEvent) {
    event.preventDefault()
    const value = query.trim()
    if (!value) return
    setOpen(false)
    navigate(`/search?q=${encodeURIComponent(value)}`)
  }

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 py-3 lg:px-6">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Tadiran Batteries" className="h-[42px] w-auto" />
        </Link>
        <nav className="ml-auto hidden items-center xl:flex">
          {items.map((item) => (
            <div key={item.label} className="group relative">
              {item.to ? (
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-2 py-2.5 text-[13.6px] font-bold underline decoration-1 underline-offset-4 ${
                      item.accent
                        ? 'mx-1 border-2 border-calc px-2 text-calc'
                        : isActive
                          ? 'text-magenta'
                          : 'text-white hover:text-magenta'
                    }`
                  }
                >
                  {item.accent && <img src={CALC_ICON} alt="" className="h-5 w-5 object-contain" />}
                  {item.label}
                  {item.children && <ChevronDown size={12} />}
                </NavLink>
              ) : (
                <button type="button" className="flex items-center gap-1 px-2 py-2.5 text-[13.6px] font-bold text-white underline decoration-1 underline-offset-4 hover:text-magenta">
                  {item.label}
                  <ChevronDown size={12} />
                </button>
              )}
              {item.children && (
                <div className="invisible absolute left-0 top-full z-20 min-w-[280px] border border-neutral-200 bg-white opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <ChildLink key={child.label} child={child} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <form onSubmit={search} className="ml-auto hidden w-[210px] md:flex xl:ml-3" role="search">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search"
            placeholder="Search"
            className="h-9 w-full border-0 bg-white px-3 text-sm text-black outline-none"
          />
          <button type="submit" aria-label="Search" className="grid h-9 w-9 place-items-center bg-white text-black">
            <Search size={18} />
          </button>
        </form>
        <button type="button" className="ml-auto grid h-10 w-10 place-items-center xl:hidden" aria-label="Menu Toggle" onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <form onSubmit={search} className="flex px-4 pb-3 md:hidden" role="search">
        <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search" placeholder="Search" className="h-10 flex-1 bg-white px-3 text-sm text-black outline-none" />
        <button type="submit" aria-label="Search" className="grid h-10 w-10 place-items-center bg-white text-black">
          <Search size={18} />
        </button>
      </form>
      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-black xl:hidden">
          {items.map((item) => (
            <div key={item.label} className="border-b border-white/10">
              <div className="flex items-center">
                {item.to ? (
                  <Link to={item.to} className="flex-1 px-4 py-3 text-sm font-bold underline" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                ) : (
                  <button type="button" className="flex-1 px-4 py-3 text-left text-sm font-bold underline" onClick={() => setMobileSection((current) => (current === item.label ? null : item.label))}>
                    {item.label}
                  </button>
                )}
                {item.children && (
                  <button type="button" aria-label={`${item.label} submenu`} className="px-4 py-3" onClick={() => setMobileSection((current) => (current === item.label ? null : item.label))}>
                    <ChevronDown size={16} className={mobileSection === item.label ? 'rotate-180' : ''} />
                  </button>
                )}
              </div>
              {item.children && mobileSection === item.label && (
                <div className="bg-white">
                  {item.children.map((child) => (
                    <ChildLink key={child.label} child={child} onClick={() => setOpen(false)} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  )
}
