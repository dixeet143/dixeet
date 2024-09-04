import Tebla from "./ADD/Tebla";
import { Route, Routes } from "react-router-dom";

import Whatsapp from "./whatsapp/Whatsapp"
import Chatlist from "./whatsapp/Chatlist.jsx";





function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Whatsapp />} />

        <Route path="/Chatlist" element={<Chatlist />} />

        <Route path="/Tebla" element={<Tebla />} />


      </Routes>


    </>
  );
}

export default App;
