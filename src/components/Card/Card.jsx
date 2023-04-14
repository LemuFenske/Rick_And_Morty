import {Link} from 'react-router-dom'
import style from './Card.module.css'
import { addFav, removeFav } from '../../redux/actions';
import {connect} from 'react-redux'
import { useState, useEffect } from "react";






function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () =>{
      if (isFav){
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose});//esto lo recbo alla  abajo
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (

      <div className={style.card}>
         {
         isFav ? (
         <button className={style.button2} onClick={handleFavorite}>❤️</button>
         ) : (
         <button className={style.button2} onClick={handleFavorite}>🤍</button>
         )
         }
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
         <h3 className={style.name}>{name}</h3>
         </Link>
         <div className={style.info}>
         <h2 className={style.specie}>{species}</h2>
         <h2 className={style.gender}>{gender}</h2>
         </div>
         <img className={style.img} src={image} alt='' />
         
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       addFav: (character) => {dispatch(addFav(character))},
       removeFav: (id) => {dispatch(removeFav(id))}
       //esto tambien lo recibo en props arriba
   }
}

export default connect(
  mapStateToProps,//me perimte acceder al estado global
   mapDispatchToProps//me permite desapachar acciones
)(Card);