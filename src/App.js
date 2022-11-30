import './App.css';
import AboutUs from "./component/AboutUs";
import ContactsPage from "./page/ContactsPage";
import PartfolioPage from "./page/Partfolio/PartfolioPage";

function App() {
  return (
    <div className="App">
      <ContactsPage/>
        <PartfolioPage/>
    <AboutUs/>
    </div>
  );
}

export default App;
