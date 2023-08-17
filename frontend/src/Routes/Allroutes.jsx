import { Route, Routes } from "react-router-dom"

import { CodeConverter} from "../Pages/Codeconverter"
import { Home } from "../Pages/Home"





export const Allroute=()=>{
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/converter" element={<CodeConverter/>}/>
        
    </Routes>
}