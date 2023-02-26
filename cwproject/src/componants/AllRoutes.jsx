import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Makeup from "../pages/Makeup"
import Harecare from "../pages/Harecare";
import Skincare from "../pages/Skincare";
import Sanitizingcare from "../pages/Sanitizingcare";
import Collection from "../pages/Collection";
import Rewards from "../pages/Rewards";
import Selflove from "../pages/Selflove";
import Offres from "../pages/Offres";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllDetails from "../pages/AllDetails";
import Cart from "../pages/Cart";
export default function AllRoutes(){
    return <Routes>
        <Route path = "/" element = {<Home />}></Route>
        <Route path = "/makeup" element = {<Makeup />}></Route>
        <Route path =  "/harecare" element = {<Harecare />} />
        <Route path =  "/skincare" element = {<Skincare />} />
        <Route path =  "/sanitizingcare" element = {<Sanitizingcare />} />
        <Route path =  "/collectios" element = {<Collection />} />
        <Route path =  "/rewards" element = {<Rewards />} />
        <Route path =  "/selflove" element = {<Selflove />} />
        <Route path =  "/offres" element = {<Offres />} />
        <Route path =  "/login" element = {<Login />} />
        <Route path =  "/signup" element = {<SignUp />} />
        <Route path = "/alldetails/:id" element = {<AllDetails />} />
        <Route path = "/cart/:id1" element = {<Cart />} />

    </Routes>
}
