export default function ResumeEducation({Education}){
    return <div className="resume-education-div">
        <h3 className="resume-education-school">
            {Education.name}
        </h3>
        <p className="resume-education-year">{Education.year}</p>
        <p className="resume-education-major">
            {Education.major}
        </p>
        <p className="resume-education-status">{Education.status}</p>
        <ul>
            {Education.list.map(x => <li key={"Edu-"+x.text}>{x.text}</li>)}
        </ul>
    </div>
}
