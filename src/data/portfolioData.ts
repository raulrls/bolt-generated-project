export interface Project {
  id: number;
  title: string;
  summary: string;
  images: string[];
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
}

export const projects: Project[] = [
  {
    id: 6,
    title: "Survey Data & Sentiment Analysis for Public Infrastructure Evaluation",
    summary: "Conducted data analysis for the Mexican government to support ISO 9001 certification, leveraging user feedback to identify key infrastructure improvements",
    images: [
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos1.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos2.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos5.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos3.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/puentesfronterizos4.jpg"
    ],
    tags: ["Power BI", "FastAPI", "OpenAI", "Data analysis", "Sentiment Analysis", "Decision Support", "ISO 9001"],
    details: {
      challenge: "The State Government of Chihuahua aimed to obtain ISO 9001certification, which required  the tracking, measurement, analysis, and evaluation of customer satisfaction and the effectiveness of the management system across three transnational bridges between Ciudad Juarez and El Paso. ",
      solution: "Analyzed survey data to assess user satisfaction and safety, developed a Power BI dashboard for decision-makers, and used AI-driven sentiment analysis to classify user feedback into complaints, suggestions, and concerns.",
      impact: [
        "Helped government executives identify and prioritize key infrastructure improvements based on data-driven recommendations.",
        "Supported the successful ISO 9001 certification by providing the required data analysis and insights."
      ]
    }
  },
  {
    id: 2,
    title: "Tourism Data Platform for Public Access & Insights (SICHITUR)",
    summary: "Collaborated in a web platform for the Mexican government to provide public access to tourism KPIs, integrating data from various sources to enhance decision-making and transparency.",
    images: [
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur1.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur2.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur3.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/sichitur4.jpg"
    ],
    tags: ["Python", "Web Scraping", "Power BI", "Sentiment Analysis",  "Open Data"],
    details: {
      challenge: "The Tourism Department of Chihuahua needed a public platform to provide transparent access to tourism data, including visitor trends, economic impact, and social media insights.",
      solution: "Developed sichitur.com, a web platform with integrated Power BI dashboards, automated tourism data collection from flights, hotels, and social media, and performed sentiment analysis to provide public access to tourism KPI's.",
      impact: [
        "Empowered government executives, businesses, and the public with data-driven insights for better planning.",
        "Provided data integration, enhancing tourism strategy based on visitor trends and economic impact."
      ]
    },
      externalLink : {
        title: "Visit sichitur.com",
        url: "https://sichitur.com"
      }
  },
  {
    id: 3,
    title: "Agente Libre – AI-Powered Job Matching Platform",
    summary: "Developed a web application to automate job searching by aggregating listings from multiple sources and using AI-powered resume matching to recommend the best opportunities.",
    images: [
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre1.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre2.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/agentelibre3.jpg"
    ],
    tags: ["OpenAI Embeddings", "Airflow", "Web Scraping", "Supabase", "Cloud Flare", "Python", "Cosine Similarity"],
    details: {
      challenge: "With numerous job boards online, job seekers struggle to track openings across multiple platforms and identify opportunities that align with their skills and experience.",
      solution: "Developed Agente Libre, a web application that scrapes and enriches job listings daily, applies AI-powered resume matching to suggest relevant jobs, enables users to manage digital resumes, and provides automated alerts for top opportunities.",
      impact: [
        "Simplifies job searching by centralizing listings from multiple sources and enhancing discovery through AI.",
        "Empowers job seekers with personalized recommendations, resume insights, and an easy-to-use platform tailored for remote work in Mexico."
      ]
    },
    externalLink : {
      title: "Visit AgenteLibre.mx",
      url: "https://www.agentelibre.mx"
    }
  },
  {
    id: 4,
    title: "Mobile Tire Repair Business (MePonché)",
    summary: "Co-founded a mobile tire repair service leveraging data analytics to optimize operations, improve service response time, and set competitive pricing for profitability.",
    images: [
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche4.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche1.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche2.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche3.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/meponche5.jpg"
    ],
    tags: ["Geospatial Analysis", "Market Research", "Business Strategy", "Power BI", "Entrepreneurship"],
    details: {
      challenge: "Efficiently delivering mobile tire repair services required identifying an optimal base of operations, ensuring fast response times, and setting competitive pricing to attract customers while remaining profitable.",
      solution: "Used geospatial and market analysis to identify the best service location, optimized pricing for affordability and profitability, and developed a Power BI dashboard to track operations, revenue trends, and customer distribution.",
      impact: [
        "Introduced an innovative on-location tire repair service with a competitive and sustainable pricing model, making it accessible to a wider audience while maintaining profitability.",
        "Secured funding for business expansion by presenting data-driven insights to investors."
      ]
    }
  }, {
    id: 7,
    title: "Data Analyst Volunteer - Chupacabras A.C.",
    summary: "Led data analysis efforts for a major mountain bike event, providing insights on cyclist satisfaction, performance, and economic impact—key factors in securing government support and sponsorships.",
    images: [
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/chupacabras1.jpg"
    ],
    tags: ["Power BI", "Process Automation", "Data Analysis"],
    details: {
      challenge: "Organizers needed data-driven insights to demonstrate the event’s economic impact and participant experience, crucial for securing government permissions and sponsorships.",
      solution: "Conducted cyclist satisfaction and economic impact studies, and developed Power BI reports showcasing the event's value to stakeholders.",
      impact: [
        "Demonstrated the event’s economic impact in our community, proving its value to the local government, which helped in securing permissions and funding.",
        "Provided sponsorship-attracting insights, highlighting visitor spending and participant engagement to bring in new partners.",
        "Saved 500+ man-hours annually by digitizing and streamlining survey processes, ensuring long-term sustainability for future volunteers."
      ]
    }, externalLink : {
      title: "Check out the Power BI Report delivered",
      url: "https://app.powerbi.com/view?r=eyJrIjoiZDRmMmFjNzItZmViMi00MWFkLTk0ZWYtYjEwMzU3YjI0OGM5IiwidCI6ImUxYmE2Mzk1LTdhNjQtNGI5Mi1hYWYzLWE3YzAyMGMzZDE4ZiIsImMiOjR9"
    }
  },
  {
    id: 5,
    title: "Power BI Instructor",
    summary: "Trained over 200 professionals in Power BI as part of a government initiative, preparing them for certification and strengthening data analytics expertise in Chihuahua’s workforce.",
    images: [
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi1.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi2.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi3.jpg",
      "https://pub-8ef4adb175e3459989097ebb94b40633.r2.dev/cursospbi4.jpg"
    ],
    tags: ["Power BI", "DAX", "Data Modeling", "M", "PowerQuery", "PowerApps"],
    details: {
      challenge: "The Chihuahua government needed to upskill professionals in data analytics, particularly in Power BI, to support the growing demand for data-driven decision-making in industries like manufacturing, retail, and finance.",
      solution: "Designed and delivered Power BI courses for a government-backed program, training in data modeling, DAX, Power Query, and visualization best practices to prepare them for Microsoft’s Power BI certification.",
      impact: [
        "Trained over 200 professionals for the Microsoft Power BI Data Analyst Associate certification.",
        "Strengthened Chihuahua’s workforce by increasing Power BI expertise in industries vital to the region’s economy."
      ]
    },externalLink : {
      title: "Enroll to free courses at ia.center",
      url: "https://www.ia.center/es/"
    }
  }
];
