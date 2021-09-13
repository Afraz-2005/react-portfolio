import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import style from './App.module.css';

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
        <div className={style.spinnerContainer} style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',}}>
          <div className='spinner'>
            <HashLoader color={"aqua"} loading={loading} size={150} />
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/skills" component={Skill} />
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
