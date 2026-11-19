export type Cell = {
  model: string
  size?: string
  catalog?: string
  capacity?: string
  current?: string
  voltage?: string
  pulse?: string
  metric?: string
  standard?: string
  terminations?: string
  pdf?: string
}

export type ColumnKey = keyof Omit<Cell, 'pdf'>

export type TableGroup = {
  title: string
  intro?: string
  notes?: string[]
  columns: { key: ColumnKey; label: string }[]
  rows: Cell[]
}

export type Series = {
  slug: string
  name: string
  menu: string
  card: string
  tagline: string
  image: string
  paragraphs: string[]
  applications?: string[]
  benefits?: string[]
  groups: TableGroup[]
}

const cyl: { key: ColumnKey; label: string }[] = [
  { key: 'model', label: 'Model' },
  { key: 'size', label: 'Cell Size' },
  { key: 'catalog', label: 'Catalog Number' },
  { key: 'capacity', label: 'Nominal Capacity (Ah)' },
  { key: 'current', label: 'Nominal Discharge (mA)' },
  { key: 'metric', label: 'Dimensions mm D/H' },
  { key: 'standard', label: 'Dimensions in D/H' },
  { key: 'terminations', label: 'Terminations' },
]

const powerCols: { key: ColumnKey; label: string }[] = [
  { key: 'model', label: 'Model' },
  { key: 'voltage', label: 'Nominal Voltage (V)' },
  { key: 'capacity', label: 'Discharge Capacity (mAh)' },
  { key: 'pulse', label: 'Max Pulse (A)' },
  { key: 'metric', label: 'Dimensions mm D/H' },
  { key: 'standard', label: 'Dimensions in D/H' },
  { key: 'terminations', label: 'Terminations' },
]

const packCols: { key: ColumnKey; label: string }[] = [
  { key: 'model', label: 'Model' },
  { key: 'size', label: 'Cell Size Ref' },
  { key: 'catalog', label: 'Catalog Number' },
  { key: 'capacity', label: 'Nominal Capacity (Ah)' },
  { key: 'current', label: 'Nominal Discharge (mA)' },
  { key: 'metric', label: 'Dimensions (metric)' },
  { key: 'standard', label: 'Dimensions (standard)' },
]

const hlcCols: { key: ColumnKey; label: string }[] = [
  { key: 'model', label: 'Model' },
  { key: 'standard', label: 'Dimensions in Dia/Ht' },
  { key: 'metric', label: 'Dimensions mm Dia/Ht' },
  { key: 'catalog', label: 'Catalog Number' },
  { key: 'capacity', label: 'Nominal Capacity (A-sec)' },
  { key: 'current', label: 'Nominal Discharge (mA)' },
  { key: 'terminations', label: 'Terminations' },
]

const pdf = (file: string) => `https://tadiranbat.com/wp-content/uploads/${file}`

export const series: Series[] = [
  {
    slug: 'xol',
    name: 'Long Life XOL Series Batteries',
    menu: 'Ultra-Long-life XOL Series',
    card: 'Up to 40-year operating life with low pulses',
    tagline: 'Ultra-long-life with low pulses',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/IMG_7264-1536x1257-1.jpg',
    paragraphs: [
      'Tadiran XOL Series lithium thionyl chloride (LiSOCl2) batteries are ideal for low-power applications that must operate for extended periods ranging from several years to as long as 40 years with low current pulses ranging from several mA to several tens of mA depending on cell size and environmental conditions.',
      'XOL Series batteries deliver a stable voltage of 3.6 V and a high energy density of 730 Wh/kg, enabling product miniaturization and extended operational life. These long-life cells feature a very low annual self-discharge rate of just 0.7% per year, the result of superior raw materials and proprietary construction to harness the passivation effect.',
      'Designed to withstand extreme environmental conditions, XOL Series batteries operate reliably across a very wide temperature range (−80°C to +125°C). Their hermetically sealed construction ensures superior leak prevention compared with crimped seals, making them a fit for utility metering, environmental monitoring, and other industrial IoT devices. For applications requiring high pulses, PulsesPlus battery solutions are the alternative.',
    ],
    groups: [
      {
        title: 'Cylindrical Cells',
        notes: [
          'Nominal voltage for all batteries is 3.6 V.',
          'Temperature range for all batteries is from −55°C to +85°C.',
          'Custom terminations available upon request.',
          'Termination suffix: /S 21, /T 31, /P 41, /TP 52, /PT 53, /PT2 36.',
        ],
        columns: cyl,
        rows: [
          { model: 'TL-4902', size: '1/2 AA', catalog: '15-4902-yy000', capacity: '1.20', current: '1.00', metric: '14.5/25.2', standard: '0.571/0.992', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tl-4902.pdf') },
          { model: 'TL-4955', size: '2/3 AA', catalog: '15-4955-yy000', capacity: '1.65', current: '1.30', metric: '14.5/33.5', standard: '0.571/1.139', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tl-4955.pdf') },
          { model: 'TL-4903', size: 'AA', catalog: '15-4903-yy000', capacity: '2.40', current: '2.00', metric: '14.5/50.5', standard: '0.571/1.998', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tl-4903.pdf') },
          { model: 'TL-4920', size: 'C', catalog: '15-4920-yy000', capacity: '8.50', current: '3.00', metric: '26.2/50.0', standard: '1.031/1.970', terminations: 'S T', pdf: pdf('2022/03/tl-4920-rev-d-0420.pdf') },
          { model: 'TL-4930', size: 'D', catalog: '15-4930-yy000', capacity: '19.00', current: '4.00', metric: '32.9/61.5', standard: '1.295/2.421', terminations: 'S T', pdf: pdf('2022/03/tl-4930-revf-0420.pdf') },
        ],
      },
      {
        title: 'Wafer Cells',
        notes: ['Nominal voltage is 3.6 V.', 'Temperature range is −55°C to +85°C.', 'Custom terminations available upon request.'],
        columns: cyl,
        rows: [
          { model: 'TL-4934', size: '1/10 D', catalog: '15-4934-41000', capacity: '1.00', current: '0.50', metric: '32.9/6.5', standard: '1.295/0.256', terminations: '3-pin', pdf: pdf('2022/03/tl-4934.pdf') },
          { model: 'TL-4935', size: '1/6 D', catalog: '15-4935-41000', capacity: '1.70', current: '0.50', metric: '32.9/10.2', standard: '1.295/0.401', terminations: '3-pin', pdf: pdf('2022/03/tl-4935.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'ixtra',
    name: 'iXtra Series Batteries',
    menu: 'iXtra Series',
    card: 'Reliable performance for moderate continuous current',
    tagline: 'Moderate continuous current, broad temperature range',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/IMG_7264-1536x1257-1.jpg',
    paragraphs: [
      'Tadiran iXtra Series lithium thionyl chloride (LiSOCl2) batteries are engineered for applications requiring continuous current demand ranging from tenths of a milliampere to several milliamperes.',
      'iXtra Series batteries provide a stable voltage of 3.6 V and a high energy density of 730 Wh/kg. They are designed for extreme environmental conditions across a very wide temperature range (−80°C to +125°C), with hermetically sealed construction for leak prevention versus crimped seals.',
    ],
    groups: [
      {
        title: 'Cylindrical Cells',
        notes: ['Nominal voltage is 3.6 V.', 'Temperature range is −55°C to +85°C.', 'Termination suffix: /S 21, /T 31, /P 41, /TP 52, /PT 53, /PT2 36.'],
        columns: cyl,
        rows: [
          { model: 'TLL-5902', size: '1/2 AA', catalog: '15-5902-yy530', capacity: '1.10', current: '1.00', metric: '14.5/25.2', standard: '0.571/0.992', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tll-5902.pdf') },
          { model: 'TL-5955', size: '2/3 AA', catalog: '15-5955-yy500', capacity: '1.50', current: '1.30', metric: '14.5/33.5', standard: '0.571/1.139', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tl-5955.pdf') },
          { model: 'TL-5903', size: 'AA', catalog: '15-5903-yy500', capacity: '2.40', current: '2.00', metric: '14.5/50.5', standard: '0.571/1.998', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tl-5903-fev-f-0420.pdf') },
          { model: 'TL-5920', size: 'C', catalog: '15-5920-yy500', capacity: '8.50', current: '3.00', metric: '26.2/50.0', standard: '1.031/1.970', terminations: 'S T', pdf: pdf('2022/03/tl-5920.pdf') },
          { model: 'TL-5930', size: 'D', catalog: '15-5930-yy500', capacity: '19.00', current: '4.00', metric: '32.9/61.5', standard: '1.295/2.421', terminations: 'S T', pdf: pdf('2022/03/tl-5930-c-11-08-ecn-1501879.pdf') },
          { model: 'TL-5937', size: 'DD', catalog: '15-5937-yy50', capacity: '35.00', current: '10.00', metric: '32.9/124.5', standard: '1.295/4.902', terminations: 'S T', pdf: pdf('2022/03/tl-5937.pdf') },
        ],
      },
      {
        title: 'Wafer Cells',
        notes: ['Nominal voltage is 3.6 V.', 'Temperature range is −55°C to +85°C.'],
        columns: cyl,
        rows: [
          { model: 'TL-2450', size: '2450', catalog: '15-2450-41020', capacity: '0.55', current: '0.50', metric: '24.5/6.5', standard: '0.965/0.256', terminations: '2-pin', pdf: pdf('2022/03/tl-2450-h.pdf') },
          { model: 'TL-5934', size: '1/10 D', catalog: '15-5934-41500', capacity: '1.00', current: '1.00', metric: '32.9/6.5', standard: '1.295/0.256', terminations: '3-pin', pdf: pdf('2022/03/tl-5934.pdf') },
          { model: 'TL-5935', size: '1/6 D', catalog: '15-5935-41500', capacity: '1.70', current: '1.00', metric: '32.9/10.2', standard: '1.295/0.401', terminations: '3-pin', pdf: pdf('2022/03/tl-5935.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'pulsesplus',
    name: 'PulsesPlus™ Series',
    menu: 'PulsesPlus™ Series',
    card: 'Up to 40-year operating life with very high pulses',
    tagline: 'Bobbin-type LiSOCl2 batteries with hybrid layer capacitors',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/pulseplus-copy-crop-u69852.jpg',
    paragraphs: [
      'PulsesPlus batteries combine a standard bobbin-type lithium thionyl chloride (LiSOCl2) cell with a patented hybrid layer capacitor (HLC). They are designed for wireless devices that normally require low background current to enable up to 40-year operating life, while also delivering periodic high pulses for two-way communications and remote shut-off.',
      'When a standard bobbin-type LiSOCl2 battery is first subjected to load it can experience an initial voltage drop. The HLC eliminates this temporary voltage drop as well as voltage drop under pulse. The HLC stores energy for data interrogation and transmission cycles of short duration.',
      'With an annual self-discharge rate of less than 1% per year, certain devices can operate for up to 40 years on a single battery. PulsesPlus batteries are available in 1/2 AA to DD cylindrical cells, along with multi-cell battery packs.',
    ],
    applications: [
      'Industrial Internet of Things (IIoT)',
      'Emergency roadside assistance systems (eCall)',
      'Asset, container, and cargo tracking',
      'AMR/AMI utility meters',
      'Sonar buoys',
      'RFID devices',
      'Communications equipment',
      'Emergency and medical devices',
    ],
    benefits: [
      'Higher voltage (3.6 V and 3.9 V versus 3.0 V)',
      'Higher capacity (19 Ah for a D-size cell versus 7 Ah)',
      'Very low annual self-discharge (less than 1% per year)',
      'Lower ESR',
      'Wide operating temperature (−40°C to 85°C)',
      'Glass-to-metal hermetic seal',
      'Non-flammable electrolyte',
    ],
    groups: [
      {
        title: 'PulsesPlus Battery Packs',
        notes: ['Nominal voltage is 3.6 V or 3.9 V.', 'Temperature range is −55°C to +85°C.', 'Custom terminations available upon request.'],
        columns: packCols,
        rows: [
          { model: 'TLP-96311/A/SM', size: 'Main Power', catalog: '61-96311-1600', capacity: '1.20', current: '1.00', metric: 'Ø16.5 x 50', standard: 'Ø0.65 x 1.97', pdf: pdf('2022/03/tlp-96311-a-st.pdf') },
          { model: 'TLP-97311/A/SM', size: 'Main Power', catalog: '61-97311-1600', capacity: '1.65', current: '1.00', metric: 'Ø16.5 x 58', standard: 'Ø0.65 x 2.28', pdf: pdf('2022/03/tlp-97311-a-sm.pdf') },
          { model: 'TLP-91311/A/SM', size: 'Main Power', catalog: '61-91311-1600', capacity: '2.40', current: '2.00', metric: 'Ø16.5 x 75', standard: 'Ø0.65 x 2.95', pdf: pdf('2022/03/tlp-91311-a-sm.pdf') },
          { model: 'TLP-92311/A/SM', size: 'Main Power', catalog: '61-92311-1600', capacity: '8.50', current: '4.00', metric: 'Ø29 x 67', standard: 'Ø1.14 x 2.64', pdf: pdf('2022/03/tlp-92311-a-sm.pdf') },
          { model: 'TLP-93311/A/SM', size: 'Main Power', catalog: '61-93311-1600', capacity: '19.00', current: '5.00', metric: 'Ø34 x 78', standard: 'Ø1.34 x 3.07', pdf: pdf('2022/03/tlp-93311-a-sm.pdf') },
          { model: 'TLP-96311/A/ST', size: 'Main Power', catalog: '61-96311-1650', capacity: '1.20', current: '1.00', metric: 'Ø16.5 x 50', standard: 'Ø0.65 x 1.97', pdf: pdf('2022/03/tlp-96311-a-st-1.pdf') },
          { model: 'TLP-97311/A/ST', size: 'Main Power', catalog: '61-97311-1650', capacity: '1.65', current: '1.00', metric: 'Ø16.5 x 58', standard: 'Ø0.65 x 2.28', pdf: pdf('2022/03/tlp-97311-a-st.pdf') },
          { model: 'TLP-91311/A/ST', size: 'Main Power', catalog: '61-91311-1650', capacity: '2.40', current: '2.00', metric: 'Ø16.5 x 75', standard: 'Ø0.65 x 2.95', pdf: pdf('2022/03/tlp-91311-a-st.pdf') },
          { model: 'TLP-93121/B/AL1', size: 'Main Power', catalog: '61-93121-2500', capacity: '38.00', current: '10.00', metric: '148 x 34.5 x 64', standard: '5.82 x 1.36 x 2.52', pdf: pdf('2022/03/tlp-93121-b-al1.pdf') },
          { model: 'TLP-93131/C/KA5', size: 'Main Power', catalog: '61-93131-3500', capacity: '57.00', current: '15.00', metric: '117 x 103 x 67', standard: '4.6 x 4.05 x 2.64', pdf: pdf('2022/03/tlp-93131-c-ka5.pdf') },
          { model: 'TLP-93211/HT', capacity: '16.00', current: '200.00', metric: 'Ø34 x 78', standard: 'Ø1.34 x 3.07' },
          { model: 'TLP-94181/D/MO1', size: 'Main Power', catalog: '61-94181-4500', capacity: '800.00', current: '240.00', metric: 'Ø284 x 260', standard: 'Ø11.18 x 10.24', pdf: pdf('2022/03/tlp-94181-d-mo1.pdf') },
          { model: 'TLP-91111/A/SM', size: 'Main Power', catalog: '61-91111-1400', capacity: '2.40', current: '2.00', metric: '55 x 32 x 16', standard: '2.17 x 1.26 x 0.67', pdf: pdf('2022/03/tlp-91111-a-sm.pdf') },
          { model: 'TLP-92111/A/SM', size: 'Main Power', catalog: '61-92111-1400', capacity: '8.50', current: '5.00', metric: '55 x 44 x 28', standard: '2.17 x 1.73 x 1.1', pdf: pdf('2022/03/tlp-92111-a-sm.pdf') },
          { model: 'TLP-93111/A/SM', size: 'Main Power', catalog: '61-93111-1400', capacity: '19.00', current: '2.00', metric: '64 x 50 x 35', standard: '2.52 x 1.97 x 1.38', pdf: pdf('2022/03/tlp-93111-a-sm.pdf') },
          { model: 'TLP-96111/A/SM', size: 'Main Power', catalog: '61-96111-1400', capacity: '1.20', current: '0.50', metric: '55 x 32 x 16', standard: '2.17 x 1.26 x 0.67', pdf: pdf('2022/03/tlp-96111-a-sm.pdf') },
          { model: 'TLP-97111/A/SM', size: 'Main Power', catalog: '61-97111-1400', capacity: '1.65', current: '0.50', metric: '55 x 32 x 16', standard: '2.17 x 1.26 x 0.67', pdf: pdf('2022/03/tlp-97111-a-sm.pdf') },
        ],
      },
      {
        title: 'HLC Cells',
        notes: ['Nominal voltage is 3.6 V or 3.9 V.', 'Temperature range is −55°C to +85°C.', 'Termination suffix: /S 22000, /T 22150, /TP 32000, /PT2 35000.'],
        columns: hlcCols,
        rows: [
          { model: 'HLC-1020', standard: '0.394/0.827', metric: '10.0/21.1', catalog: '61-1020-yyyy', capacity: '70', current: '750', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1020-Rev-E.pdf') },
          { model: 'HLC-1020P6', standard: '0.394/0.827', metric: '10.0/21.1', catalog: '61-1026-yyyy', capacity: '75', current: '2,500', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1020P6-Rev-B.pdf') },
          { model: 'HLC-1020P7', standard: '0.394/0.827', metric: '10.0/21.1', catalog: '61-1027-yyyy', capacity: '105', current: '2,000', terminations: 'S T TP', pdf: pdf('2026/02/HLC-1020P7-Rev-A.pdf') },
          { model: 'HLC-1520A', standard: '0.594/0.787', metric: '15.1/20.0', catalog: '61-1521-yyyyy', capacity: '210', current: '2,000', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1520A-Rev-G.pdf') },
          { model: 'HLC-1530A', standard: '0.594/1.063', metric: '15.1/27.0', catalog: '61-1531-yyyyy', capacity: '380', current: '3,000', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1530A-Rev-H.pdf') },
          { model: 'HLC-1530B', standard: '0.594/1.063', metric: '15.1/27.0', catalog: '61-1532-yyyyy', capacity: '380', current: '3,000', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1530B-Rev-B.pdf') },
          { model: 'HLC-1550A', standard: '0.594/1.992', metric: '15.1/50.6', catalog: '61-1551-yyyyy', capacity: '850', current: '5,000', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1550A-Rev-H.pdf') },
          { model: 'HLC-1550B', standard: '0.594/1.992', metric: '15.1/50.6', catalog: '61-1552-yyyyy', capacity: '850', current: '15,000', terminations: 'S T TP', pdf: pdf('2024/12/HLC-1550B-Rev-D.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'tlh',
    name: 'Extended Temperature TLH Series Batteries',
    menu: 'High Temp. TLH Series (+125°C)',
    card: 'For temperatures up to +125°C and as low as −100°C',
    tagline: 'Designed to operate from −55°C to +125°C',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/02/awarepoint-rfid.jpg',
    paragraphs: [
      'Tadiran TLH Series lithium thionyl chloride (LiSOCl2) batteries are ideal for low-power applications involving extreme temperatures. They deliver 3.6 V and high energy density (730 Wh/kg) to support product miniaturization.',
      'These specially modified cells provide a wide temperature range (−55°C to +125°C). Tadiran also offers specially modified batteries for cold-chain use that operate reliably at temperatures as low as −85°C. TLH cells use a hermetically sealed can for leak prevention versus crimped seals.',
      'Awarepoint’s real-time locating system delivers rapid location and condition updates inside hospitals. Tadiran high-temperature batteries enable the device to stay on even during autoclave sterilization.',
    ],
    groups: [
      {
        title: 'Cylindrical Cells',
        notes: ['Nominal voltage is 3.6 V.', 'Temperature range is −55°C to +125°C.', 'Termination suffix: /S 21, /T 31, /P 41, /TP 52, /PT 53, /PT2 36.'],
        columns: cyl.filter((column) => column.key !== 'current'),
        rows: [
          { model: 'TLH-5902', size: '1/2 AA', catalog: '15-5902-yy505', capacity: '0.90', metric: '14.5/25.2', standard: '0.571/0.992', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tlh-5902.pdf') },
          { model: 'TLH-5955', size: '2/3 AA', catalog: '15-5955-yy505', capacity: '1.40', metric: '14.5/33.5', standard: '0.571/1.319', terminations: 'S P T TP PT PT2', pdf: pdf('2022/03/tlh-5955.pdf') },
          { model: 'TLH-4903', size: 'AA', catalog: '15-4903-yy005', capacity: '2.30', metric: '14.5/50.5', standard: '0.571/1.998', terminations: 'S P T TP PT PT2', pdf: pdf('2026/02/TLH-4903.pdf') },
          { model: 'TLH-5903', size: 'AA', catalog: '15-5903-yy505', capacity: '2.00', metric: '14.5/50.5', standard: '0.571/1.998', terminations: 'S P T TP PT PT2', pdf: pdf('2026/02/TLH-5903.pdf') },
          { model: 'TLH-5920', size: 'C', catalog: '15-5920-yy505', capacity: '7.50', metric: '26.2/50.0', standard: '1.031/1.970', terminations: 'S T', pdf: pdf('2022/03/tlh-5920.pdf') },
          { model: 'TLH-5930', size: 'D', catalog: '15-5930-yy505', capacity: '17.00', metric: '32.9/61.5', standard: '1.295/2.421', terminations: 'S T', pdf: pdf('2022/03/tlh-5930.pdf') },
        ],
      },
      {
        title: 'Wafer Cells',
        notes: ['Nominal voltage is 3.6 V.', 'Temperature range is −55°C to +125°C.'],
        columns: cyl,
        rows: [
          { model: 'TLH-2450', size: '2450', catalog: '15-2450-41532', capacity: '0.55', current: '0.50', metric: '24.5/5.8', standard: '0.965/0.228', terminations: '2-pin', pdf: pdf('2022/03/tlh-2450-e.pdf') },
          { model: 'TLH-5934', size: '1/10 D', catalog: '15-5934-41505', capacity: '0.90', current: '1.00', metric: '32.9/6.5', standard: '1.295/0.256', terminations: '3-pin', pdf: pdf('2022/03/tlh-5934.pdf') },
          { model: 'TLH-5935', size: '1/6 D', catalog: '15-5935-41505', capacity: '1.50', current: '1.00', metric: '32.9/10.2', standard: '1.295/0.401', terminations: '3-pin', pdf: pdf('2022/03/tlh-5935.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'tlm',
    name: 'High Power TLM Series',
    menu: 'High Power TLM Series',
    card: 'Up to 20-year shelf life with high pulses of short duration',
    tagline: 'Lithium metal oxide batteries',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/tlmhe-crop-u70168.jpg',
    paragraphs: [
      'Offered in high energy, high power, ultra high power, and military-grade versions, TLM Series lithium metal oxide batteries are for applications that require high pulses and/or high-rate continuous power even after prolonged storage.',
      'TLM Series batteries deliver high voltage (4.0 V), high pulses, and continuous high-rate power without delayed response or passivation. They feature a wide temperature range (−55°C to +85°C) and an annual self-discharge rate of less than 3% per year.',
      'TLM batteries are UL-recognized. Solvents are non-toxic and non-pressurized, and anode materials are less reactive than standard lithium cells. The cells have been evaluated in nail penetration, crush, high-temperature, short-circuit, and charge tests.',
    ],
    applications: ['Military and aerospace', 'Automatic external defibrillators', 'Surgical power tools and portable medical devices', 'Communications systems', 'Telematics, including emergency roadside assistance (eCall)'],
    benefits: ['Very high energy-to-size ratio', 'High pulses and/or continuous high-rate current', 'No voltage delay or passivation', 'Up to 20-year shelf life', 'Extended temperature range'],
    groups: [
      {
        title: 'High Power Series',
        intro: 'Temperature range −40°C to +85°C.',
        columns: powerCols,
        rows: [
          { model: 'TLM-1550HPM', voltage: '4', capacity: '500', pulse: '15.00', metric: '15.1/51', standard: '0.595/2.008', terminations: 'S T TP', pdf: pdf('2022/03/tlm-1550hpm-rev-a-ecn6102018.pdf') },
          { model: 'TLM-1530HPM', voltage: '4', capacity: '240', pulse: '6.50', metric: '15.1/27.4', standard: '0.595/1.079', terminations: 'S T TP', pdf: pdf('2022/03/tlm-1530hpm-rev-a-ecn6102980-1-.pdf') },
          { model: 'TLM-1520HPM', voltage: '4', capacity: '135', pulse: '3.50', metric: '15.1/20', standard: '0.595/0.787', terminations: 'S T TP', pdf: pdf('2022/03/tlm-1520hpm-rev-a-ecn6102980.pdf') },
        ],
      },
      {
        title: 'High Capacity Series',
        intro: 'Temperature range −40°C to +85°C.',
        columns: powerCols,
        rows: [
          { model: 'TLM-1550ESM', voltage: '4', capacity: '1,200', pulse: '10.00', metric: '15.1/53', standard: '0.595/2.087', terminations: 'S T TP', pdf: pdf('2023/12/TLM-1550ESM-b-4V-cell.pdf') },
        ],
      },
      {
        title: 'High Temperature Series',
        intro: 'Temperature range −40°C to +135°C.',
        columns: powerCols,
        rows: [
          { model: 'TLM-1550HTM', voltage: '4', capacity: '500', pulse: '15.00', metric: '15.1/53', standard: '0.595/2.087', terminations: 'S T TP', pdf: pdf('2024/08/TLM-1550HTM-rev-C.pdf') },
        ],
      },
      {
        title: 'Ultra High Power Series',
        intro: 'Temperature range −40°C to +85°C.',
        columns: powerCols,
        rows: [
          { model: 'TLM-1550SPM', voltage: '4', capacity: '950', pulse: '20.00', metric: '15/51', standard: '0.595/2.008', terminations: 'S T TP', pdf: pdf('2026/08/TLM-1550SPM-rev-B-4.05V.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'tlm-military',
    name: 'TLM Series – Military Grade',
    menu: 'TLM Series – Military Grade',
    card: 'Ruggedized high-energy cells for mil/aero',
    tagline: 'High energy lithium metal oxide batteries for high-reliability mil/aero applications',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/02/tlm-military-batteries.jpg',
    paragraphs: [
      'To meet military and aerospace applications that require high-rate power, Tadiran developed TLM Military Grade high-energy lithium metal oxide cells.',
      'They are constructed with a carbon-based anode, multi-metal-oxide cathode, organic electrolyte, and shut-down separator. Published family performance includes a 4 V open-circuit voltage, 500 mAh discharge capacity (20 mA at 2.8 V, room temperature), 5 A continuous pulses, and 15 A maximum high-current pulses, with an operating range of −40°C to 85°C.',
      'The cells are described as complying with MIL-STD-810G for vibration, shock, temperature shock, salt fog, altitude, acceleration (50,000 gn) and spinning (30,000 rpm), as well as UN 1642 and IEC 60086 tests for crush, impact, nail penetration, heat, over-charge, and short circuit. Two families — high power and medium power — are available in three sizes.',
    ],
    applications: ['Avionics', 'Navigation systems', 'Ordinance fuses', 'Missile systems', 'Telemetry', 'Electronic warfare systems', 'GPS tracking', 'Emergency and safety devices', 'Shipboard devices', 'Oceanographic'],
    benefits: [
      '4.0 V open-circuit voltage and 500 mAh family capacity rating',
      'Glass-to-metal hermetic seal',
      'Low self-discharge for up to 20-year storage life',
      'Withstands 50,000 gn acceleration and 30,000 rpm spinning',
      'Operating temperature −40°C to 85°C',
      'End-of-life indication for low-battery alerts',
      'COTS technology versus reserve or thermal batteries',
    ],
    groups: [
      {
        title: 'Military Grade Cells',
        intro: 'Per-cell capacity, pulse, and dimensions are published in the individual data sheets.',
        columns: [{ key: 'model', label: 'Model' }, { key: 'voltage', label: 'Open Circuit (V)' }],
        rows: [
          { model: 'TLM-1520M', voltage: '4', pdf: pdf('2026/01/TLM-1520M-Rev-C.pdf') },
          { model: 'TLM-1530M', voltage: '4', pdf: pdf('2026/01/TLM-1530M-Rev-D.pdf') },
          { model: 'TLM-1550M', voltage: '4', pdf: pdf('2026/01/TLM-1550M-Rev-C.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'tli',
    name: 'TLI Series',
    menu: 'TLI Rechargeable',
    card: 'Rechargeable · −40°C to 85°C · up to 20-year life and 5,000 cycles',
    tagline: 'Industrial grade rechargeable lithium-ion batteries',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/tadiran-tli-pr-med-crop-u70333.jpg',
    paragraphs: [
      'TLI Series industrial-grade rechargeable lithium-ion batteries are designed to outperform consumer-grade cells, with extreme-temperature tolerance and operating life that can reach 25 years.',
      'Consumer Li-ion cells have short life, high self-discharge (up to 60% per year), and a narrow temperature window. TLI cells publish a self-discharge rate under 5% per year, fast response to high current pulses (up to 15 A for AA-size cells), and charging and discharging from −40°C to +85°C, with a maximum of +135°C on the HT range.',
      'The portfolio includes TLI-A for up to 5,000 full cycles, TLI-HC for higher capacity up to 2,000 full cycles, TLI-SC for higher capacity with partial-discharge use, TLI-ES for maximum energy in an AA-size form, and TLI-HT for environments up to +135°C.',
    ],
    applications: ['Energy harvesting', 'Remote monitoring and sensors', 'Asset and container tracking', 'Industrial IoT', 'Smart agriculture and infrastructure', 'Extreme temperature (TLI-HT)', 'Medical devices', 'Automotive systems', 'Military and aerospace'],
    benefits: ['Up to 25-year operating life', 'High pulse capability (up to 15 A for an AA cell)', '−40°C to +85°C, up to +135°C for TLI-HT', 'Safe recharging across the temperature range', 'Annual self-discharge under 5%', 'Glass-to-metal hermetic seal'],
    groups: [
      {
        title: 'Rechargeable Series',
        columns: powerCols,
        rows: [
          { model: 'TLI-1550A', voltage: '4', capacity: '300', pulse: '5.00', metric: '15.1/53', standard: '0.595/2.087', terminations: 'S T TP', pdf: pdf('2025/02/TLI-1550A-rev-H.pdf') },
          { model: 'TLI-1550HC', voltage: '4', capacity: '500', pulse: '4.00', metric: '15.1/52', standard: '0.595/2.047', terminations: 'S T TP', pdf: pdf('2025/02/TLI-1550HC-rev-D.pdf') },
          { model: 'TLI-1550ES', voltage: '4', capacity: '1,200', pulse: '10.00', metric: '15.1/53', standard: '0.595/2.087', terminations: 'S T TP', pdf: pdf('2022/04/TLI-1550ES.pdf') },
          { model: 'TLI-1550HT', voltage: '4', capacity: '500', pulse: '15.00', metric: '15.1/52', standard: '0.595/2.047', terminations: 'S T TP', pdf: pdf('2024/08/TLI-1550HT-rev-C.pdf') },
          { model: 'TLI-1550SC', voltage: '4', capacity: '1,050', pulse: '10.00', metric: '15.1/52', standard: '0.595/2.047', terminations: 'S T TP', pdf: pdf('2025/02/TLI-1550SC-rev-A.pdf') },
          { model: 'TLI-1530A', voltage: '4', capacity: '145', pulse: '5.00', metric: '15.1/27.4', standard: '0.595/1.079', terminations: 'S T TP', pdf: pdf('2024/06/Datasheet-TLI-1530A-revC.pdf') },
          { model: 'TLI-1520A', voltage: '4', capacity: '90', pulse: '1.25', metric: '15.1/20', standard: '0.595/0.787', terminations: 'S T TP', pdf: pdf('2025/02/TLI-1520A-rev-D.pdf') },
          { model: 'TLI-1020A', voltage: '4', capacity: '27', pulse: '0.40', metric: '10.5/21', standard: '0.413/0.827', terminations: 'S T TP', pdf: pdf('2025/02/TLI-1020A-rev-C.pdf') },
        ],
      },
    ],
  },
  {
    slug: 'low-temp',
    name: 'Low Temp. LiSOCl2 (−100°C)',
    menu: 'Low Temp. LiSOCl2 (−100°C)',
    card: 'Modified lithium thionyl chloride cells for extreme cold',
    tagline: 'Cold-chain and polar service',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/03/low-temp-small.jpg',
    paragraphs: [
      'Tadiran lists a low-temperature LiSOCl2 family for service down to −100°C. Published XOL construction is described for operation from −80°C to +125°C, and TLH cold-chain versions are described as reliable as low as −85°C.',
      'These are modified bobbin-type lithium thionyl chloride cells, not a separate chemistry. The right cell depends on the cold profile, pulse load, and required life. Use the XOL and TLH data sheets as the starting catalog, then confirm the modified low-temperature part with Tadiran.',
    ],
    groups: [],
  },
  {
    slug: 'trr',
    name: 'TRR Series',
    menu: 'TRR Series',
    card: 'Rapid response cells that activate instantly',
    tagline: 'Instant activation for improved performance',
    image: 'https://tadiranbat.com/wp-content/uploads/2022/01/IMG_7264-1536x1257-1.jpg',
    paragraphs: [
      'Tadiran’s public product overview lists a TRR Series for up to 20-year operating life with moderate to high pulses.',
      'A Tadiran press announcement describes TRR (Tadiran Rapid Response) batteries as activating instantly, delivering improved performance and extending operating life by up to 15%. A full public specification table was not captured from the series page, so individual ratings are not repeated here. Ask Tadiran for the current TRR data sheet before specifying a cell.',
    ],
    groups: [],
  },
]

export function cellSlug(model: string) {
  return model.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function findSeries(slug: string) {
  return series.find((item) => item.slug === slug)
}

export function allCells() {
  return series.flatMap((item) =>
    item.groups.flatMap((group) =>
      group.rows.map((row) => ({ ...row, series: item.slug, seriesName: item.name, group: group.title })),
    ),
  )
}

export function findCell(seriesSlug: string, modelSlug: string) {
  const item = findSeries(seriesSlug)
  if (!item) return undefined
  for (const group of item.groups) {
    const row = group.rows.find((cell) => cellSlug(cell.model) === modelSlug)
    if (row) return { series: item, group, cell: row }
  }
  return undefined
}
