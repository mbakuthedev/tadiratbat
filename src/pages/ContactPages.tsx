import { Link, useLocation } from 'react-router-dom'
import { InquiryForm } from '../components/Inquiry'
import { PageTitle } from '../components/PageTitle'
import { company } from '../data/site'

export function ContactPage() {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-10 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-[26px]">Contact</h2>
          <p className="mt-3 text-[16px] leading-7">
            {company.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
            Telephone: {company.phone}
            <br />
            E-mail: <a className="text-plum underline" href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-[26px]">Let us know more about your application.</h2>
          <InquiryForm />
        </div>
      </div>
    </div>
  )
}

export function ThankYouPage() {
  const location = useLocation()
  const name = (location.state as { name?: string } | null)?.name
  return (
    <div>
      <PageTitle title="Thank you" lede={name ? `Thanks, ${name}. Your note is ready for the Tadiran sales team.` : 'Thanks. Your note is ready for the Tadiran sales team.'} />
      <div className="mx-auto max-w-[800px] px-4 py-10 text-[16px] leading-7 md:px-6">
        <p>This recreation stores the form only in your browser session and does not send it to Tadiran. To reach the company, email {company.email} or call {company.phone}.</p>
        <Link to="/" className="mt-6 inline-block bg-navy px-6 py-3 text-sm font-extrabold text-white no-underline">Back to home</Link>
      </div>
    </div>
  )
}

