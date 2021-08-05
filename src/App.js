import './style/style.css'
import './style/responsive.css'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Videos from './pages/Videos';
import { ContextPeovider } from './context';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <ContextPeovider>
     <Router>
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route exact path='/post'>
           <Blog/>
         </Route>
         <Route exact path='/post/:slug'>
           <SinglePost/>
         </Route>
         <Route exact path='/video'>
           <Videos/>
         </Route>
       </Switch>
     </Router>
    </ContextPeovider>
  );
}

export default App;
