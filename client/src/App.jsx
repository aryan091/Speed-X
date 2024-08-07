import Navbar from "./components/Navbar";
import AnalyzeForm from "./components/AnalyzeForm";
import PerformanceMetrics from "./components/PerformanceMetrics";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false); // Use this for the global loading state

  const loadingSpinnerStyles = {
    position: "fixed", // Use fixed to cover the viewport
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transform: "none"
  };

  return (
    <>
      {loading && (
        <div style={loadingSpinnerStyles}>
          <PropagateLoader color="#3498db" />
        </div>
      )}

      <div className='fixed top-0 z-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>

      <Navbar />
      <div className="container mx-auto p-4 z-10 relative">
        <h1 className="text-3xl text-center font-bold text-purple-800 mb-12 z-20">
          SpeedX - Website Performance Analyzer
        </h1>
        <AnalyzeForm setMetrics={setMetrics} setLoading={setLoading} loading={loading} />
        {metrics && <PerformanceMetrics metrics={metrics} />}
      </div>
    </>
  );
}

export default App;
