import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css"
import HomePage from "./page/home/home.page"
import THome from "./page/home/THome"
import EcomeHomePage from "./page/home/home"
const rootElem = document.getElementById('root')!
let reactElem = createRoot(rootElem)

// createRoot(document.getElementById('root')!).render()



reactElem.render(
    <StrictMode>
    {/* <HomePage /> */}
    {/* <THome /> */}
    <EcomeHomePage/>
    </StrictMode>
)