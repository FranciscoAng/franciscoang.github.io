import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import useIcon from "../hooks/useIcon";

import profilePhoto from "../assets/angeles(1).jpg"
import EducationCard from "../components/EducationCard";
import WorkCard from "../components/WorkCard";
import LogoCloud from "../components/LogoCloud";
import LangLevel from "../components/LangLevel";

export default function Start() {

    //Use of translations
    const [t, i18n, ready] = useTranslation("global")
    //Icons from context
    const {Icon} = useIcon()

    //Return loading if not ready
    if (!ready) return "loading translations..."

    //Retrieve info (as object instead of string)
    const educations = t("education", { returnObjects: true })
    const jobs = t("work", { returnObjects: true })
    const accomplishments = t("accomplishments", { returnObjects: true })
    const tech = t("techSkills", { returnObjects: true })
    const langs = t("langSkills", { returnObjects: true })

    return(
        <> 
        <Helmet>
            <title>Dev. Francisco Angeles</title>
            <body className="bg-gray-200"></body>
        </Helmet>

        <div className="container mx-auto bg-gray-50 p-5 border-b shadow gap-5 md:gap-10 lg:gap-20 flex flex-col md:flex-row items-center rounded">
            <img src={profilePhoto} className="object-cover rounded-full w-full md:w-1/4"/>
            <div className="w-auto text-left font-sans">
                <h1 className="text-4xl font-black">Francisco Javier Angeles Reyes</h1>
                <h2 className="text-3xl font-bold">{t("intro.title")}</h2>
                <p className="my-3">{t("intro.text")}</p>

                <div className="container mx-auto grid gap-2 grid-cols-1 md:grid-cols-2">
                    <p className="flex gap-2 items-center">
                        <Icon icon="email" className="size-4"/>
                        <a href="mailto:fcoangeles98@gmail.com">fcoangeles98@gmail.com</a>
                    </p>
                    <p className="flex gap-2 items-center">
                        <Icon icon="location" className="size-4"/>
                        <a>Lauf a.d Pegnitz, Germany</a>
                    </p>
                    <p className="flex gap-2 items-center">
                        <Icon icon="linkedin" className="size-4"/>
                        <a href="https://www.linkedin.com/in/fcoangeles/">/fcoangeles</a>
                    </p>
                    <p className="flex gap-2 items-center">
                        <Icon icon="github" className="size-4"/>
                        <a href="https://github.com/FranciscoAng">FranciscoAng</a>
                    </p>
                </div>
            </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-around">
            <div className="bg-white rounded m-2">
                <h2 className="text-2xl font-extrabold uppercase text-left mt-10 px-5">{t("general.education")}</h2>
                {educations.map((education, index)=>(
                    <EducationCard key={index} prop={education}/>
                ))}
            </div>

            <div className="bg-white rounded m-2">
                <h2 className="text-2xl font-extrabold uppercase text-left mt-10 px-5">{t("general.work")}</h2>
                {jobs.map((education, index)=>(
                    <WorkCard key={index} prop={education}/>
                ))}
            </div>

            <div className="bg-white rounded m-2">
                <h2 className="text-2xl font-extrabold uppercase text-left mt-10 px-5">{t("general.accomplishments")}</h2>
                {accomplishments.map((education, index)=>(
                    <WorkCard key={index} prop={education}/>
                ))}
            </div>
        </div>

        <LogoCloud list={tech} title={t("general.techSkills")}>
            {tech.map((skill,index)=>(
                <Icon icon={skill.icon} className="size-10 fill-slate-800"/>
            ))}
        </LogoCloud>

        <div className="container mx-auto m-2 rounded bg-white px-5 py-1">
            <h1 className="text-2xl font-extrabold uppercase text-left px-5 mt-10">{t("general.languages")}</h1>
            <div className="m-5 justify-between">
                {langs.map((language, index)=>(
                    <LangLevel lang={language}/>
                ))}
            </div>
        </div>
        </>
    )
}