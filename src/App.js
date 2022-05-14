import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; //For Routing
import RestaurantCreate from "./components/RestaurantCreate";
//import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantHome from "./components/RestaurantHome";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantLogin from "./components/RestaurantLogin";
import RestaurantLogout from "./components/RestaurantLogout";
import RestaurantProtectedRoute from "./components/RestaurantProtectedRoute";
import RestaurantRegistration from "./components/RestaurantRegistration";
import "./styling/styling.css"; //import styling this is use for every components files


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* RestaurantProtectedRoute is our private route and RestaurantProtectedRoute  is the parent of all following Route*/}
           <Route element={<RestaurantProtectedRoute/>}> 
           <Route path="/" element={<RestaurantHome />}/>
          <Route path="/list" element={<RestaurantList />} />
          <Route path="/create" element={<RestaurantCreate />} />
          <Route path="/search" element={<RestaurantSearch />} />
          {/* <Route path="/details" element={<RestaurantDetail />} />
          <Route path="/update" element={<RestaurantUpdate/>}/> */}
          <Route path="/logout" element={<RestaurantLogout />} />
          </Route>
          <Route path="/update/:id" element={<RestaurantUpdate/>}/>
          <Route path="/login" element={<RestaurantLogin/>} />
          <Route path="/registration" element={<RestaurantRegistration/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
