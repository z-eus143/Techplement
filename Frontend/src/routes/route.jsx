import Home from "../pages/home";
import Quote from "../pages/quote";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import NewQuote from "../pages/newQuote";
import Display from "../components/displayquote";
export default function PageRoute() {
    return(
        <>
    <BrowserRouter>
     <Routes>
      <Route exact
      path="/" element={<Home/>}/>
      <Route
      path="/Quote" element={<Quote/>}/>
     <Route
      path="/SignIn" element={<SignIn/>}/>
      <Route
      path="/SignUp" element={<SignUp/>}/>
      <Route
      path="/Newquote" element={<NewQuote/>}/>
      <Route
      path="/displayquote" element={<Display/>}/>
    </Routes>
    </BrowserRouter>
        </>
    )
}