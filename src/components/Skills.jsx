import React, { useState } from "react";
import { cn } from "@/lib/utils";

function Skills() {
  const skills = [
    { name: "SpringBoot", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "MongoDB", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "Angular", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "Docker", category: "tools" },
    { name: "Kubernetes", category: "tools" },
    { name: "Terraform", category: "tools" },
    { name: "Packer", category: "tools" },
    { name: "AWS/GCP", category: "tools" },
    { name: "Cloud Infrastructure", category: "tools" },
    { name: "CI/CD (GitHub Actions, Jenkins)", category: "tools" },
    { name: "Git/GitHub", category: "tools" },
    { name: "Calypso", category: "tools" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Backend", "Frontend", "Tools"];
  const filteredSkills = skills.filter(
    (skill) =>
      activeCategory === "All" ||
      skill.category === activeCategory.toLowerCase()
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondaey/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
