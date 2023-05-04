import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Settings } from "./components/Settings/Settings";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path= '/' element = {<Home/>}/>
          <Route path= '/about' element = {<About/>}/>
          <Route path= '/contact' element = {<Contact/>}/>
          <Route path= '/settings' element = {<Settings/>}/>
        </Routes>
    </>
  );
}

export default App;
