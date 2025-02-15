import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ProgressBar from "./components/Fixed/ProgressBar.jsx";
import Navbar from "./components/Fixed/Navbar.jsx";
import TicketSelectionHero from "./components/TicketSelection/Hero.jsx";
import AttendeeDetailsHero from "./components/AttendeeDetails/Hero.jsx";
import TicketReadyHero from "./components/TicketReady/Hero.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      

      <BrowserRouter>
      {/* <ProgressBar /> */}
        <Routes>
          <Route path="/" element={<TicketSelectionHero />} />
          <Route
            path="/AttendeeDetails/Hero"
            element={<AttendeeDetailsHero />}
          />
          <Route path="/TicketReady/Hero" element={<TicketReadyHero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
