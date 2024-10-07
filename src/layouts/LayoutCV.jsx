import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useIcon from "../hooks/useIcon";

export default function LayoutCV() {

    const [t, i18n] = useTranslation("global")

    const {Icon} = useIcon()

    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang)
    }

    return(
        <>
        <header className="p-5 border-b">
            <div className="container mx-auto flex justify-between items-center">
                <h1>
                    Francisco Angeles
                </h1>
                
                <div className="inline-flex items-center font-bold uppercase bg-white rounded">
                    <button
                        onClick={()=>handleChangeLang("en")}
                        className="py-1 px-1.5 text-gray-600 text-sm hover:bg-slate-300 rounded-l border-b">EN</button>
                    <button
                        onClick={()=>handleChangeLang("es")}
                        className="py-1 px-2 text-gray-600 text-sm hover:bg-slate-300 border-b">ES</button>
                    <button
                        onClick={()=>handleChangeLang("de")}
                        className="py-1 px-1.5 text-gray-600 text-sm hover:bg-slate-300 rounded-r border-b">DE</button>

                    <Icon icon="globe" className="m-1 fill-gray-600 size-3 mx-2"/>
                </div>
            </div>
        </header>
        
        <Outlet/>
        </>
    )
}