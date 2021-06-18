import React from "react";
import Navbar from "./fixed components/Navbar";
import Footbar from "./fixed components/Footbar";
import Sidebar from "./fixed components/Sidebar";
import { useMediaQuery } from 'react-responsive'
import Explorebar from "./fixed components/Explorebar";
import Filebarpc from "./fixed components/Filebarpc";
import Sidebarmob from "./fixed components/Sidebarmob";
import Home from "./pages/Home"

function App() {
      const lap = useMediaQuery({query: '(min-device-width: 930px)'})
      const mob = useMediaQuery({ query: '(max-device-width: 929px)' })
  return (
    <div>
      <Navbar/>
      {lap && <Sidebar/> }
      {mob && <Sidebarmob/> }
      {lap && <Explorebar/> }
      {lap && <Filebarpc/> }
      {lap && <Home/>}
      <Footbar/>
    </div>
  );
}

export default App;
