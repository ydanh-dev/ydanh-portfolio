export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  category: "platform" | "mobile";
  surfaces: string[];
  imageUrl?: string;
  role: string;
  scope: string;
  outcome: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "GreenLeaf Vietnam — GLV",
    description: "A multi-surface transport operations platform for customers, drivers, and internal teams.",
    longDescription: "Contributed across GreenLeaf's transport operations ecosystem: Angular admin and customer portals, React Native passenger and driver applications, and the NestJS API behind them. The system coordinates short- and long-term contracts, schedules, driver and vehicle operations, live tracking, customer issues, maintenance, finance, and reporting across role-specific workflows.",
    tags: ["React Native", "Angular", "NestJS", "TypeScript", "MapLibre", "Socket.IO"],
    year: "Production",
    category: "platform",
    surfaces: ["Admin web", "Customer web", "Passenger app", "Driver app", "API"],
    imageUrl: "/glv.jpg",
    role: "Product engineer · Web, mobile & API",
    scope: "Contracts · scheduling · fleet · tracking · maintenance",
    outcome: "Connected customer-facing journeys and internal fleet operations into one production platform.",
    highlights: ["Role-specific web and mobile products", "Live tracking and schedule workflows", "Cross-surface API contracts"],
  },
  {
    id: 2,
    title: "Kim Tin Group — KTG PMS",
    description: "A mobile procurement management workspace for enterprise approval and supplier workflows.",
    longDescription: "Built the React Native mobile surface of KTG's procurement management system. The application brings purchase requests, purchase orders, bids, bid rates, contracts, reservations, and supplier evaluation into mobile approval flows, supported by OAuth2 SSO, Firebase notifications, React Query, and production EAS releases.",
    tags: ["React Native", "Expo", "React Query", "OAuth2 SSO", "Firebase", "EAS"],
    year: "2026",
    category: "mobile",
    surfaces: ["Mobile app", "NestJS integration", "SSO", "Push notifications"],
    imageUrl: "/ktg.jpg",
    role: "Mobile product engineer",
    scope: "PR · PO · bidding · suppliers · contracts · approvals",
    outcome: "Moved procurement review and approval work from desktop-bound processes into a focused mobile experience.",
    highlights: ["Procurement approval workflows", "Supplier and bidding modules", "SSO, push, and OTA delivery"],
  },
  {
    id: 3,
    title: "Nhà Trọ Sạch Sẽ — NTSS v2",
    description: "A full property operations platform spanning residents, employees, managers, finance, and maintenance.",
    longDescription: "Contributed across the NTSS v2 platform: a React admin web application, separate customer and employee mobile apps, a large NestJS domain API, and a scheduling service. The system supports contracts, residents, bills, payments, property assets, warehouse flows, maintenance, fire safety, finance, employee operations, reporting, and role-based approvals.",
    tags: ["React", "React Native", "NestJS", "TypeScript", "React Query", "PostgreSQL"],
    year: "2026",
    category: "platform",
    surfaces: ["Admin web", "Customer app", "Employee app", "API", "Schedule service"],
    imageUrl: "/ntss.jpeg",
    role: "Product engineer · Web, mobile & API",
    scope: "Property · contracts · finance · assets · maintenance",
    outcome: "Unified resident-facing services and dense internal operations across a role-based product ecosystem.",
    highlights: ["Admin and role-specific mobile products", "Large operational domain model", "Finance, asset, and maintenance workflows"],
  },
  {
    id: 4,
    title: "Bulsan Operations",
    description: "A field operations mobile application for warehouse, delivery, and bill-handling workflows.",
    longDescription: "Developed and maintained a React Native operations application used across warehouse and delivery workflows. The product supports bill creation and checking, product pickup, inventory, outbound processing, delivery, barcode and camera scanning, maps, and background geolocation, with MobX coordinating state across operational modules.",
    tags: ["React Native", "TypeScript", "MobX", "Barcode", "Maps", "Background Geolocation"],
    year: "Production",
    category: "mobile",
    surfaces: ["Mobile app", "Camera & barcode", "Maps", "Background services"],
    imageUrl: "/bulsan.jpg",
    role: "React Native engineer",
    scope: "Bills · inventory · outbound · delivery · field operations",
    outcome: "Put warehouse and delivery tasks into one operational mobile tool for field teams.",
    highlights: ["Barcode and camera workflows", "Inventory and delivery modules", "Background location operations"],
  },
];
