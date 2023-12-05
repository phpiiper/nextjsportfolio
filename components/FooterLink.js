export default function FooterLink({linkData}){
    let data;
    if (linkData.type === "a"){
        if (linkData.children){
            data = <a target="_blank" aria-label={linkData.label} href={linkData.href}><i className={linkData.children[0].className}/></a>
        } else {
            data = <a aria-label={linkData.label} href={linkData.href}><span>{linkData.text}</span></a>
        }
    } else if (linkData.type === "i"){
        data = <i className={linkData.className}></i>
    }else if (linkData.type === "button"){
        data = <button type={linkData.type} id={linkData.id}>
            {linkData.children.map((x) => (
                <FooterLink key={x.href+x.text} linkData={x} />
            ))}
        </button>
    } else if (linkData.type === "div"){
        data = <div className={linkData.className} id={linkData.id}>
            {linkData.children.map(x => (
                <FooterLink key={x.href+x.text} linkData={x} />
            ))}
        </div>
    } else {data = <a></a>}
    // data {aria-label, href, text}
    return <>
        {data}
    </>
}