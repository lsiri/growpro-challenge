import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function BackToHomeButton({customText = "Volver al inicio"}) {
    return <Link to={"/"} 
    style={{
        textDecoration:"none",
        fontSize:"23px",
        border:"1px solid #FEFEFE",
        color:"#FEFEFE",
        padding: "10px"
    }}> { customText }</Link>
}