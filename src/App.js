// import './App.css';
// import LoginPage from './components/Login/Login';
// import Home from './pages/Home/Home';
// import {Routes, Route} from 'react-router-dom';

// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route exact path='/' element={<Home/>}/>
//         <Route exact path='/login' element={<LoginPage/>}/>
//       </Routes>
//     </>
//   );
// }

// export default App;

import './App.css';
import LoginPage from './components/Login/Login';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
