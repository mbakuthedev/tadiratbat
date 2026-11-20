import { useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { InquiryForm } from '../components/Inquiry'
import { PageTitle } from '../components/PageTitle'
import { applications } from '../data/applications'
import { company } from '../data/site'

export function ContactPage() {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-10 md:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-[26px]">Contact</h2>
          <p className="mt-3 text-[16px] leading-7">
            {company.address[0]}
            <br />
            {company.address[1]}
            <br />
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

type Questionnaire = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  application: string
  life: string
  temp: string
  current: string
  pulse: string
  notes: string
}

const initial: Questionnaire = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  application: applications[0]?.slug ?? '',
  life: '',
  temp: '',
  current: '',
  pulse: '',
  notes: '',
}

export function QuestionnairePage() {
  const [values, setValues] = useState<Questionnaire>(initial)
  const [errors, setErrors] = useState<string[]>([])

  function set<K extends keyof Questionnaire>(key: K, value: Questionnaire[K]) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const next: string[] = []
    if (!values.firstName.trim()) next.push('First name is required.')
    if (!values.lastName.trim()) next.push('Last name is required.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.push('A valid email is required.')
    if (!values.company.trim()) next.push('Company is required.')
    if (!values.life.trim()) next.push('Operating life is required.')
    setErrors(next)
  }

  const fieldClass = 'mt-1 w-full border border-neutral-300 px-3 py-2 outline-none focus:border-magenta'

  return (
    <div>
      <PageTitle title="Lithium Battery Application Questionnaire" lede="Tell Tadiran how the device sleeps, pulses, and where it lives. A detailed lifetime model is prepared by their engineering team from a real power profile." />
      <form onSubmit={onSubmit} noValidate className="mx-auto grid max-w-[800px] gap-4 px-4 py-10 md:px-6">
        {errors.length > 0 && (
          <ul className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
            {errors.map((error) => <li key={error}>{error}</li>)}
          </ul>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          <label>First name<input className={fieldClass} value={values.firstName} onChange={(event) => set('firstName', event.target.value)} /></label>
          <label>Last name<input className={fieldClass} value={values.lastName} onChange={(event) => set('lastName', event.target.value)} /></label>
          <label>Email<input className={fieldClass} value={values.email} onChange={(event) => set('email', event.target.value)} /></label>
          <label>Phone<input className={fieldClass} value={values.phone} onChange={(event) => set('phone', event.target.value)} /></label>
          <label className="sm:col-span-2">Company<input className={fieldClass} value={values.company} onChange={(event) => set('company', event.target.value)} /></label>
          <label className="sm:col-span-2">
            Application
            <select className={fieldClass} value={values.application} onChange={(event) => set('application', event.target.value)}>
              {applications.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
            </select>
          </label>
          <label>Required operating life<input className={fieldClass} placeholder="Years" value={values.life} onChange={(event) => set('life', event.target.value)} /></label>
          <label>Temperature range<input className={fieldClass} placeholder="e.g. −40°C to +85°C" value={values.temp} onChange={(event) => set('temp', event.target.value)} /></label>
          <label>Average background current<input className={fieldClass} placeholder="µA" value={values.current} onChange={(event) => set('current', event.target.value)} /></label>
          <label>Pulse current<input className={fieldClass} placeholder="mA and duration" value={values.pulse} onChange={(event) => set('pulse', event.target.value)} /></label>
        </div>
        <label>
          Notes
          <textarea className={fieldClass} rows={5} value={values.notes} onChange={(event) => set('notes', event.target.value)} />
        </label>
        <button type="submit" className="w-fit bg-navy px-8 py-3 text-sm font-extrabold text-white">SUBMIT QUESTIONNAIRE</button>
      </form>
    </div>
  )
}
