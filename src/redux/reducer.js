import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";


const initialState = {
    myFavorites: [],
    allCharactersFav: []
}


const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, payload],
                allCharactersFav: [...state.allCharactersFav, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== payload),//nos quedamos con los personajes que seas diferentes a payload
                allCharactersFav: state.myFavorites.filter(character => character.id !== payload)
            }
        case FILTER:
            // if (payload === 'allCharacters') return 
            const allCharactersFilter = state.allCharactersFav.filter(
                character => character.gender === payload
            )
            return {
                ...state,
                myFavorites:
                payload === 'allCharacters'
                ? [...state.allCharactersFav]
                : allCharactersFilter

                
                
            } 
        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav] 
            return {
                ...state,
                myFavorites: 
                         payload === 'A'
                         ? allCharactersFavCopy.sort((a, b) => a.id - b.id)//el id de a va a ser menor que el de b
                         : allCharactersFavCopy.sort((a, b) => b.id - a.id)//el id de b sea menor que el id de a
            }        
            

        default: return {...state}
    }

}

export default reducer;