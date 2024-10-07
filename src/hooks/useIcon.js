import { useContext } from "react";
import IconContext from "../context/IconProvider";

const useIcon = () => {
    return useContext(IconContext)
}

export default useIcon