import "./footer.css";


function FoooterLInks(){
    return(
        <div className="footer-links">
        <ul>
            <li>Meta</li>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Help</li>
            <li>API</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Top Accounts</li>
            <li>Locations</li>
            <li>Instagram Lite</li>
            <li>Contact Uploading & Non-Users</li>
        </ul>
    </div>
    )
}

function FooterLinkTwo(){
    return(
        <div className="footer-links-2">
            <ul>
                <li><select>
                    <option>English</option>
                    </select></li>
                <li>© 2023 Instagram from Meta</li>
            </ul>
        </div>
    )
}

function Footer(){
    return(
        <footer>
<div className="footer-margin">
  <FoooterLInks></FoooterLInks>
  <FooterLinkTwo></FooterLinkTwo>
</div>
        </footer>
    )
}

export default Footer;