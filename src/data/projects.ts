export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  year: string;
  category: "mobile" | "frontend";
  liveUrl?: string;
  sourceUrl?: string;
  visualType?: "shop" | "bloc" | "mendix" | "qa" | "generic";
  imageUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "GreenLeaf Vietnam (GLV)",
    description: "Corporate ride booking and fleet tracking mobile application built with React Native.",
    longDescription: "Developed a high-performance React Native mobile application for GreenLeaf Vietnam (GLV) to streamline corporate transportation services. Built real-time ride tracking utilizing maps integration, automated fleet driver scheduling, and responsive user flows. Engineered state synchronization and HTTP middleware utilizing Zustand, Axios, and React Query to optimize coordinate caching for seamless offline usability during transit.",
    tags: ["React Native", "Zustand", "React Query", "Axios", "Maps API"],
    year: "2023",
    category: "mobile",
    imageUrl: "/glv.jpg"
  },
  {
    id: 2,
    title: "Kim Tin Group (KTG) Mobile Portal",
    description: "Enterprise resource and logistics mobile app built with React Native for factory operators.",
    longDescription: "Engineered an enterprise-grade mobile application using React Native for Kim Tin Group's factory and logistics personnel. Developed high-efficiency barcode scanning integrations, live warehouse inventory lookup sheets, and real-time transit dispatch updates. Connected device clients to central SAP ERP systems via Axios and React Query, with local states managed seamlessly by Zustand on the factory floor.",
    tags: ["React Native", "Zustand", "React Query", "Axios", "SAP Integration"],
    year: "2023",
    category: "mobile",
    imageUrl: "/ktg.jpg"
  },
  {
    id: 3,
    title: "Nhà Trọ Sạch Sẽ (NTSS)",
    description: "Serviced rental room search and utility billing mobile app developed with React Native.",
    longDescription: "Built and shipped the flagship mobile application for Nhà Trọ Sạch Sẽ (NTSS) to digitize rental property discovery and room bookings in Ho Chi Minh City. Programmed custom room search filters, automated utility bill processing interfaces, and integrated local payment gateways. Leveraged React Query and Axios for robust caching of listing APIs and Zustand for lightweight client state persistence, delivering fluid animations on older devices.",
    tags: ["React Native", "Zustand", "React Query", "Axios", "Payment Gateway"],
    year: "2023",
    category: "mobile",
    imageUrl: "/ntss.png"
  },
  {
    id: 4,
    title: "Shop App (Flutter)",
    description: "E-commerce mobile app for digital assets and apparel featuring secure payment integrations.",
    longDescription: "Developed a polished e-commerce shopping client with Flutter featuring fluid product listings, an interactive shopping cart, and secure user authentication. Integrated RESTful backend APIs for dynamic inventory synchronizations and optimized application responsiveness for cross-platform iOS and Android devices.",
    tags: ["Flutter", "Dart", "REST API", "State Management", "UI/UX"],
    year: "2022",
    category: "mobile",
    visualType: "shop"
  }
];
