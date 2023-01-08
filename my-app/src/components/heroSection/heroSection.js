import "./heroSection.css";
import profile from "../../Assests/images/profileImage.jpg"

function HeroProfile(){
    return(
        <div className="hero-flex-1">
            <div className="hero-img-margin">
            <div className="hero-img">
              <img src={profile}></img>
            </div>
            </div>
        </div>
    )
}

function HeroDetailsSecOne(){
    return(
        <div className="hero-details-sec-one">
           <div>
           <p>virat.kohli</p>
           <img src="images/verified.png"/>
           </div>
            <ul>
                <li>
                    Message
                </li>
                <li>
                <svg aria-label="Following" class="_ab6-" color="#262626" fill="#262626" height="15" role="img" viewBox="0 0 95.28 70.03" width="20"><path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0Zm19-50.8A19 19 0 1 1 64.32 0a19.05 19.05 0 0 1 18.91 19.18ZM14.76 50.01a5 5 0 0 1-3.37-1.31L.81 39.09a2.5 2.5 0 0 1-.16-3.52l3.39-3.7a2.49 2.49 0 0 1 3.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 0 1 3.52 0l3.53 3.58a2.49 2.49 0 0 1 0 3.52L18.23 48.57a5 5 0 0 1-3.47 1.44Z"></path></svg>
                </li>
                <li>
                <svg aria-label="Down chevron icon" class="_ab6-" color="#000000" fill="#000000" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path></svg>
                </li>
                <li>
                <svg aria-label="Options" class="_ab6-" color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                </li>
            </ul>
        </div>
    )
}

function HeroSectionFolowers(){
    return(
        <div className="herosection-followers">
 <ul>
    <li><span>1,492 </span> Posts</li>
    <li><span>230M </span> followers</li>
    <li><span>262 </span> following</li>
 </ul>
        </div>
    )
}
function HeroSectionAdd(){
    return(
       
        <div className="hero-section-add">
    <p>Virat Kohli</p>
    <p>Carpediem!</p>
    <p><a href="https://l.instagram.com/?u=http%3A%2F%2Fone8.com%2F&e=ATOhFzdHuRUFB94UqjJsv_HjRlfNVXsIl8xB0BPpGX8T3prR8Lxrc4U44EjceBYGNcAyIKcnufxp5j6fgHowTt954XgaAPcyESTcKw">one8.com</a></p>
        </div>
    )
}

function HeroSectionFlowwed(){
    return(
        <div className="hero-section-footer">
         <p>Followed by <span>_p.r.a.s.a.n.t.h_14, ravi151998, itz_.annaafi</span> + 51 more
</p>
        </div>
    )
}

function HeroSection(){
    return(
        <div className="hero-section">
            <div className="hero-section-margin">
              <div className="hero-flex-box">
              <HeroProfile></HeroProfile>
              <div className="hero-details">
               <HeroDetailsSecOne></HeroDetailsSecOne>
                <HeroSectionFolowers></HeroSectionFolowers>
                <HeroSectionAdd></HeroSectionAdd>
                <HeroSectionFlowwed></HeroSectionFlowwed>
              </div>
              </div>
            </div>
        </div>
    )
}

export default HeroSection;