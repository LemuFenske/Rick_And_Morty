
// Un estado local llamado "access" que se inicialice en false.
// Una variable llamada "EMAIL", y que sea igual a tu email.
// Una variable "PASSWORD", y que sea igual a una contraseña.


import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect} from 'react';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail/Datail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';


const urlBase = 'https://be-a-rym.up.railway.app/api/character'
const apiKey = '86162ebbd8e5.f1494fb9caa8aac5d0d3'


const EMAIL = 'lemueljosias.03@gmail.com' 
const PASSWORD = 'lemu1234'


function App() {
   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   
   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   const onSearch = (id) => {
      axios(`${urlBase}/${id}?key=${apiKey}`)
      .then (response => response.data)
      .then(( data ) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);

         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id) => {
      const characterFiltered = characters.filter(character => character.id !== id)
      
      setCharacters(characterFiltered)
   }
      
   return (
      <div className='App'>
      {location.pathname !== '/' && <Nav onSearch = {onSearch} access= {access} setAccess={setAccess}/>}
      <Routes>
         <Route path='/' element={<Form login = {login}/>}></Route>
         <Route path = '/home' element={<Cards characters={characters} onClose ={onClose} />}/>
         <Route path = '/about' element= {<About/>}/>
         <Route path = '/detail/:id' element={<Detail/>}/>
         <Route path='/favorites' element= {<Favorites/>}/>
      </Routes>
      </div>
   );
}

export default App;
// {/* <div className='App'>
//          <Nav onSearch = {onSearch}/>
//          <Cards characters={characters} onClose ={onClose} />
//       </div> */}
//    );