import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* <Navbar /> */}
      <Navbar />
      <main>
        <Profile />
      </main>
    </div>
  );
}

export default Home;
