import { Link } from 'react-router-dom'
import { PageTitle } from '../components/PageTitle'
import { SELF_DISCHARGE } from '../data/site'

export function ImitatorsPage() {
  return (
    <div>
      <PageTitle title="Be Aware of Imitators" lede="Bobbin-type lithium thionyl chloride (LiSOCl2) batteries are not created equal." />
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-10 md:px-6 lg:grid-cols-[1fr_280px]">
        <div className="text-[16px] leading-7">
          <p>Tadiran batteries are manufactured to the highest standards using decades of technical work, resulting in a bobbin-type LiSOCl2 battery the company presents as unmatched on performance and reliability.</p>
          <p className="mt-4">Tadiran bobbin-type LiSOCl2 batteries feature an annual self-discharge rate of 0.7% per year, so after 30 years the battery can retain nearly 80% of its original capacity.</p>
          <p className="mt-4">Competing LiSOCl2 batteries can have an annual self-discharge rate of up to 3%, so after 30 years those batteries can have exhausted up to 90% of their original capacity. Once average annual current is included, competing batteries can fall below usable capacity in less than 10 years, which raises the total cost of ownership.</p>
          <h2 className="mt-8 text-[32px]">Why are Tadiran batteries so much better?</h2>
          <p className="mt-4">The published answer is the quality of the raw materials and proprietary manufacturing that has been refined for more than 30 years. Over 100 steps go into a Tadiran battery. A shortcut can affect performance and reliability.</p>
          <p className="mt-4">Inferior electrolyte materials or an unoptimized process can produce batch-to-batch inconsistency, even if a new cell looks the same on day one. Tadiran asks designers to demand documentation on the source of raw materials and multiple customer references, because a primary lithium cell is hard to test in a way that simulates decades in the field.</p>
          <p className="mt-4 font-bold">Low self-discharge extends battery life up to 4× longer.</p>
        </div>
        <img src={SELF_DISCHARGE} alt="Annual self-discharge diagram" className="w-full" />
      </div>
      <div className="mx-auto max-w-[1100px] px-4 pb-10 md:px-6">
        <Link to="/contact" className="bg-navy px-6 py-3 text-sm font-extrabold text-white no-underline">Contact us</Link>
      </div>
    </div>
  )
}

export function NotFoundPage() {
  return (
    <div>
      <PageTitle title="Page not found" lede="That address is not part of this Tadiran recreation." />
      <div className="mx-auto max-w-[800px] px-4 py-10 md:px-6">
        <Link to="/" className="font-bold text-plum underline">Back to home</Link>
      </div>
    </div>
  )
}
