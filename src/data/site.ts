export const LOGO = 'https://tadiranbat.com/wp-content/uploads/2021/12/Logo.png'
export const CALC_ICON = 'https://tadiranbat.com/wp-content/uploads/2026/04/battery_calculator_icon.webp'
export const HERO = 'https://tadiranbat.com/wp-content/uploads/2022/03/top-background3.jpg'
export const PATTERN = 'https://tadiranbat.com/wp-content/uploads/2021/12/pattern-blue.png'
export const BATTERY_PHOTO = 'https://tadiranbat.com/wp-content/uploads/2021/12/TADIRAN19-BACK.jpeg'
export const SELF_DISCHARGE = 'https://tadiranbat.com/wp-content/uploads/2022/02/annual-self-discharge-diagram-hp255x315.png'
export const CALLOUT = 'https://tadiranbat.com/wp-content/uploads/2022/01/callout.png'
export const PODCAST = 'https://tadiranbat.com/wp-content/uploads/2024/06/Embedded-Executive-Jacobsv2.jpg'
export const CALC_IMAGE = 'https://tadiranbat.com/wp-content/uploads/2026/04/battery_calculator_image.webp'
export const MAP = 'https://tadiranbat.com/wp-content/uploads/2022/02/map-northamerica.jpg'
export const UL_LOGO = 'https://tadiranbat.com/wp-content/uploads/2022/03/ul-logo.jpg'
export const FACTORY = 'https://tadiranbat.com/wp-content/uploads/2022/03/comp-inisraelnewretouch.jpg'
export const MECTRONIC = 'https://tadiranbat.com/wp-content/uploads/2022/02/mectronic-logo155x51.png'
export const PR_ICON = 'https://tadiranbat.com/wp-content/uploads/2022/03/PR-icon.png'

export const company = {
  name: 'Tadiran Batteries',
  division: 'Tadiran U.S. Battery Division',
  address: ['2001 Marcus Avenue, Suite 125E', 'Lake Success, NY 11042'],
  phone: '1-516-621-4980',
  tollFree: '1-800-537-1368',
  fax: '(516) 621-4517',
  email: 'sales@tadiranbat.com',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/pages/Tadiran-Batteries/214427401918957' },
    { label: 'Twitter', href: 'https://twitter.com/TadiranBat' },
    { label: 'Linkedin', href: 'https://www.linkedin.com/company/tadiran-batteries-ltd' },
  ],
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/™/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
