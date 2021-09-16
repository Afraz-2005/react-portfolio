import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import style from "./App.module.css";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={style.App}>
      {loading ? (
        <div
          className={style.spinnerContainer}
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="spinner">
            <HashLoader color={"FF2442"} loading={loading} size={150} />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/skills" component={Skill} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
            {/* <Footer/> */}
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
