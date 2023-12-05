import FooterCol from './FooterCol'

/*
<div className="footer-col">
    <a aria-label="Go to this page's Page section" href="#home"><span>Page</span></a>
    <a aria-label="Go to this page's About section" href="#about"><span>About</span></a>
    <a aria-label="Go to this page's Projects section" href="#projects"><span>Projects</span></a>
</div>
*/


export default function Footer({ FooterList }) {
    return <footer id="footer">
        {FooterList.map(x => <FooterCol key={JSON.stringify(x)} linkList={x}/>)}
    </footer>
}