import React, { useState } from 'react'
import Home from "./pages/Home"
import Header from './components/Header'
import Basket from './pages/Basket'
import Spinner from "../src/assets/images/spinner.svg"
import Cards from "./components/Cards"


const App = () => {
    const [isDark,setIsDark] = useState(false)
    const [num,setNum] = useState(0)
    const [search,setSearch] = useState("")
   
    return (

        <>
            <Header setSearch = {setSearch} setIsDark = {setIsDark} isDark={isDark} num = {num}/>
            <Cards search = {search} isDark = {isDark} setNum = {setNum}/>    
        </>
    )
}

export default App