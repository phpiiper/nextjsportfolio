export default function ProjectLink({LinkData}){

return <div className="linkList-tag">
    <a aria-label={"Link to View" + LinkData.name} target="_blank" href={LinkData.link}>
        {LinkData.name}
    </a>
</div>

}
