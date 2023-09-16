import Content from "./components/Content";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="mainContainer">
      <>
        <Header />
      </>
      <>
        <Content />
      </>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
