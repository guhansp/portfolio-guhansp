import React from "react";

function Profile() {
  return (
    <section
      id="profile"
      className="relative min-h-screen  flex flex-col items- justify-center px-4"
    >
      <div className="container mx-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Guhan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Santhanam
            </span>
          </h1>
          <p>
            I'm a Software Engineer specializing in Java, Cloud, and full-stack
            development with a passion for building scalable enterprise
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
