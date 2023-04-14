import {getCharacters} from 'crearla' 
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


const Characters = () => {
    const dispatch = useDispatch()
    const character = useSelector(state => state.characters)
    useEffect(() =>{
        dispatch(getCharacters())
    }, [])
    return (
        <div>

        </div>
    )
}
export default Characters