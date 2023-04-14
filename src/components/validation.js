// el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
// el nombre de usuario no puede estar vacío.
// el nombre de usuario no puede tener más de 35 caracteres.
// PASSWORD

// la contraseña tiene que tener al menos un número.
// la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
// ¡No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede qued


const validate = (userData, errors, setErrors) => {
  
    if(!/^(?=.*\d)[A-Za-z\d]{6,10}$/.test(userData.password)) {
        setErrors({
            ...errors,
            password: 'Contraseña no valida'})
    } else {errors.password = ''}
    
    if(!userData.email){
        setErrors({
            ...errors,
            email: 'Escriba un email'
        })
    } else if (userData.email.length > 35){
        setErrors({
            ...errors,
            email: 'Exceso de caracteres'
        })
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)){
        setErrors({
            ...errors,
            email: 'El email no es valido'
        })
    } else {errors.email = ''}
    
}

// const validate2 = (userData) =>{
//     const errors= {};

//     if(!/\S+@\S+\.\S+/.test(userData.email)){
//         errors.email = 'El email ingresado no es valido'
//     }
// }


export default validate;