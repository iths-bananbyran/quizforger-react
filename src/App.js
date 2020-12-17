import './App.scss';
import Header from'./components/Header';
import Startpage from './components/Startpage';
import Allaquiz from './components/Allaquiz';
import Omoss from './components/Omoss';
import Quizpage from './components/Quizpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route path='/alla-quiz'><Allaquiz /></Route>
              <Route path='/om-oss'><Omoss /></Route>
              <Route path='/quiz/:id' component={Quizpage}></Route>
              <Route path='/'><Startpage /></Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
