import axios from "axios";
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import style from './Detail.module.css'

const urlBase = 'https://be-a-rym.up.railway.app/api/character'
const apiKey = '86162ebbd8e5.f1494fb9caa8aac5d0d3'

const Detail = () => {
    const [character, setCharacter] = useState({})
    const {id} = useParams()//useParams nos retorna un objeto con una propiedad que sale de de la ruta en la que esta
                            //en aoo le puese que se iba a llamar id cuando puse /detail/:id
    
    useEffect(() => {
        axios(`${urlBase}/${id}?key=${apiKey}`)
        .then (response => response.data)
        .then(( data ) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     

     //algo ? si es true esto : si es false esto
     // el ? es como un if y los : son como un else
     //origin? va asi
     return (
        <div className={style.allInfo}>
         <div className={style.info}>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            </div>
            <img  className={style.img} src={character?.image} alt="" />
        </div>
    )
}

export default Detail;