export default function WorkCard({prop}){
    return(
        <div className="grid grid-cols-3 text-left p-3 gap-3">
            <h1 className="text-xl col-span-3 font-bold border-b-2">{prop.title}</h1>

            <h2 className="col-span-2 font-bold">{prop.place}</h2>
            <p className="font-semibold border-l-2 pl-2">{prop.time}</p>

            <p className="col-span-3">{prop.description}</p>
        </div>
    )
}