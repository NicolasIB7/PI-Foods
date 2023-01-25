import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing= ()=>{
    return(
    <>
 
        <div className={style.container}>
            
            
            <Link to="/home" className={style.animatedword}>
                INGRESAR
                </Link>
            
        </div>
    
    
    </>
    )
}

export default Landing;