
import Navbar from "./Components/Navbar";

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
    <>
      <Navbar onNavigate={handleNavigate} />

    </>
  );
}

export default App;
