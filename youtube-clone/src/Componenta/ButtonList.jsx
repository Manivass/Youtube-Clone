import Buttoncards from "./Buttoncards";

const ButtonList = () => {
    return (
        <div className="flex overflow-x-auto whitespace-nowrap gap-3 no-scrollbar">
            <Buttoncards name="All" />
            <Buttoncards name="Music"/>
            <Buttoncards name="Web Development"/>
            <Buttoncards name="Live"/>
            <Buttoncards name="Podcasts"/>
            <Buttoncards name="Computer Programming"/>
            <Buttoncards name="Tamil Cinema"/>
            <Buttoncards name="Mixes"/>
            <Buttoncards name="Recuriment"/>
            <Buttoncards name="Cricket"/>
            <Buttoncards name="Bigg Boss"/>
            <Buttoncards name="Smartphones"/>
            
            
            
        </div>
    )
}
export default ButtonList ;