import React, { useState } from "react";
import { cn } from "@/lib/utils";

function Skills() {
  const skills = [
    { name: "SpringBoot", level: 80, category: "backend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express", level: 75, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PostgreSQL", level: 90, category: "backend" },
    { name: "REST APIs", level: 85, category: "backend" },
    { name: "Angular", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "Kubernetes", level: 60, category: "tools" },
    { name: "Terraform", level: 95, category: "tools" },
    { name: "Packer", level: 95, category: "tools" },
    { name: "AWS/GCP", level: 90, category: "tools" },
    { name: "Cloud Infrastructure", level: 90, category: "tools" },
    { name: "CI/CD (GitHub Actions, Jenkins)", level: 75, category: "tools" },
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Calypso", level: 90, category: "tools" },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Backend", "Frontend", "Tools"];
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory.toLowerCase()
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
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full orogin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
