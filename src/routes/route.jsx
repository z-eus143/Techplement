import Home from "../pages/home";
import Quote from "../pages/quote";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import SavedCardview from "../pages/saved";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import NewQuote from "../pages/newQuote";
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
      path="/SavedQuote" element={<SavedCardview/>}/>
     <Route
      path="/SignIn" element={<SignIn/>}/>
      <Route
      path="/SignUp" element={<SignUp/>}/>
      <Route
      path="/Newquote" element={<NewQuote/>}/>
    </Routes>
    </BrowserRouter>
        </>
    )
}