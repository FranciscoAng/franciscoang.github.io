export default function LogoCloud({children, list, title}){
    return(
        <div className="container mx-auto m-2 rounded bg-white px-5 py-1">
            <h1 className="text-2xl font-extrabold uppercase text-left px-5 mt-10">{title}</h1>

            <div className="flex m-5 justify-between">
                <ul className="text-left list-disc">
                    {list.map((element, index)=>(
                        <li>{element.text}</li>
                    ))}
                </ul>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 lg:basis-2/3">{children}</div>
            </div>
        </div>
    )

}