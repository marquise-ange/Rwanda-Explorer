
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {

  const handleNavigate = (section) => {
    const target = document.getElementById(section);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F5F7]">

      {/* Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>

        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

      </main>

    </div>
  );
}

export default App;
