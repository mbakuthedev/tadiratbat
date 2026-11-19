export type Application = {
  slug: string
  name: string
  image: string
  summary: string
  paragraphs: string[]
  series: string[]
  verified: boolean
}

export const applications: Application[] = [
  {
    slug: 'amr-ami-utility-metering',
    name: 'Utility/AMR/AMI',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/utility-web.jpg',
    summary: 'Water, gas, and electric meters designed to last as long as the meter.',
    verified: true,
    series: ['xol', 'ixtra', 'pulsesplus', 'tli'],
    paragraphs: [
      'Tadiran pioneered the use of bobbin-type lithium thionyl chloride (LiSOCl2) batteries used by water, gas, and electric utilities. Ultra-long-life cells were designed to power AMR/AMI meters, including meters with two-way wireless communications, and to power memory and real-time-clock backup for GSM communication modules.',
      'After more than 40 years in the field, Tadiran describes itself as the utility metering industry’s leading supplier of ultra-long-life lithium batteries for mechanical and ultrasonic meters designed to last 20–30 years. That service life is intended to match the meter and avoid a mid-life battery change.',
      'Many of these devices use PulsesPlus batteries: a bobbin-type LiSOCl2 cell for background current plus a patented hybrid layer capacitor for the high pulses of two-way communications. The HLC voltage plateau can be interpreted as a low-battery status alert.',
      'Where a rechargeable cell is required, TLI Series industrial Li-ion batteries are offered for up to 20 years and 5,000 full recharge cycles, including backup power for smart electricity meters during an outage.',
      'When Aclara, formerly Hexagram, replaced older meters, tests of the original Tadiran batteries found significant unused capacity after more than 28 years in the field.',
    ],
  },
  {
    slug: 'remote-wireless',
    name: 'Remote Wireless',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/copy-P8141524-web-1.jpg',
    summary: 'The original use case for bobbin-type LiSOCl2 cells.',
    verified: false,
    series: ['xol', 'pulsesplus', 'tli'],
    paragraphs: [
      'Nearly 50 years ago Tadiran pioneered the lithium thionyl chloride battery for remote wireless applications. The published design goal is low background current, very low self-discharge, and a hermetic seal so a device can stay deployed without a battery replacement.',
      'Low-pulse sensors typically use XOL cells. Devices that wake up to transmit use PulsesPlus. Sites with a harvested energy source use TLI rechargeable cells.',
    ],
  },
  {
    slug: 'energy-harvesting',
    name: 'Energy Harvesting',
    image: 'https://tadiranbat.com/wp-content/uploads/2021/12/gf.png',
    summary: 'Industrial rechargeable cells for solar and other harvested sources.',
    verified: false,
    series: ['tli'],
    paragraphs: [
      'Energy-harvesting devices need a rechargeable cell that can accept charge in the cold, survive high pulses, and stay in the field for years. Tadiran positions TLI Series industrial Li-ion cells for this job, including TLI-A for long cycle life and TLI-1520A in compact tracking devices.',
      'The homepage cites trailer tracking that combines energy harvesting with TLI-1520A rechargeable Li-ion batteries.',
    ],
  },
  {
    slug: 'asset-tracking',
    name: 'Asset Tracking',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/Asset-tracking-iStock-822939700-home2.jpg',
    summary: 'Containers, trailers, and cargo that report for years.',
    verified: false,
    series: ['pulsesplus', 'tli', 'xol'],
    paragraphs: [
      'Asset, container, and cargo trackers are listed among typical PulsesPlus applications. The device sleeps at microamp levels and then draws a short high pulse to acquire a position and transmit.',
      'Where the tracker can harvest energy, Tadiran points to TLI rechargeable cells, including the TLI-1520A example used in trailer tracking.',
    ],
  },
  {
    slug: 'internet-of-things',
    name: 'Industrial IoT',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/iStock-540611922-home.jpg',
    summary: 'Sensors and gateways that have to outlast the installation.',
    verified: false,
    series: ['xol', 'ixtra', 'pulsesplus', 'tli'],
    paragraphs: [
      'Industrial IoT nodes are a core Tadiran application: low average current, occasional radio pulses, and operating lives measured in decades rather than product-refresh cycles.',
      'XOL covers low pulses, iXtra covers moderate continuous current, PulsesPlus covers high pulses, and TLI covers harvested or rechargeable designs.',
    ],
  },
  {
    slug: 'harsh-environments',
    name: 'Harsh Environments',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/harsh-environments2.jpg',
    summary: 'Hermetic cells for heat, cold, and long unattended life.',
    verified: false,
    series: ['xol', 'tlh', 'tlm', 'tli'],
    paragraphs: [
      'Tadiran’s published construction story is a glass-to-metal hermetic seal, non-flammable electrolyte, and a temperature window wider than consumer cells. XOL and TLH cover primary LiSOCl2 service. TLM covers high-rate pulses. TLI-HT extends rechargeable use toward +135°C.',
      'A separate design guide on lithium batteries for harsh environments is offered from the Technical Data menu.',
    ],
  },
  {
    slug: 'medical',
    name: 'Medical Products',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/Drill-w-batteries-newdrill-web.jpg',
    summary: 'AEDs, surgical tools, and devices that see autoclave heat.',
    verified: false,
    series: ['tlm', 'tlh', 'tli', 'pulsesplus'],
    paragraphs: [
      'Published TLM applications include automatic external defibrillators, surgical power tools, and portable medical devices. High pulse current and a long shelf life are the stated reasons.',
      'TLH and TLI-HT are the high-temperature families Tadiran associates with autoclave sterilization, including the Awarepoint RTLS example on the TLH page. TLI-1550HT is also announced as a high-temperature rechargeable cell modified for medical autoclave use.',
    ],
  },
  {
    slug: 'military-aerospace',
    name: 'Military & Aerospace',
    image: 'https://tadiranbat.com/wp-content/uploads/2021/12/jh.png',
    summary: 'High-rate cells qualified around shock, spin, and long storage.',
    verified: true,
    series: ['tlm-military', 'tlm', 'pulsesplus'],
    paragraphs: [
      'TLM Military Grade cells are the family Tadiran specifies for avionics, navigation, ordinance fuses, missiles, telemetry, electronic warfare, GPS tracking, shipboard equipment, and related safety devices.',
      'The published construction is a carbon-based anode, multi-metal-oxide cathode, organic electrolyte, and shut-down separator. AMSAFE aviation airbags, described in Testimonials, use PulsesPlus packs sized to deploy in under 50 milliseconds and to remain in service for 20+ years.',
    ],
  },
  {
    slug: 'infrastructure',
    name: 'Infrastructure',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/2bridge-photohome3.jpg',
    summary: 'Bridges, utilities, and other hard infrastructure that is expensive to revisit.',
    verified: false,
    series: ['xol', 'pulsesplus', 'tli'],
    paragraphs: [
      'Tadiran describes batteries combined with remote sensors on transportation, energy, solid waste, wastewater, public utilities, and smart-city infrastructure. The AMR page cites Ayyeka AI-enabled sensors, powered by bobbin-type LiSOCl2 cells, for two-way communications and predictive maintenance.',
      'Long unattended life is the selection driver. PulsesPlus is used when the sensor must transmit. TLI is used when a local energy source can recharge the cell.',
    ],
  },
  {
    slug: 'high-temperature',
    name: 'High Temperature',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/iStock-1282961342-home.jpg',
    summary: 'Primary cells to +125°C and rechargeable cells toward +135°C.',
    verified: true,
    series: ['tlh', 'tli', 'tlm'],
    paragraphs: [
      'TLH Series LiSOCl2 cells are published for −55°C to +125°C. TLM-1550HTM and TLI-1550HT extend high-temperature lithium metal oxide and rechargeable service, with TLI-HT described up to +135°C for oil and gas, geothermal, automotive, and autoclave environments.',
    ],
  },
  {
    slug: 'low-temperature',
    name: 'Low Temperature',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/low-temp-small.jpg',
    summary: 'Modified LiSOCl2 cells for cold chain and polar service.',
    verified: true,
    series: ['low-temp', 'xol', 'tlh'],
    paragraphs: [
      'The product menu lists Low Temp. LiSOCl2 service to −100°C. XOL literature describes operation from −80°C to +125°C, and TLH cold-chain versions are described down to −85°C. These are modified primary cells. Confirm the exact cold-rated part against the duty cycle before release.',
    ],
  },
  {
    slug: 'oceanographic',
    name: 'Oceanographic',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/oceanographic-small.jpg',
    summary: 'Buoys, current meters, and long deployments at sea.',
    verified: true,
    series: ['pulsesplus', 'xol'],
    paragraphs: [
      'Sonar buoys are a published PulsesPlus application. Testimonials describe PulsesPlus packs in Nortek Aquadopp acoustic wave and current meters, citing longer life, a wider temperature range, and more than three times the capacity of an equal-size alkaline pack.',
    ],
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/ecall.jpeg',
    summary: 'eCall, telematics, and other modules that sit for years, then pulse.',
    verified: false,
    series: ['pulsesplus', 'tlm', 'tli'],
    paragraphs: [
      'Emergency roadside assistance (eCall) is a published PulsesPlus and TLM application: years of standby, then a high pulse. TLI is listed for automotive systems that can recharge, including the high-temperature TLI-HT range.',
    ],
  },
  {
    slug: 'toll-tags',
    name: 'Automotive Toll Tags',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/02/fastrak.jpeg',
    summary: 'Small tags that must answer a reader for many years.',
    verified: false,
    series: ['xol', 'pulsesplus'],
    paragraphs: [
      'Toll tags need a small primary cell with very low self-discharge and enough pulse energy to answer a reader. Tadiran’s toll-tag photography is paired with long-life LiSOCl2 and PulsesPlus constructions. Match the tag’s sleep current and reader pulse to an XOL or PulsesPlus part.',
    ],
  },
  {
    slug: 'agritech',
    name: 'Agritech',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/agritech-small.jpg',
    summary: 'Field sensors for soil, livestock, and irrigation.',
    verified: false,
    series: ['xol', 'pulsesplus', 'tli'],
    paragraphs: [
      'Agricultural sensors are remote, often solar-assisted, and expensive to service. Tadiran groups them with industrial IoT: XOL or PulsesPlus for primary power, and TLI where a panel can recharge the cell across a wide temperature range.',
    ],
  },
]

export function findApplication(slug: string) {
  return applications.find((item) => item.slug === slug)
}
