import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Header from './components/Header'
import FooterCom from './components/Footer'
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/signin" element = {<SignIn />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<DashBoard />} />
        </Route>
        <Route path = "/projects" element = {<Projects />}/>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}
