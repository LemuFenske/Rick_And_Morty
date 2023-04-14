import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   
   const handleChange = (event) => {
      setId(event.target.value)//esto es igual al valor del input, es lo que se recibe por el input
      
      
   }//cuando haya un cambio, ejecuta handleChange
   
   const handleSearch = () => {
      onSearch(id)
      setId('')
   }

   
   return (
      <div className={style.searchBar}>
         <input type='search' value= {id} onChange = {handleChange} className={style.input}/>
         <button onClick={handleSearch} className={style.agregar}>Agregar</button>
      </div>
   );
}
