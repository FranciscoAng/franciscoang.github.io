import { createContext, useState } from "react";
import { info as infoDB } from "../assets/data";

const InfoContext = createContext();

const InfoProvider = ({children}) => {
    const [info, setInfo] = useState(infoDB)

    return(
        <InfoContext.Provider
        value={{
            info
        }}
        >{children}</InfoContext.Provider>
    )
}

export{
    InfoProvider
}
export default InfoContext