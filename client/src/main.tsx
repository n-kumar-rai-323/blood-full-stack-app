import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./assets/css/global.css"
import HomePage from "./page/home/home.page"
const rootElem = document.getElementById('root')!
let reactElem = createRoot(rootElem)

// createRoot(document.getElementById('root')!).render()



reactElem.render(
    <StrictMode>
    <HomePage />
    </StrictMode>
)