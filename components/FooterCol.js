import FooterLink from './FooterLink'
export default function FooterCol({linkList}){

    return <div className="footer-col">
        {linkList.map((x) => {return <FooterLink key={JSON.stringify(x)} linkData={x} />})}
    </div>
}