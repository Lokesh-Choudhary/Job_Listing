import {RegisterForm} from '../Components/Register/Register'
import LoginImage from '../assets/LoginImage.jpg'

export const Register = ()=>{
    return (
        <>
        <div style={{display:"flex"}}>
            <RegisterForm/>
            <img style={{maxHeight:"100vh", width:"50vw"}}  src={LoginImage} alt='img'/>
        </div>
        </>
    )
}