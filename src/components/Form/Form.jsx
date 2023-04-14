import { useState } from "react";
import validate from "../validation";
import style from './Form.module.css'

const Form = ({login}) => {
  
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        validate({
            ...userData,
            [event.target.name]: event.target.value
        }, errors, setErrors)

        // setErrors(validate2 ({
        //     ...userData,
        //     [event.target.name]: event.target.value
        // }))
    }
    const handleOnSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }
    

    return (
        <form onSubmit={handleOnSubmit} className={style.formContainer}>
            <label htmlFor="email" >Email:</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange}/>
            <p className={style.errors}>{errors.email}</p>
            <label htmlFor="password" >Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            <p className={style.errors}>{errors.password}</p>
            <button className={style.submit}>Submit</button>
        </form>
    )
}
export default Form;