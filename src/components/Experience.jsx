import { Banknote, Building2, CircleDollarSign, School } from "lucide-react";
import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-4">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <div className="bg-card p-6 rounded-xl shadow-md mb-4 md:w-[400px] min-h-[350px]">
                      <div className="flex items-center ">
                        <School size={20} className="text-primary" />
                        <h2 className="ml-3 text-m font-semibold text-foreground">
                          Northeastern University
                        </h2>
                        <img
                          src="/assets/Husky.png"
                          className="w-30 h-auto ml-auto"
                        />
                      </div>

                      <div className="flex justify-center my-2">
                        <h3 className="text-md font-medium text-muted-foreground text-center">
                          Graduate Student – MS in Information Systems
                        </h3>
                      </div>

                      <div className="flex flex-col items-start space-y-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Pursuing a Master’s in Information Systems, focusing
                          on software development, cloud computing, and system
                          design. Actively expanding technical expertise through
                          hands-on projects involving full-stack development,
                          microservices, and containerization with Docker and
                          Kubernetes.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="bg-card p-6 rounded-xl shadow-md mb-4 md:w-[400px] min-h-[350px]">
                      <div className="flex items-center ">
                        <Building2 size={20} className="text-primary" />
                        <h2 className="ml-3 text-m font-semibold text-foreground">
                          BNP Paribas
                        </h2>
                        <img
                          src="/assets/BNP.png"
                          className="w-30 h-auto ml-auto"
                        />
                      </div>

                      <div className="flex justify-center my-2">
                        <h3 className="text-md font-medium text-muted-foreground text-center">
                          Software Engineer
                        </h3>
                      </div>

                      <div className="flex flex-col items-start space-y-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Worked on the Calypso application as part of the
                          transversal team, focusing on both Java-based
                          development and production support. Developed internal
                          tools to enhance the NRT process, optimized access
                          provisioning workflows, and contributed to environment
                          stability and performance improvements. Gained
                          valuable exposure to capital markets and investment
                          banking workflows, deepening my domain understanding.
                          Recognized with the{" "}
                          <span className="text-primary">
                            {" "}
                            Rising Star Award
                          </span>{" "}
                          for consistently delivering high-impact solutions and
                          demonstrating strong ownership.
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>

          <div className="p-4 md:border-l-4 md:border-[color:var(--primary-color)] md:rounded-l-lg">
            <table>
                <thead></thead>
                <tbody>
              <tr>
                <td>
                  <div className="bg-card p-6 rounded-xl shadow-md mb-4 md:w-[400px] min-h-[350px]">
                    <div className="flex items-center">
                      <School size={20} className="text-primary" />
                      <h2 className="ml-3 text-m font-semibold text-foreground">
                        VIT University
                      </h2>
                      <img
                        src="/assets/Vit.png"
                        className="w-30 h-auto ml-auto"
                      />
                    </div>

                    <div className="flex justify-center my-2">
                      <h3 className="text-md font-medium text-muted-foreground text-center">
                        Master of Computer Applications (MCA)
                      </h3>
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Completed MCA with a focus on core computer science
                        concepts such as data structures, algorithms, and
                        database systems. Engaged in academic projects involving
                        full-stack development and published a research paper in
                        applied machine learning, exploring algorithmic
                        effectiveness for real-world use cases. This academic
                        foundation has strongly supported my transition into
                        professional software engineering and systems
                        development roles.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bg-card p-6 rounded-xl shadow-md mb-4 md:w-[400px] min-h-[350px]">
                    <div className="flex items-center">
                      <School size={20} className="text-primary" />
                      <h2 className="ml-3 text-m font-semibold text-foreground">
                        Kalasalingam University
                      </h2>
                      <img
                        src="/assets/KLU.png"
                        className="w-20 h-auto ml-auto"
                      />
                    </div>

                    <div className="flex justify-center my-2">
                      <h3 className="text-md font-medium text-muted-foreground text-center">
                        Bachelor of Computer Applications (BCA)
                      </h3>
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Completed BCA with a strong foundation in programming,
                        software engineering, and web technologies. Gained
                        hands-on experience through academic projects and
                        coursework in Java, data structures, and application
                        development, setting the groundwork for further studies
                        and a career in software development.
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
