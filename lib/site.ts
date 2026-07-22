export const site = {
  name: "Vaughn Campos",
  title: "Vaughn Campos — Software Engineer | Aerospace | Robotics | AI",
  role: "Software Engineer | Aerospace | Robotics | AI",
  description:
    "I build software and hardware systems spanning web applications, simulations, embedded systems, and spacecraft engineering.",
  url: "https://vaughncampos.dev",
  email: "vcampos4545@gmail.com",
  resumeHref: "/resume.pdf",
  links: {
    // TODO: replace with your real profile URLs before deploying.
    github: "https://github.com/vcampos4545",
    linkedin: "https://www.linkedin.com/in/vaughn-campos",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
] as const;
