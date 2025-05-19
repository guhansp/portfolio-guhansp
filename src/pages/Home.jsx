import About from "../components/About";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <Navbar /> */}
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default Home;
