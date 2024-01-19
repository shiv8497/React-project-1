
import { BrowserRouter as Router ,  Routes , Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/footer";
import Contact from "./component/Contact";
import Services from "./component/services";


import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/color.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediapuaries.scss";




function App() {
  return (
    <Router >
       <Header/>
       
      <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/contact" element={<Contact/>}/>
           <Route path="/services" element={<Services/>}/>
      </Routes>

       <Footer/>
    </Router>
  );
}

export default App;
