import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Skill from './pages/Skill';

function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Navbar /> */}
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/skills" component={Skill}/>
            <Route component={Error}/>
           </Switch>
          {/* <Footer/> */}
        </div> 
      </BrowserRouter>
  );
}

export default App;
