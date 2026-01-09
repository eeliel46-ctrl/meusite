import { Project, Experience } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Sugee Dashboard",
    category: "UI/UX Design",
    description: "Um dashboard intuitivo para gestão imobiliária com foco na experiência do usuário e visualização de dados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    tags: ["Figma", "React", "Tailwind"],
    link: "#"
  },
  {
    id: 2,
    title: "Saffron Grounds",
    category: "Branding & Web",
    description: "Identidade visual e website para uma marca de cafés especiais, transmitindo elegância e tradição.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
    tags: ["Branding", "Web Design"],
    link: "#"
  },
  {
    id: 3,
    title: "Resso App Redesign",
    category: "Mobile App",
    description: "Conceito de redesign para o aplicativo de música Resso, focando em descoberta social e playlists.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    tags: ["Mobile", "Prototyping"],
    link: "#"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Product Designer",
    company: "Tech Solutions Inc.",
    period: "2023 - Presente",
    description: "Liderando a equipe de design na criação de soluções SaaS escaláveis. Responsável pelo Design System e mentoria de designers júnior."
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Creative Studio",
    period: "2021 - 2023",
    description: "Desenvolvimento de interfaces para clientes internacionais, focando em e-commerce e landing pages de alta conversão."
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "WebAgency",
    period: "2019 - 2021",
    description: "Atuação na ponte entre design e código, garantindo a fidelidade visual e performance das aplicações web."
  }
];
