// Maharashtra districts and major cities for local SEO targeting
export const maharashtraLocations = [
  "Mumbai", "Thane", "Navi Mumbai", "Dombivli", "Kalyan", "Bhiwandi", "Vasai-Virar",
  "Panvel", "Ambernath", "Badlapur", "Ulhasnagar", "Mira-Bhayandar",
  "Pune", "Pimpri-Chinchwad", "Nashik", "Nagpur", "Aurangabad", "Solapur",
  "Kolhapur", "Sangli", "Satara", "Ratnagiri", "Sindhudurg",
  "Ahmednagar", "Jalgaon", "Dhule", "Nandurbar", "Latur", "Osmanabad",
  "Beed", "Parbhani", "Hingoli", "Nanded", "Akola", "Amravati",
  "Yavatmal", "Washim", "Buldhana", "Wardha", "Chandrapur", "Gadchiroli",
  "Gondia", "Bhandara", "Raigad", "Alibaug", "Powai", "Dadar",
];

export const panelTypes = [
  "LT Panel", "MCC Panel", "PCC Panel", "APFC Panel", "VFD Panel",
  "PLC Panel", "SCADA Panel", "DG Panel", "AMF Panel", "Capacitor Panel",
  "Relay Panel", "Control Panel", "Power Distribution Panel",
  "Motor Control Center", "Power Control Center", "Mimic Panel",
  "HMI Panel", "Automation Panel", "Electrical Panel", "Fire Panel",
];

export const serviceKeywords = [
  "control panel manufacturer", "electrical panel manufacturer",
  "panel board manufacturer", "switchgear manufacturer",
  "industrial automation", "PLC programming", "SCADA development",
  "panel wiring", "electrical contractor", "automation solutions",
  "panel fabrication", "custom panel design", "panel assembly",
  "electrical engineering", "industrial electricals",
  "panel board supplier", "electrical panel exporter",
];

// Generate location-based keywords
export function generateLocationKeywords(panelType: string): string {
  return maharashtraLocations
    .slice(0, 20)
    .map(loc => `${panelType} in ${loc}`)
    .join(", ");
}

// Client names for SEO
export const clientNames = [
  "Reliance Industries", "L&T", "Lodha Group", "Rustomjee", "Palava",
  "Lloyds Steels Industries", "Cloud9", "Bisleri", "Indian Railways",
  "büchiglasuster", "Platinum Group of Hospitals", "Cidco",
];

// Homepage keywords combining everything
export const homepageKeywords = [
  // Core product keywords
  ...panelTypes.map(p => `${p} manufacturer`),
  // Client trust signals
  ...clientNames.map(c => `${c} panel supplier`),
  // Location keywords
  ...maharashtraLocations.slice(0, 15).flatMap(loc => [
    `electrical panel manufacturer in ${loc}`,
    `control panel manufacturer in ${loc}`,
  ]),
  // Service keywords
  ...serviceKeywords,
  // Long-tail keywords
  "best panel manufacturer in Maharashtra",
  "ISO 9001:2015 certified panel manufacturer India",
  "industrial control panel supplier Mumbai",
  "electrical panel fabrication Thane",
  "PLC SCADA automation Dombivli",
  "VFD panel manufacturer Navi Mumbai",
  "MCC panel supplier Kalyan Dombivli",
  "power distribution panel Maharashtra",
  "custom electrical panel India",
  "LT switchgear manufacturer Mumbai Thane",
  "APFC panel manufacturer near me",
  "panel board manufacturer Dombivli Thane Mumbai",
  "electrical control panel manufacturer in India",
  "industrial panel board supplier Maharashtra",
  "Ajit Electricals Dombivli",
  "Ajit Electricals Mumbai",
  "Ajit Electricals Thane",
  "Ajit Electricals control panel",
  "Ajit Electricals panel manufacturer",
  "electrical panel manufacturer near me",
  "best control panel company in India",
  "panel manufacturer for Reliance L&T Lodha",
].join(", ");

export const productsKeywords = [
  ...panelTypes.flatMap(p => [
    `${p} manufacturer`, `${p} supplier`, `${p} price`, `buy ${p}`,
    `${p} in Mumbai`, `${p} in Thane`, `${p} in Dombivli`, `${p} in Maharashtra`,
    `${p} in Navi Mumbai`, `${p} in India`,
  ]),
  "electrical panel specifications",
  "control panel design and manufacturing",
  "custom panel board fabrication",
  "industrial switchgear panels",
  "motor starter panel",
  "power factor correction panel",
  "variable frequency drive panel",
  "programmable logic controller panel",
  "Ajit Electricals products",
  "Ajit Electricals panel range",
].join(", ");

export const industriesKeywords = [
  "industrial automation solutions India",
  "factory automation Maharashtra",
  "water treatment plant automation",
  "STP WTP ETP control panel",
  "pharmaceutical automation panel",
  "FMCG production line automation",
  "hotel building management system",
  "hospital electrical panel",
  "steel plant automation",
  "textile mill automation",
  "HVAC control panel manufacturer",
  "food processing automation",
  "infrastructure electrical panel",
  "Ajit Electricals industries served",
  ...maharashtraLocations.slice(0, 10).map(loc => `industrial automation ${loc}`),
].join(", ");

export const contactKeywords = [
  "Ajit Electricals contact",
  "Ajit Electricals phone number",
  "Ajit Electricals email",
  "electrical panel manufacturer contact",
  "control panel inquiry",
  "panel quotation request",
  "electrical panel near me",
  "panel manufacturer Dombivli contact",
  ...maharashtraLocations.slice(0, 10).map(loc => `electrical panel manufacturer ${loc} contact`),
].join(", ");

export const aboutKeywords = [
  "about Ajit Electricals",
  "Ajit Electricals company profile",
  "electrical panel manufacturer company profile",
  "ISO 9001:2015 certified panel manufacturer",
  "panel manufacturer Dombivli Thane Mumbai",
  "industrial electricals company Maharashtra",
  "best control panel manufacturer India",
  "trusted panel board supplier",
  "Ajit Electricals history",
  "Ajit Electricals team",
].join(", ");
