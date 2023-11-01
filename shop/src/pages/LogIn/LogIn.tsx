import {FC,useEffect} from 'react'
import "./LogIn.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from "yup" 
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { useActions } from '../../hooks/useActions'
import { useDispatch } from 'react-redux'
import { currentUserType } from '../../types/currentUser'


const LogIn:FC = () =>{
  const {users,loading,error} = useTypedSelector(state =>state.usersGet);
  const {usersGET} = useActions();
  const dispatch = useDispatch();
  // const {currentUserGet} = useActions()
  useEffect(() => {
    usersGET(); 
  }, [])
  

  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    email:yup.string().typeError("petq e lini tox").email("partadir e"),
    password:yup.string().typeError("petq e lini tox").required("partadir e"),
});
  return (
    <Formik 
      initialValues={{
        email:"",
        password:"",
    }}
    onSubmit={(values)=> {
      const currentUser =  users.find(el => el.email === values.email && el.password === values.password)
      
      if(currentUser){
        
        dispatch({
          type:currentUserType.getCurrentUser,
          payload:currentUser
        });

        localStorage.setItem('currentUser',JSON.stringify(currentUser));
        // currentUserGet(currentUser,currentUser.card);
        navigate('/home');
      }
      else{
        // console.log();
        
      }
      
    }}
    validateOnBlur
    validationSchema={validationSchema}
    >
    {({values,errors,touched,handleChange,handleBlur,isValid,handleSubmit,dirty}) => (
      <div className='cont signin'>
          <div className='regForm' id='login'>
              <form  onSubmit={handleSubmit}>
                  <h1 className='login-form ' id='chk'>Login</h1>
                  <label className='email' htmlFor='email'>Email</label>

                  <input 
                      type="email" 
                      name='email'
                      onChange={handleChange} 
                      onBlur={handleBlur} 
                  />
                  {touched.email && errors.email && <p  style={{
                        color:"red"
                    }}>{errors.email}</p>}
                  <label htmlFor='password'>Password</label>
                  <input 
                    type="password" 
                    name='password'
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                  />
                  {touched.password && errors.password && <p  style={{
                        color:"red"
                    }}>{errors.password}</p>}


                  <button type='submit'> Login</button>
                  <div className="login-form">
                      <span>If you haven't an account <NavLink to="/">SignIn</NavLink></span>
                  </div>
              </form>
          </div>
      </div>
    )}
    </Formik>
  )
}

export default LogIn