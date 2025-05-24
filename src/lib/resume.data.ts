import type { TResumeSchema } from "./resume.schema";

export const resumeData: TResumeSchema = {
  meta: {
    theme: "jsonresume-theme-stackoverflow",
  },
  basics: {
    name: "Milind Kumar Mishra",
    label: "Product Engineer",
    email: "milindmishra4@gmail.com",
    phone: "+919631333128",
    url: "https://milindmishra.com",
    location: {
      address: "Zolo Darren, BTM Layout",
      postalCode: "560034",
      city: "Bengaluru",
      countryCode: "IN",
      region: "Karnataka",
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "mishramilind",
        url: "https://linkedin.com/in/mishramilind",
      },
      {
        network: "GitHub",
        username: "thatbeautifuldream",
        url: "https://github.com/thatbeautifuldream",
      },
      {
        network: "X",
        username: "milindmishra_",
        url: "https://x.com/milindmishra_",
      },
    ],
  },
  work: [
    {
      name: "Merlin AI by Foyer",
      position: "Product Engineer",
      url: "https://getmerlin.in",
      startDate: "2025-02-01",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Shipped UI for ChatGPT Imports enabling users to bring their chat history with ease to Merlin AI.",
        "Shipped pages for chat history flow including project chats.",
        "Revamped AI Model Selector.",
        "Working on Prompt Enhancement feature for merlin chat input from streaming backend to managing stream on the frontend.",
      ],
    },
    {
      name: "SARAL - The Influencer OS",
      position: "Software Engineer",
      url: "https://getsaral.com",
      startDate: "2025-01-01",
      endDate: "2025-02-01",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Shipped a revamped internal dashboard improving access to key metrics and reducing onboarding time.",
        "Shipped multi-select drag-and-drop on relationship board for bulk operations.",
        "Developed content submission system for influencers to streamline approvals.",
        "Optimized influencer performance monitoring for campaign managers.",
      ],
    },
    {
      name: "Proof-of-Skill Protocol",
      position: "Founding Product Engineer",
      url: "https://proofofskill.org",
      startDate: "2024-06-01",
      endDate: "2024-12-31",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Led MVP development for core workflows: Skill Validators, Candidates, Recruiters.",
        "Integrated voting mechanism with consensus algorithm for validation fairness.",
        "Built Candidate Flow: assessment recording, proctoring, cloud streaming.",
        "Developed Recruiter Flow: skill heatmap generation and hiring insights.",
        "Managed EC2, NGINX, PM2, and Next.js deployments for scale and availability.",
      ],
    },
    {
      name: "Freelance",
      position: "Independent Contractor",
      url: "https://milindmishra.com",
      startDate: "2024-02-01",
      endDate: "2024-05-31",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Built a platform for recruiter insights and candidate search.",
        "Developed AI-powered quiz system using Vercel AI SDK, OpenAI, Fireworks AI.",
        "Used Next.js for frontend with seamless AI integration.",
      ],
    },
    {
      name: "StartupHire",
      position: "Software Engineer",
      url: "https://www.linkedin.com/company/startuphire",
      startDate: "2023-08-01",
      endDate: "2024-01-31",
      location: "Remote",
      highlights: [
        "Led a team to prototype a recruiting pipeline.",
        "Integrated multiple job boards for centralized job tracking.",
      ],
    },
    {
      name: "National Yang Ming Chiao Tung University",
      position: "Research Assistant",
      url: "https://www.nycu.edu.tw/",
      startDate: "2023-02-01",
      endDate: "2023-07-31",
      location: "Hsinchu, Taiwan",
      highlights: [
        "Developed frontend for indoor positioning system with MQTT, IoT, UWB tech.",
        "Implemented 3D visualization using React, GSAP, and Three.js.",
        "Improved positioning accuracy from 20cm to under 10cm.",
      ],
    },
    {
      name: "Locus Connect",
      position: "Software Engineer",
      url: "https://www.locusconnect.com/",
      startDate: "2022-07-01",
      endDate: "2023-01-31",
      location: "Hsinchu, Taiwan",
      highlights: [
        "Built frontend for 3D indoor positioning platform.",
        "Created and maintained marketing website.",
        "Managed in-house infrastructure and Dockerized services.",
      ],
    },
    {
      name: "iNeuron.ai",
      position: "UX Designer",
      url: "https://www.ineuron.ai/",
      startDate: "2022-05-01",
      endDate: "2022-06-30",
      location: "Bengaluru, Karnataka, India",
      highlights: [
        "Designed user flows and managed design system.",
        "Created marketing posters and campaign assets.",
      ],
    },
    {
      name: "Plusklass",
      position: "Technical Writer",
      url: "https://www.plusklass.com/",
      startDate: "2022-01-01",
      endDate: "2022-04-30",
      location: "Remote",
      highlights: [
        "Developed comprehensive educational materials for HTML, CSS, JavaScript.",
        "Created structured learning content for beginners.",
      ],
    },
  ],
  education: [
    {
      institution: "National Yang Ming Chiao Tung University",
      url: "https://www.nycu.edu.tw/",
      area: "Computer Software Engineering",
      studyType: "Short Term Research Program",
      startDate: "2023-02-01",
      endDate: "2023-07-31",
    },
    {
      institution: "Visvesvaraya Technological University",
      area: "Electronics and Communication",
      url: "https://www.vtu.ac.in/",
      studyType: "Bachelor of Engineering",
      startDate: "2018-08-01",
      endDate: "2022-01-01",
    },
  ],
  certificates: [
    {
      name: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      url: "https://nextjs.org/learn/certificate?course=dashboard-app&user=48654&certId=dashboard-app-48654-1745867386592",
    },
    {
      name: "Animations on the Web",
      issuer: "animations.dev",
      url: "https://animations.dev/certificate/3c66d48d-0d7a-4865-b023-e06ddfd71971",
    },
    {
      name: "AI for React Developers",
      issuer: "LinkedIn Learning",
      url: "https://www.linkedin.com/learning/certificates/28f048356a91802cc20a3af01c9a034faa62ac7628a02631142d2eb78062a781",
    },
    {
      name: "React: Design Patterns",
      issuer: "LinkedIn Learning",
      url: "https://www.linkedin.com/learning/certificates/bbb1d2307524475c1cc86d3c1dd77137a720dcc5f702ee1ee092d13354fa3c40",
    },
    {
      name: "React: State Management",
      issuer: "LinkedIn Learning",
      url: "https://www.linkedin.com/learning/certificates/325849cd7c3d9fc599c2acd78c01b63df82246724b77e4425a89d0c8c92460f4",
    },
    {
      name: "React (Basic)",
      issuer: "HackerRank",
      url: "https://www.hackerrank.com/certificates/57ce647802bb",
    },
  ],
  skills: [
    {
      name: "Web Development",
      level: "Intermediate",
      keywords: [
        "TypeScript",
        "Next.js",
        "Express.js",
        "React",
        "Git",
        "Docker",
        "REST APIs",
        "Frontend",
        "Backend",
      ],
    },
    {
      name: "DevOps",
      level: "Beginner",
      keywords: [
        "Cloud Services (AWS, GCP)",
        "Storage",
        "CDNs",
        "CI/CD",
        "Docker",
        "Monitoring Tools",
      ],
    },
    {
      name: "Design",
      level: "Beginner",
      keywords: [
        "Figma",
        "User Experience (UX)",
        "UI Design",
        "Prototyping",
        "Wireframing",
      ],
    },
    {
      name: "Project & Ops",
      level: "Beginner",
      keywords: ["Project Management", "Team Collaboration"],
    },
  ],
  projects: [
    {
      name: "AI Roadmap Generator",
      description:
        "Generates personalized learning roadmaps using Next.js, React, Canvas, and LLMs.",
      highlights: [
        "10,000+ visitors, recognized as 'Project of the Month' on Peerlist",
      ],
      url: "https://airoadmapgenerator.com",
    },
    {
      name: "Sideprojects Directory",
      description:
        "Showcases GitHub projects tagged with 'side-project', with auto-generated profiles.",
      highlights: [
        "Improved project visibility and collaboration opportunities",
      ],
      url: "https://sideprojects.directory",
    },
    {
      name: "JSON Visualizer",
      description: "Tool to visualize JSON structures in tree and grid views.",
      highlights: [
        "Used by developers for better frontend integration and debugging",
      ],
      url: "https://jsonvisualiser.com",
    },
  ],
  talks: [
    {
      event: "React Play x React Bangalore Meetup",
      date: "2025-05-17",
      title: "Building Real-Time Applications with Reactive Databases",
      website: "https://www.meetup.com/reactplay-bengaluru/events/307690438/",
      slides:
        "https://milindmishra.com/slide/building-realtime-applications-with-reactive-databases",
      summary: "Real-time applications with React and Convex.",
    },
    {
      event: "React Bangalore Meetup",
      date: "2025-04-12",
      title: "AI for React Developers",
      website: "https://www.meetup.com/reactjs-bangalore/events/306320480/",
      slides: "https://milindmishra.com/slide/ai-for-react-developers",
      summary: "A deep-dive into Vercel's AI SDK.",
    },
  ],
  references: [
    {
      name: "Akash Bhadange",
      reference:
        "100% AGREE! Also, the way team has launched the project is commendable. This is by far the most successful project launch on Peerlist",
    },
  ],
};
