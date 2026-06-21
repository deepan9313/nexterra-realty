import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Listings from "../pages/Listings/Listings";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProperty from "../pages/AddProperty/AddProperty";
import About from "../pages/About/About";
import Agents from "../pages/Agents/Agents";
import Contact from "../pages/Contact/Contact";
import Rent from "../pages/Rent/Rent";
import Commercial from "../pages/Commercial/Commercial";
import ListProperty from "../pages/ListProperty/ListProperty";
import Dashboard from "../pages/Dashboard/Dashboard";
import NotFound from "../pages/NotFound/NotFound";
import MapSearch from "../pages/MapSearch/MapSearch";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route
  path="/property/:id"
  element={<PropertyDetails />}
/>
<Route path="/about" element={<About />} />
<Route path="/agents" element={<Agents />} />
<Route path="/contact" element={<Contact />} />
<Route path="/commercial" element={<Commercial />} />
<Route path="/list-property" element={<ListProperty />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="*" element={<NotFound />} />
<Route path="/map-search" element={<MapSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;