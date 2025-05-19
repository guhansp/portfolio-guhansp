import { Briefcase, Code, Gamepad, User } from "lucide-react";
import React from "react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold"> Passionate programmer</h3>
          <p className="text-lg text-muted-foreground">
            With 2 years of experience in Java, Cloud, and full-stack
            development, I am a passionate programmer who loves to build
            scalable enterprise solutions. 
          </p>
          <p className="text-lg text-muted-foreground">
            I have a strong foundation in software engineering principles and a
            keen interest in exploring new technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="custom-button">
              Get In touch
            </a>
            <a
              href="/Guhan_Santhanam_Resume_2025.pdf"
              target="_blank"
              className="custom-button"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:mr-3">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary">
                <Code />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> Full Stack Developer</h4>
                <p className="text-mute-foreground">
                  {" "}
                  Crafting seamless user experiences with robust backend
                  architecture using Java, React, Spring Boot, and RESTful APIs.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary">
                <Gamepad />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> When I’m not coding</h4>
                <p className="text-mute-foreground">
                  {" "}
                  I’m probably off saving virtual worlds, grinding XP, or
                  rage-quitting a competitive match. I live for building cool
                  stuff and learning new tech — bonus points if I can automate
                  it!
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary">
                <Briefcase />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  {" "}
                  Professional Shenanigans
                </h4>
                <p className="text-mute-foreground">
                  {" "}
                  Over 2 years of experience at BNP Paribas, where I developed
                  enterprise tools, improved system workflows, and earned the
                  “Rising Star” Award for high-impact contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
