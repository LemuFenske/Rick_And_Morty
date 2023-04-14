import Card from "../Card/Card"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"
import style from './Favorite.module.css'

const Favorites = ({myFavorites}) =>{

    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return (
        <div className={style.favorites}>
            <div className={style.selectores}>
        <select className={style.selector} onChange={handleOrder} name="" id="">
            <option className={style.options} value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>
        <select className={style.selector} onChange={handleFilter} name="" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters"> All Characters</option>
        </select>
        </div>
        <div className={style.cards}>
        {
            myFavorites?.map (fav => {
                return (
                    <Card 
                       key={fav.id}
                       id={fav.id}
                       name={fav.name}
                       species={fav.species}
                       gender={fav.geder}
                       image = {fav.image}
                       onClose={fav.onClose}
                    />
                )
            })
        }</div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
) (Favorites);