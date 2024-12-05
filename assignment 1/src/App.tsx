import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/Menu";
import { FlightList } from "./components/FlightList";
import FlightInfoPage from "./pages/FlightInfo";
import PageNotFound from "./pages/PageNotFound";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="flex ">
      <Menu />
      <main className="flex-grow md:pl-4 md:ml-[240px] ">
        <Header />
        <Routes>
          <Route path="/" element={<FlightList />} />
          <Route path="/flight/:id" element={<FlightInfoPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
