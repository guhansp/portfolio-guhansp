import { Briefcase, Code, User } from "lucide-react";
import React from "react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
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
            <a href="#contact" className="cosmic-button">
              Get In touch
            </a>
            <a href="#contact" className="cosmic-button">
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
                <h4 className="font-semibold text-lg">
                  {" "}
                  Full Stack Development
                </h4>
                <p className="text-mute-foreground"> i make application goof</p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary">
                <User />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  {" "}
                  Full Stack Development
                </h4>
                <p className="text-mute-foreground"> i make application goof</p>
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
                  Full Stack Development
                </h4>
                <p className="text-mute-foreground"> i make application goof</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
