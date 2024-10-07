export default function LangLevel({lang}){
    let levelText = ""

    const RenderLevel = (level) => {
        switch(lang.level){
            case 0:
                return(
                    <p>Native</p>
                )
            case 1:
                return(
                    <p>A1</p>
                )
            case 2:
                return(
                    <p>A1 - A2</p>
                )
            case 3:
                return(
                    <p>A1 - A2 - B1</p>
                )
            case 4:
                return(
                    <p>A1 - A2 - B1 - B2</p>
                )
            case 5:
                return(
                    <p>A1 - A2 - B1 - B2 - C1 - C2</p>
                )
            case 6:
                return(
                    <p>A1 - A2 - B1 - B2 - C1 - C2</p>
                )
        }
    }

    return(
        <div className="container mx-auto grid grid-cols-2 text-left">
            <p>{lang.name}</p>
            <RenderLevel level={lang.level}/>
        </div>
    )
}