import { Link } from 'react-router-dom'
import { applications } from '../data/applications'
import { series } from '../data/products'
import { BATTERY_PHOTO, HERO, PATTERN, SELF_DISCHARGE } from '../data/site'

const stories = [
  {
    title: 'Bringing Fresh Drinking Water to Remote Villages',
    text: 'Millions of people worldwide lack access to fresh drinking water because the hand pumps they rely upon are broken.',
    href: 'https://waterfm.com/how-battery-powered-wireless-sensors-help-preserve-water-resources/',
    label: 'READ MORE',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/WashingtonPassAtlantic_jpg-copy-2.jpeg',
  },
  {
    title: 'Aclara Automatic Meter Reading (AMR) Units Rely on Tadiran Batteries',
    text: 'Meters installed decades ago are still operating on the original Tadiran cell.',
    href: 'https://youtu.be/VXLeVZC0BfE',
    label: 'Watch on YouTube',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/utility-web.jpg',
  },
  {
    title: 'Amsafe - The Benefit of Airbags',
    text: 'Aviation airbags powered by PulsesPlus batteries that deploy in under 50 milliseconds.',
    href: 'https://youtu.be/FboAm9RqUXM',
    label: 'Watch on YouTube',
    image: 'https://tadiranbat.com/wp-content/uploads/2021/12/jh.png',
  },
]

export function HomePage() {
  const featured = series.filter((item) => ['xol', 'pulsesplus', 'tlh', 'tlm', 'tli', 'ixtra'].includes(item.slug))

  return (
    <div>
      <section className="relative min-h-[640px] bg-cover bg-center text-white md:min-h-[760px]" style={{ backgroundImage: `url(${HERO})` }}>
        <div className="mx-auto flex max-w-[1100px] flex-col justify-center px-4 py-16 md:min-h-[760px] md:px-6 md:py-24">
          <h2 className="max-w-[760px] text-[40px] font-black leading-[1.05] md:text-[62px]">
            Batteries powering your devices to the EXTREME…
          </h2>
          <p className="mt-6 max-w-[760px] text-[28px] font-bold leading-tight md:text-[40px]">
            The world’s #1 manufacturer of ultra-long-life lithium batteries for industrial applications.
          </p>
          <div className="mt-8 flex w-full max-w-[360px] flex-col gap-4">
            <Link to="/battery-calculator" className="rounded-full border border-hot bg-white px-6 py-3 text-center text-[16px] font-extrabold text-black no-underline hover:bg-neutral-100">
              BATTERY CALCULATOR
            </Link>
            <a href="#applications" className="rounded-full border border-hot bg-white px-6 py-3 text-center text-[16px] font-extrabold text-black no-underline hover:bg-neutral-100">
              BROWSE BY APPLICATION
            </a>
            <a href="#products" className="rounded-full border border-hot bg-white px-6 py-3 text-center text-[16px] font-extrabold text-black no-underline hover:bg-neutral-100">
              VIEW OUR PRODUCTS
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#123a86] bg-cover text-white" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,32,92,.88), rgba(8,32,92,.55)), url(${PATTERN})` }}>
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-4 py-14 md:grid-cols-2 md:px-6">
          <div>
            <h2 className="text-[32px] font-extrabold md:text-[46px]">Tadiran lithium batteries: The power behind wireless devices</h2>
            <p className="mt-5 text-[17px] leading-8">
              Nearly 50 years ago, Tadiran pioneered the lithium thionyl chloride (LiSOCl2) battery for remote wireless applications. As the industry leader, Tadiran is dedicated to delivering ultra-long-life power for many different applications.
            </p>
            <Link to="/technical-data/better-by-design" className="mt-6 inline-block bg-navy px-8 py-2.5 text-[15px] font-extrabold text-white no-underline hover:bg-[#1c1e57]">
              READ MORE
            </Link>
          </div>
          <img src={BATTERY_PHOTO} alt="Tadiran lithium cells" className="w-full object-contain" />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-4 py-14 md:grid-cols-[1.2fr_.8fr] md:px-6">
          <div>
            <h2 className="text-[32px] md:text-[44px]">Beware of Imitators: Low Self-Discharge Extends Battery Life Up to 4X Longer</h2>
            <p className="mt-5 text-[17px] leading-8">Don’t be fooled by competing LiSOCl2 batteries that have an annual self-discharge rate of up to 3%.</p>
            <Link to="/be-aware-of-imitators" className="mt-6 inline-block bg-navy px-8 py-2.5 text-[15px] font-extrabold text-white no-underline hover:bg-[#1c1e57]">
              LEARN MORE
            </Link>
          </div>
          <img src={SELF_DISCHARGE} alt="Annual self-discharge comparison" className="mx-auto w-full max-w-[280px]" />
        </div>
      </section>

      <div className="h-16 bg-[linear-gradient(160deg,#56ab2f_0%,#7cdf5b_100%)]" />

      <section id="products" className="bg-white">
        <div className="mx-auto max-w-[1100px] px-4 py-14 md:px-6">
          <h2 className="text-[40px] md:text-[49px]">Our Products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <Link key={item.slug} to={`/products/${item.slug}`} className="group border border-neutral-200 bg-white no-underline shadow-sm hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-mist">
                  <img src={item.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-[22px] text-ink">{item.menu}</h3>
                  <p className="mt-2 text-[15px] text-black">{item.card}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="bg-mist">
        <div className="mx-auto max-w-[1100px] px-4 py-14 md:px-6">
          <h2 className="text-[40px] font-black md:text-[49px]">Applications</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <Link key={item.slug} to={`/applications/${item.slug}`} className="group relative block aspect-square overflow-hidden no-underline">
                <img src={item.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                <h5 className="absolute inset-x-3 bottom-4 text-center text-[26px] font-black leading-tight text-white md:text-[30px]">{item.name}</h5>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1100px] px-4 py-14 md:px-6">
          <h2 className="text-[40px] font-black md:text-[49px]">Real World Applications</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <article key={story.title} className="border border-neutral-200">
                <img src={story.image} alt="" className="aspect-[16/10] w-full object-cover" />
                <div className="p-5">
                  <h6 className="text-[20px]">{story.title}</h6>
                  <p className="mt-3 text-[15px] leading-6">{story.text}</p>
                  <a href={story.href} target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-[3px] border-2 border-transparent bg-white px-5 py-2 text-[15px] font-medium text-plum shadow-sm ring-1 ring-neutral-200">
                    {story.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
