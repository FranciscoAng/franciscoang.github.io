import { createContext } from "react"
import iconSprite from "../assets/iconSprite.svg"

const IconContext = createContext()

const IconProvider = ({children}) => {

    function Icon({icon,...props}){
        return(
        <svg {...props}>
            <use xlinkHref={`${iconSprite}#${icon}`}/>
        </svg>
    )}

    return(
        <IconContext.Provider
            value={{
                Icon
            }}>{children}</IconContext.Provider>
    )
}

export{
    IconProvider
}
export default IconContext