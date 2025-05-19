import React from "react";

function Skills() {
  const skills = [
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "Angular", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },

    { name: "SpringBoot", level: 80, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 90, category: "backend" },
    { name: "Microservices Architecture", level: 75, category: "backend" },
    { name: "REST APIs", level: 85, category: "backend" },
    { name: "JPA/Hibernate", level: 70, category: "backend" },
    { name: "Redis", level: 65, category: "backend" },

    { name: "Docker", level: 70, category: "tools" },
    { name: "Kubernetes", level: 60, category: "tools" },
    { name: "Terraform", level: 95, category: "tools" },
    { name: "Packer", level: 95, category: "tools" },
    { name: "AWS/GCP", level: 90, category: "tools" },
    { name: "Cloud Infrastructure", level: 90, category: "tools" },
    { name: "CI/CD (GitHub Actions, Jenkins)", level: 75, category: "tools" },
    { name: "Vault", level: 70, category: "tools" },

    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Firebase", level: 70, category: "tools" },
    { name: "ECL/HPCC Systems", level: 65, category: "tools" },
    { name: "Calypso", level: 85, category: "tools" },
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary"></section>
  );
}

export default Skills;
