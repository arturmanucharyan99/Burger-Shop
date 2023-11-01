import { Formik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup" 
import "./SignIn.css"
import {FC} from "react";
import LogIn from "../LogIn/LogIn";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";


const  SignIn:FC =({})=>{
    const validationSchema = yup.object().shape({
        username:yup.string().typeError("petq e lini tox").required("partadir e"),
        email:yup.string().typeError("petq e lini tox").email("partadir e"),
        password:yup.string().typeError("petq e lini tox").required("partadir e"),
        confirmPassword:yup.string().typeError("petq e lini tox").oneOf([yup.ref("password")], "sxal"),
    })
    const navigate = useNavigate();
    const {userPost} = useActions();
    const {error,loading,user} = useTypedSelector(state => state.userPost)
    return(
        <Formik 
        initialValues={{
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
        }}
        
        onSubmit={(values)=> {
            
           try {
            
                userPost(values);
                navigate('/login');
           } catch (error) {
                console.log(error);
            
           }

        }}
        validateOnBlur
        validationSchema={validationSchema}
        >
        {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
            <div className="cont signin">
            <div className="regForm">
                <div className="sign-up"> 
                <form  onSubmit={handleSubmit} method="post">
                    {/* {% csrf_token %} */}
                    <h1  className="title-form" >Sign-In</h1 >
                        <label >username</label>   
                        <input type={"text"} 
                            name="username" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.username} 
                            placeholder=""/>
                    {touched.username && errors.username && <p  style={{
                        color:"red"
                    }}>{errors.username}</p>}

                        


                        <label className="email">email</label>    
                        <input type={"email"} 
                            name="email" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.email} 
                            placeholder=""/>
                        {touched.email && errors.email && <p  style={{
                            color:"red"
                        }}>{errors.email}</p>}

                        
                        <label>password</label>     
                        <input type={"text"} 
                            name="password" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={values.password} 
                            placeholder=""/>
                        {touched.password && errors.password && <p  style={{
                            color:"red"
                        }}>{errors.password}</p>}


                        <label className="confirmPassword">confirmPassword</label>  
                        <input type={"text"} 
                            name="confirmPassword"
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            value={values.confirmPassword} 
                            placeholder=""/>


                        {touched.confirmPassword && errors.confirmPassword && <p style={{
                            color:"red"
                        }}>{errors.confirmPassword}</p>}

                        <button type="submit" disabled={!isValid && !dirty}>Sign-In</button>

                    <div className="login-form">
                        <span>If you have an account <NavLink to="/login">Login</NavLink></span>
                    </div>
                </form>
                </div>
            </div>
            </div>
        )}
            
            
        </Formik>
    )
}

export default SignIn