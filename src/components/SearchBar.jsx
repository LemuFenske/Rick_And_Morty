import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('')
   
   const handleChange = (event) => {
      setId(event.target.value)//esto es igual al valor del input, es lo que se recibe por el input
      console.log(event.target.value);
      
   }//cuando haya un cambio, ejecuta handleChange
   
   const handleSearch = () => {
      onSearch(id)
      setId('')
   }

   console.log(onSearch);
   return (
      <div>
         <input type='search' value= {id} onChange = {handleChange}/>
         <button onClick={handleSearch}>Agregar</button>
      </div>
   );
}
