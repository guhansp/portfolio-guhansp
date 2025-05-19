import { ArrowDown } from "lucide-react";
import React from "react";

function Profile() {
  return (
    <section
      id="profile"
      className="relative min-h-screen  flex flex-col items- justify-center px-4"
    >
      <div className="container mx-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl  md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Guhan
            </span>
            <span className="text-gradient ml-3 opacity-0 animate-fade-in-delay-2">
              Santhanam
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a Software Engineer specializing in Java, Cloud, and full-stack
            development with a passion for building scalable enterprise
            solutions.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="https://github.com/guhansp"
              target="_blank"
              className="custom-button"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <button onClick={() => (window.location.hash = "#about")}>
          <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
        </button>
      </div>
    </section>
  );
}

export default Profile;
