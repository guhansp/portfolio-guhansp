import {
  CircleCheckBig,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Send,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [error, setError] = useState(null);
  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Sending your message...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        "#contact-form",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setError(null);
          toast.dismiss();
          toast.success("Message Sent successfully!");
          setisSubmit(true);
        },
        (error) => {
          console.log(error);
          setError("Failed to send email. Please try again.");
          toast.error("Failed to send email. Please try again.");
          setisSubmit(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let's connect and create
          something amazing together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information{" "}
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:santhanamparthiban.g@northeastern.edu"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    santhanamparthiban.g@northeastern.edu
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LinkedinIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="md:ml-16">
                  <h4 className="font-medium"> LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/guhan-sp/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    Guhan Santhanam S P
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3  rounded-full bg-primary/10">
                  <GithubIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="md:ml-10">
                  <h4 className="font-medium">Explore more of my projects</h4>
                  <a
                    href="https://github.com/guhansp"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {" "}
                    Guhan Santhanam S P
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs ">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              id="contact-form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="emailid"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Email
                </label>
                <input
                  type="text"
                  id="emailid"
                  name="emailid"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary "
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none "
                  placeholder="Your Message"
                  required
                />
              </div>
              {!isSubmit ? (
                <button
                  type="submit"
                  className={cn(
                    "custom-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  <Send size={16} /> Send Message
                </button>
              ) : (
                <div className="flex flex-row font-semibold items-center justify-center gap-2">
                  <CircleCheckBig size={50} className="text-green-600" />
                  <h3>
                    Thank you for your message! I will get back to you soon.
                  </h3>
                </div>
              )}
            </form>
            <ToastContainer
              toastStyle={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
