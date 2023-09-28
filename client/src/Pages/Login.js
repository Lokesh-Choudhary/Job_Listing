import { LoginForm } from "../Components/Login/Login"
import LoginImage from '../assets/LoginImage.jpg'
export const Login = ()=>{
    return (
        <div style={{display:"flex"}}>
            <LoginForm/>
            <img style={{maxHeight:"100vh", width:"50vw"}}  src={LoginImage} alt="img"/>
        </div>
    )
}
