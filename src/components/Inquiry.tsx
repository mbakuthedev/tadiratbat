import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

type InquiryValues = {
  firstName: string
  lastName: string
  email: string
  jobTitle: string
  company: string
  message: string
}

const empty: InquiryValues = {
  firstName: '',
  lastName: '',
  email: '',
  jobTitle: '',
  company: '',
  message: '',
}

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<InquiryValues>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryValues, string>>>({})

  function update(key: keyof InquiryValues, value: string) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  function validate() {
    const next: Partial<Record<keyof InquiryValues, string>> = {}
    if (!values.firstName.trim()) next.firstName = 'Enter a first name.'
    if (!values.lastName.trim()) next.lastName = 'Enter a last name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Enter a valid email address.'
    if (!values.company.trim()) next.company = 'Enter a company.'
    if (values.message.trim().length < 10) next.message = 'Tell us a little more about the application.'
    return next
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    setErrors(validate())
  }

  const fields: { key: keyof InquiryValues; label: string; area?: boolean }[] = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'jobTitle', label: 'Job Title' },
    { key: 'company', label: 'Company' },
    { key: 'message', label: 'Message', area: true },
  ]

  return (
    <form onSubmit={onSubmit} noValidate className={compact ? 'grid gap-3' : 'grid gap-3 md:grid-cols-2'}>
      {fields.map((field) => (
        <label key={field.key} className={`block text-sm ${field.area ? 'md:col-span-2' : ''}`}>
          <span className="sr-only">{field.label}</span>
          {field.area ? (
            <textarea
              value={values[field.key]}
              placeholder={field.label}
              rows={4}
              onChange={(event) => update(field.key, event.target.value)}
              className="w-full border border-neutral-300 px-3 py-2 text-[15px] outline-none focus:border-magenta"
            />
          ) : (
            <input
              value={values[field.key]}
              placeholder={field.label}
              onChange={(event) => update(field.key, event.target.value)}
              className="w-full border border-neutral-300 px-3 py-2 text-[15px] outline-none focus:border-magenta"
            />
          )}
          {errors[field.key] && <span className="mt-1 block text-xs text-red-700">{errors[field.key]}</span>}
        </label>
      ))}
      <div className={compact ? '' : 'md:col-span-2'}>
        <button type="submit" className="bg-navy px-8 py-2.5 text-sm font-extrabold tracking-wide text-white hover:bg-[#1c1e57]">
          SUBMIT
        </button>
      </div>
    </form>
  )
}

export function InquiryBand() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-[1100px] gap-8 px-4 py-12 md:grid-cols-[1fr_1.1fr] md:px-6">
        <div>
          <h3 className="text-[28px] text-black">Let us know more about your application.</h3>
          <p className="mt-4 text-[16px] leading-7">
            From research and design, to world class ISO 9001:2000 certified manufacturing and quality assurance, to a global sales and distribution network, Tadiran is ready to serve your needs with standard cells or custom battery packs.
          </p>
          <p className="mt-4 text-[15px] leading-7">
            2001 Marcus Ave., Suite 125E, Lake Success, NY 11042
            <br />
            1-800-537-1368 | (516) 621-4980 | Fax: (516) 621-4517
          </p>
          <Link to="/questionnaire" className="mt-4 inline-block text-sm font-bold text-plum underline">
            Submit an Application Questionnaire
          </Link>
        </div>
        <InquiryForm compact />
      </div>
    </section>
  )
}
