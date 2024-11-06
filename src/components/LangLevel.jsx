export default function LangLevel({lang}){
    let levelText = ""

    const RenderLevel = (level) => {
        switch(lang.level){
            case 0:
                return(
                    <b>Native</b>
                )
            case 1:
                return(
                    <b>A1</b>
                )
            case 2:
                return(
                    <p>A1 - <b>A2</b></p>
                )
            case 3:
                return(
                    <p>A1 - A2 - <b>B1</b></p>
                )
            case 4:
                return(
                    <p>A1 - A2 - B1 - <b>B2</b></p>
                )
            case 5:
                return(
                    <p>A1 - A2 - B1 - B2 - <b>C1</b></p>
                )
            case 6:
                return(
                    <p>A1 - A2 - B1 - B2 - C1 - <b>C2</b></p>
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