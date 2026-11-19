export type DocLink = { title: string; href: string; note?: string }

export const shippingDocs: DocLink[] = [
  { title: 'Lithium Battery Shipping Guidelines', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/ltn-065final_.pdf' },
  { title: 'Transportation Regulations for TLI Rechargeable Lithium Ion Batteries', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/ltn-065-19-c_transportregulationstlieng.pdf' },
  { title: 'IATA Guidance Document — Transport of Lithium Metal and Lithium Ion Batteries (2022)', href: 'https://tadiranbat.com/wp-content/uploads/2022/11/IATA_Lithium_Battery_Guidance_2022.pdf' },
]

export const sdsDocs: DocLink[] = [
  { title: 'SDS for standard lithium batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/T-36-04_SOCl2_general_Rev-AB.pdf' },
  { title: 'SDS for 3.9V series lithium batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/TLP-101_-3_9V_PP-based_rev-P.pdf' },
  { title: 'SDS for TLM series batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/TLM-01_rev-V.pdf' },
  { title: 'SDS for TLM-HT series batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/TLM-HT_02_rev-G.pdf' },
  { title: 'SDS for TLM-1550S, 1550US, 1550ESM and 1550SPM batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/TLM-Silicon-03_rev-G.pdf' },
  { title: 'SDS for TLI series rechargeable batteries', href: 'https://tadiranbat.com/wp-content/uploads/2026/01/TLI-01_rev-S.pdf' },
  { title: 'SDS for TLI-Silicon battery', href: 'https://tadiranbat.com/wp-content/uploads/2026/01/TLI-Silicon-03_rev-H.pdf' },
  { title: 'SDS for TLI-HT series rechargeable batteries', href: 'https://tadiranbat.com/wp-content/uploads/2026/01/TLI-HT-02_rev-H.pdf' },
  { title: 'SDS for HLCs, hybrid layer capacitors', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/hlc-01_-rev-o_wois.pdf' },
  { title: 'SDS for TLP-9XXXX series batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/TLP-100_-3_6V_PP-based_rev-W.pdf' },
  { title: 'SDS for SL series batteries', href: 'https://tadiranbat.com/wp-content/uploads/2025/12/T-36-06-SOCl2_SL_general-Rev-Q.pdf' },
]

export const policyDocs: DocLink[] = [
  { title: 'Fundamental Principles of Purchasing', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/FUNDAMENTAL-PRINCIPLES-OF-PURCHASING-FPP-2021.pdf' },
  { title: 'General Terms and Conditions of Purchase', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/tadiran-purchasing-tc-including-fundamental-principles-of-purchasing-25.12.19-2.pdf' },
  { title: 'Disposal Guidelines for Lithium Batteries', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/0111_-_guidelines_for_disposal_of_lithium_cells_and_batteries.pdf' },
  { title: 'Ethics Policy (English)', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/2021-_-ETHICS-LETTER-_-ENGLISH-VERSION.pdf' },
  { title: 'Ethics Policy (Hebrew)', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/tadiran-batteries-code-of-ethics-hebrew.pdf' },
  { title: 'Ethics Policy (French)', href: 'https://tadiranbat.com/wp-content/uploads/2022/03/2021-_-ETHICS-LETTER-_-FRENCH-VERSION-1a.pdf' },
  { title: 'Quality Policy', href: 'https://tadiranbat.com/wp-content/uploads/2022/12/09-400-7-D-Quality-policy.pdf' },
]

export const articles: { title: string; source: string }[] = [
  { title: 'Introducing Tadiran’s Battery Calculator', source: 'Tadiran Batteries' },
  { title: 'When Battery Failure is NOT an Option', source: 'Automation World' },
  { title: 'A Deep Dive for the Right Power Supply', source: 'ECO Magazine' },
  { title: 'The Need For Ultra-Long-Life Batteries', source: 'Designing Electronics North America' },
  { title: 'Powering remote wireless devices to run a 40 year marathon', source: 'Automation.com' },
  { title: 'IIoT devices can perform for decades with powerful lithium batteries', source: 'Electronics360' },
  { title: 'Shrink Your Batteries and Your Budget', source: 'Automation.com' },
  { title: 'Revolutionizing Monitoring with AI and High End Lithium Batteries', source: 'Electronic Design' },
  { title: 'Ultra Long Life Batteries Lower the Cost of Ownership', source: 'Automation.com' },
  { title: 'Reducing Battery Size and Cost', source: 'Applied Automation' },
  { title: 'Lithium Batteries Power Wireless Devices in Oceanographics', source: 'ONT Magazine' },
  { title: '5 Keys to Powering Remote Wireless Devices', source: 'Automation.com' },
  { title: 'Ultra Long Life Batteries Bring Data Intelligence', source: 'Waterworld' },
  { title: 'The Forecast for Battery Powered Energy-Harvesting is Sunny', source: 'Automation World' },
  { title: 'Ultra-Long-Life Lithium Batteries Harness the Passivation Effect', source: 'EE World' },
  { title: 'Ultra-Long-Life Lithium Batteries Power IIoT to the Edge', source: 'Smart Industry' },
  { title: 'Batteries Designed to Run an IIoT Marathon', source: 'Automation.com' },
  { title: 'Lithium Batteries Take the IIoT Everywhere', source: 'Design and Development Today' },
  { title: 'Modernizing Remote Water Infrastructure with Edge AI and Ultra-Long-Life Lithium Batteries', source: 'Water Finance & Management' },
  { title: 'How Ultra Long-Life Lithium Batteries Expand the Use of WirelessHART', source: 'Automation World' },
  { title: 'Harsh Realities Challenge Batteries', source: 'Machine Design' },
  { title: 'The Power of Metering: How Long-life Batteries Affect AMI Profitability', source: 'Water Finance & Management' },
  { title: 'The 40-year battery pack', source: 'Design World' },
  { title: 'Powering the IIoT: batteries need not be large and expensive', source: 'Automation' },
  { title: 'How long do your batteries need to run?', source: 'electronicdesign.com' },
  { title: 'Low battery self-discharge: the key to long-life remote wireless sensors', source: 'Embedded Computing Design' },
  { title: 'Powering the wirelessly connected hospital', source: 'Medical Design & Outsourcing' },
  { title: 'The industrial IoT needs industrial batteries', source: 'Sensors Online' },
  { title: 'Why the industrial IoT needs industrial lithium batteries', source: 'Design World IoT Handbook' },
  { title: 'Powering the next generation of HART-enabled devices', source: 'INTECH' },
  { title: 'Powering the IIoT with industrial grade solar/Li-ion hybrids', source: 'Sensors Online' },
  { title: 'Optimizing battery performance in extreme temperatures', source: 'Design World' },
  { title: 'Understanding the differences between consumer and industrial batteries', source: 'Electronics 360' },
  { title: 'Making WirelessHART truly wireless', source: 'Design World' },
  { title: '3 Ways the IoT revolutionizes farming', source: 'Machine Design' },
  { title: 'How to power handheld surgical devices', source: 'Medical Design & Outsourcing' },
  { title: 'Powering remote wireless applications in harsh environments', source: 'Design World' },
  { title: 'Packing more punch into pulsed applications with mini batteries', source: 'Design News' },
  { title: 'Realizing the full potential of energy harvesting and the IIoT', source: 'IoTTech' },
  { title: 'Some like it hot', source: 'Electronics 360' },
  { title: 'Reducing battery size and cost', source: 'Electronic Products' },
  { title: 'A guide to how lithium batteries can bring remote wireless power to the IIoT', source: 'IoTTech' },
  { title: 'Batteries for the Industrial Internet of Things (IIoT)', source: 'Design World' },
  { title: 'Small batteries deliver big power to UAVs', source: 'Machine Design' },
  { title: 'Tadiran industrial grade LiSOCl2 batteries: high energy cells that age gracefully', source: 'Electronics 360' },
  { title: "Powering tomorrow's medicine: critical decisions for batteries in medical applications", source: 'Medical Design Briefs' },
  { title: 'Choosing the right battery to power a remote wireless device', source: 'Machine Design' },
  { title: 'Powering miniaturized medical devices', source: 'Electronic Products' },
  { title: 'Powering remote wireless devices for 40 years', source: 'Product Design & Development' },
  { title: 'Harvesting energy in challenging environments', source: 'Design World' },
  { title: 'The differences between consumer and industrial batteries', source: 'Design World' },
  { title: 'Power your wireless sensors for 40 years', source: 'Electronic Design' },
  { title: 'Powering wirelessly via batteries, energy harvesting', source: 'Electronic Products' },
  { title: 'Power for extreme environments', source: 'NASA Tech Briefs' },
  { title: 'Lithium batteries drive oceanographic technology full speed ahead', source: 'Ocean News' },
  { title: 'Lithium-powered orthopaedic bone drill features higher performance with 36% less weight', source: 'Tadiran Batteries' },
  { title: 'Cutting the size and weight of surgical devices', source: 'Tadiran Batteries' },
  { title: 'Utility meter operating 20 years on original lithium battery', source: 'Tadiran Batteries' },
  { title: 'Batteries in medical RFID: withstanding the heat of autoclaves is a must', source: 'Tadiran Batteries' },
  { title: 'Battery power for remote wireless sensors', source: 'Sensors' },
  { title: 'Batteries for life: lithium power sources can last 20 years', source: 'Tadiran Batteries' },
  { title: 'Designing a 20-year AMR device', source: 'Metering International' },
  { title: 'Considerations for primary cell selection', source: 'Battery Digest' },
  { title: 'Going the distance: power supply management in an asset tracking device', source: 'GPS World' },
  { title: 'Battery technology for remote oceanographic applications', source: 'Sea Technology' },
  { title: 'Making wireless sensors truly wireless', source: 'ECN' },
  { title: 'Adapting lithium battery technology to high performance AMR devices', source: 'Metering International' },
  { title: 'Long-lasting lithiums', source: 'Machine Design' },
  { title: 'Adapting battery technology for high-current pulse applications', source: 'Tadiran Batteries' },
  { title: 'Advanced lithium battery technology key to AMR market', source: 'Remote Site & Equipment Management' },
  { title: 'Lithium battery power sources for remote or portable sensor applications', source: 'Sensors Magazine' },
  { title: 'Battery reduces the size and weight of the remote measuring device by more than 90 percent in marine applications', source: 'Remote Site and Equipment' },
]

export const pressReleases: { title: string; detail: string; series?: string }[] = [
  {
    title: 'Tadiran introduces TLM-1550SPM high-power lithium cells for critical applications',
    detail: 'The TLM ultra-high-power family lists TLM-1550SPM at 4 V, 950 mAh, and a 20 A maximum pulse, in a 15 × 51 mm cell, for −40°C to +85°C.',
    series: 'tlm',
  },
  {
    title: 'Tadiran introduces high temperature TLI-1550HT rechargeable Li-ion cells, specially modified for medical applications requiring autoclave sterilization',
    detail: 'TLI-1550HT is published as a 4 V, 500 mAh rechargeable cell with a 15 A maximum pulse, for high-temperature service including autoclave sterilization.',
    series: 'tli',
  },
  {
    title: 'Tadiran Rapid Response (TRR) Series batteries activate instantly, delivering improved performance and extending operating life up to 15%',
    detail: 'The announcement describes TRR cells as activating instantly, with improved performance and operating life extended by up to 15%. The product overview lists TRR for up to 20-year life with moderate to high pulses.',
    series: 'trr',
  },
  {
    title: 'Tadiran develops rechargeable lithium-ion cells for remote wireless applications',
    detail: 'TLI Series industrial rechargeable cells are specified for remote wireless and energy-harvesting devices, with self-discharge under 5% per year and charging from −40°C to +85°C.',
    series: 'tli',
  },
  {
    title: "KOHLER's first 30-year touchless commercial faucet powered by Tadiran",
    detail: 'Tadiran announced that Kohler’s first 30-year touchless commercial faucet is powered by a Tadiran battery. The full release text was not republished here.',
  },
  {
    title: 'Tadiran introduces cost-effective, high energy TLM Military Grade lithium batteries',
    detail: 'TLM Military Grade cells are 4 V lithium metal oxide batteries ruggedized for mil/aero shock, vibration, acceleration, and long storage.',
    series: 'tlm-military',
  },
  {
    title: "Tadiran introduces the TLM 1550, the world's first high rate AA-size lithium battery that delivers 15A pulse / 5A continuous discharge",
    detail: 'The high-power TLM-1550HPM data sheet lists 4 V, 500 mAh, and a 15 A maximum pulse in a 15.1 × 51 mm cell.',
    series: 'tlm',
  },
  {
    title: 'Tadiran awarded exclusive multi-year contract for lithium batteries to power advanced water meters',
    detail: 'Utility metering is Tadiran’s longest-running published application for bobbin-type LiSOCl2 cells. This announcement records a multi-year water-meter contract. Contract terms were not republished.',
    series: 'xol',
  },
  {
    title: 'Tadiran comes to the rescue with PulsesPlus lithium batteries for emergency roadside assistance systems',
    detail: 'eCall and emergency roadside assistance are listed PulsesPlus applications: long standby plus a high pulse when the call is placed.',
    series: 'pulsesplus',
  },
  {
    title: 'Tadiran PulsesPlus batteries ideal for long-term, maintenance-free GPS tracking',
    detail: 'Asset and GPS tracking is a published PulsesPlus use case, combining microamp standby with periodic transmit pulses.',
    series: 'pulsesplus',
  },
  {
    title: 'Tadiran powers ahead with high current rate PulsesPlus cylindrical cells',
    detail: 'PulsesPlus packs are published from 1/2 AA-class cells through large multi-cell assemblies, pairing a LiSOCl2 cell with a hybrid layer capacitor.',
    series: 'pulsesplus',
  },
  {
    title: 'Tadiran coin-size cells are easily board mountable with Andon sockets',
    detail: 'XOL and iXtra wafer cells are offered with pin terminations. Tadiran points to Andon Electronics sockets for board mounting.',
  },
  {
    title: 'Tadiran introduces PulsesPlus series: 3.6V battery packs for high current pulse applications',
    detail: 'PulsesPlus packs are specified at 3.6 V or 3.9 V, with annual self-discharge under 1% and an operating window down to −40°C.',
    series: 'pulsesplus',
  },
]

export type Distributor = {
  name: string
  phone?: string
  web?: string
  email?: string
  type?: string
  address?: string
}

export const northAmerica: Distributor[] = [
  { name: 'Allied Electronics', phone: '800-433-5700', web: 'http://www.alliedelec.com', type: 'OEM & Replacement' },
  { name: 'Dantona', phone: '800-326-8662', web: 'http://www.dantona.com', type: 'OEM & Replacement' },
  { name: 'DigiKey', phone: '800-344-4539', web: 'https://www.digikey.com/en/supplier-centers/t/tadiran-batteries', email: 'sales@digikey.com', type: 'OEM & Replacement' },
  { name: 'EVS Supply', phone: '800-776-5267', web: 'http://www.evssupply.com', type: 'OEM, Replacement and VAD' },
  { name: 'ElectroSonic', phone: '416-494-1666', web: 'http://www.e-sonic.com', type: 'OEM & Replacement' },
  { name: 'Excell', phone: '800-667-8448', web: 'http://www.excellbattery.com', type: 'OEM/VAD' },
  { name: 'Future Electronics Inc.', phone: '800-655-0006', web: 'http://www.futureelectronics.com', type: 'OEM & Replacement' },
  { name: 'Mouser Electronics', phone: '800-346-6873', web: 'http://www.mouser.com/tadiran', type: 'OEM & Replacement' },
  { name: 'Newark', phone: '800-463-9275', web: 'http://www.newark.com', type: 'OEM & Replacement' },
  { name: 'Ttek Assemblies Inc.', phone: '218-389-6187', web: 'http://www.ttekai.com', email: 'sales@ttekai.com', type: 'OEM & VAD' },
  { name: 'Pulsepacks LLC', phone: '214-636-2293', web: 'https://www.pulsepacks.com', email: 'info@pulsepacks.com', type: 'OEM, Replacement and VAD' },
]

export const international: { country: string; entries: Distributor[] }[] = [
  { country: 'China', entries: [{ name: 'Asean Tech Ltd.', phone: '+852-2797 3077', email: 'info@aseantechnology.com', web: 'http://www.aseantechnology.com', address: 'Rm.807, 8/F., Hung Tai Industrial Bldg, 37-39 Hung To Road, Kwun Tong, Kowloon, Hong Kong' }] },
  { country: 'India', entries: [{ name: 'General Electronics Systems', phone: '+91 9326179500', email: 'sales@generalelectronics.in', address: 'Off no 14, Pooja Corner, Plot no 18, PCN TDA, Chinchwad, Pune, India' }] },
  { country: 'Japan', entries: [{ name: 'JEPICO Corporation', phone: '+81 (3) 3348-0611', email: 'mishida@jepico.jp', web: 'http://www.jepico.co.jp', address: 'Shinjuku Dai-Ichi Seimei Bldg, Nishi-Shinjuku 2-7-1, Shinjuku-Ku, Tokyo 163-0729, Japan' }] },
  { country: 'Singapore', entries: [{ name: 'TRENDTRONICS', phone: '+65 6276 2600', email: 'sales@trendtronics.com.sg', address: 'Blk 1003, Bukit Merah Central #04-29, Singapore 159836' }] },
  { country: 'South Korea', entries: [{ name: 'Avnet Korea, Inc.', phone: '+82 (2) 6277-6354', email: 'Terry.kim@avnet.com', web: 'http://www.avnet.com', address: '6th Floor, KT&G Bundang Tower, Seongnam-si, Gyeonggi-do, 13591, Korea' }] },
  { country: 'Taiwan', entries: [{ name: 'Avnet Asia Pte Ltd, Taiwan Branch', phone: '+886 (2) 2655-8688 ext. 8296', email: 'Elvis.Chen@Avnet.com', web: 'http://www.avnet.com.tw/em', address: '5/F, No. 3, YuanCyu St., NanKang Software Park' }] },
  { country: 'Thailand', entries: [{ name: 'Microtron International Business Co. Ltd', phone: '+66 (2) 223-9524', email: 'info@microtron.co.th', web: 'https://www.microtron.co.th', address: '6/19 The Old Siam Plaza C-302, 3rd Fl, Tripet Road, Bangkok 10200, Thailand' }] },
  { country: 'Turkey', entries: [{ name: 'INTERPOS', phone: '+90 (216) 469 64 00', email: 'info@inter-pos.com', web: 'https://www.inter-pos.com', address: 'İçerenköy Mah., Ataşehir / Istanbul, 34752. Contact: Hulusi Kültür' }] },
  { country: 'Germany', entries: [{ name: 'Tadiran Batteries GmbH', phone: '+49 (0) 6042/954-0', email: 'info@tadiranbatteries.de', web: 'http://www.tadiranbatteries.de', address: 'Industriestr. 22, D-63654 Büdingen, Germany' }] },
  { country: 'Argentina', entries: [{ name: 'DISTRIBUIDORA XELLEX', phone: '+54 (11) 4759-7296', email: 'fernandofemenia@pilasxellex.com.ar' }] },
  { country: 'Brazil', entries: [{ name: 'AlCircuits', phone: '+55 (11) 98200-1007', email: 'marcos@alcircuits.com.br', web: 'http://www.alcircuits.com.br', address: 'Rua Sud Menucci 98, Vila Mariana, Sao Paulo 04017-080, Brazil' }] },
  { country: 'Israel', entries: [
    { name: 'Tadiran Batteries Ltd', phone: '+972 (8) 9444555', email: 'sales@tadiran-batt.com', web: 'https://tadiranbat.com', address: 'P.O. Box 1, Kiryat Ekron, Israel' },
    { name: 'Semicom Lexis Ltd', phone: '+972 (9) 7611215', email: 'yosin@semicom.co.il', web: 'http://www.semicomlexis.com/', address: 'P.O. Box 9090, Even Yehuda, 40500, Israel' },
  ] },
  { country: 'Australia', entries: [{ name: 'Arrow Electronics Pty Ltd', phone: '+61 (3) 9737-4900', email: 'sales.australia@arrowasia.com', web: 'http://www.arrowasia.com', address: '14 Nicole Close, North Bayswater, Victoria 3153, Australia' }] },
  { country: 'New Zealand', entries: [{ name: 'Power Technology Components Ltd', phone: '+64 (9) 836-6744', email: 'sales@powertech.co.nz', web: 'http://www.powertech.co.nz', address: '8/18 Moselle Ave, Henderson, Auckland 0610, New Zealand' }] },
  { country: 'Republic of South Africa', entries: [
    { name: 'Arrow Altech Distribution Pty Ltd', phone: '+27 (11) 923-9600', email: 'info@arrow.altech.co.za', web: 'http://www.arrow.altech.co.za', address: '53-57 Yaldwyn Road, Hughes Extension, Jet Park, Gauteng' },
    { name: 'Coolheat (S.A.) Pty Ltd', phone: '+27 (11) 608-2003', email: 'cartronic@icon.co.za', address: '63 Lake Road, Longmeadow Business Estate, Modderfontein, 1610 Edenvale' },
  ] },
]

export const whitepapers = [
  { slug: 'wireless-sensor-networks', title: 'Lithium Batteries for Wireless Sensor Networks', summary: 'Bobbin-type LiSOCl2 cells are positioned for sensors that sleep at microamps and must stay deployed for decades. PulsesPlus adds an HLC when the radio needs a short high pulse.' },
  { slug: 'forty-year-battery', title: 'Is a 40-Year Battery Life a Reality', summary: 'Tadiran publishes a 0.7% annual self-discharge rate for XOL LiSOCl2 cells and cites field returns, including Aclara meters still holding unused capacity after more than 28 years.' },
  { slug: 'dont-overdesign', title: 'Don’t Overdesign Your Battery', summary: 'The published argument is to size the cell to background current, pulse energy, and temperature instead of adding parallel capacity that will be lost to self-discharge.' },
  { slug: 'self-discharge', title: 'Understanding battery self-discharge', summary: 'XOL cells are published at 0.7% self-discharge per year. Tadiran contrasts that with competing LiSOCl2 cells it describes at up to 3% per year, which can exhaust most of the capacity over 30 years.' },
  { slug: 'consumer-vs-industrial', title: 'Consumer versus Industrial Batteries for Wireless Applications', summary: 'Consumer Li-ion is described with short life, self-discharge up to 60% per year, and a narrow temperature window. TLI industrial cells are specified under 5% self-discharge and −40°C to +85°C, with HT versions higher.' },
  { slug: 'reducing-size-cost', title: 'Reducing battery size and cost', summary: 'Higher energy density (730 Wh/kg and 3.6 V for LiSOCl2, 4 V for TLM and TLI) is the published route to a smaller pack. A September 26, 2019 webinar under this title featured Sol Jacobs.' },
  { slug: 'passivation', title: 'Understanding the Passivation Effect', summary: 'Passivation protects a LiSOCl2 cell in storage and is also the source of voltage delay under load. PulsesPlus uses a hybrid layer capacitor so the voltage drop does not reach the device.' },
  { slug: 'understanding-self-discharge', title: 'Understanding Self-discharge', summary: 'Self-discharge, not the nameplate capacity, dominates lifetime on a low-current wireless device. Tadiran’s comparison is 0.7% per year versus up to 3% per year.' },
  { slug: 'trailer-tracking', title: 'Trailer tracking with energy harvesting and TLI-1520A', summary: 'Tadiran cites trailer tracking that pairs energy harvesting with the TLI-1520A rechargeable cell: 4 V, 90 mAh, 1.25 A pulse, 15.1 × 20 mm.' },
]

export const webinars = [
  { title: 'Reducing Battery Size and Cost', date: 'Aired Sept 26, 2019', speaker: 'Sol Jacobs, VP and GM, Tadiran Batteries' },
  { title: 'Understanding How Battery Design Affects Operating Life for Powering Remote Wireless Devices', date: 'Aired July 31, 2019', speaker: 'Sol Jacobs, VP and GM, Tadiran Batteries' },
]
