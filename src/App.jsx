/*/
omg this code is so bad if ur reading the source code im so sorry i tried by best :(
/*/
import React, { useRef, useEffect, useState} from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Ensure this path is correct
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {

AOS.init();

const [isMenuOpen, setIsMenuOpen] = useState(false);
const ulRef = useRef(null);
const headerRef = useRef(null);
const cloud1Ref = useRef(null);
const cloud2Ref = useRef(null);
const cloud3Ref = useRef(null);

  useEffect(() => {
    
    gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
      
    .fromTo(cloud1Ref.current, { y: 100 }, { y: -148 }, 0)
    .fromTo(cloud2Ref.current, { y: -150 }, { y: -500 }, 0)
    .fromTo(cloud3Ref.current, { y: -50 }, { y: -650 }, 0)
    
    const navItems = ulRef.current.childNodes;
    function animateNavIndicator(index) {
          const indicator = navItems[index].querySelector('.navIndicator');
          if (!indicator)
              return;

          indicator.classList.add('pop-up');
          setTimeout(() => {
              indicator.classList.remove('pop-up');
          }, 500); // Slightly less than the animation duration
      }

    navItems.forEach((li, index) => {
      li.addEventListener('click', () => animateNavIndicator(index));
    });

    return () => {
      navItems.forEach((li) => {
        li.removeEventListener('click', animateNavIndicator);
      });
    };
  }, []);

  return (
    <div className="website">
      <html>
      <div id="popup">
        <p>Please note that the site isn't developed for mobile devices</p>
        <button onClick={() => document.getElementById('popup').style.display='none'}>Close</button>
      </div>
        </html>
      <div className="App">
        <div className="whyGOD">
          <div className="navbar">
            <div className="elements">
              <a href = "#header"><img className="logo" src = "/img/catmech.PNG" width="70" height="66"></img></a>
              <a href = "#header" className="cringe"><p className = "number">19532</p></a>
              <a href = "https://www.youtube.com/@MechCat-Robotics/featured" target="_blank"><img className="yt" src = "/img/youtube.png" width="30" height="30"></img></a>
              <a href = "https://instagram.com/ftcmechcat?igshid=eGtma293NzdsNXpl" target="_blank"><img className="insta" src = "/img/Instagramlogo.png" width="28" height="28"></img></a>
            </div>
            
            <div data-aos="fade-up"
              data-aos-duration="500" className="menu">
              <div className="navCat">
                <ul ref={ulRef}>
                  <a href="#header"><li>Home<div className="navIndicator navIndicator-home"></div></li></a>
                  <a href="#about"><li>About Us<div className="navIndicator navIndicator-about"></div></li></a>
                  <a href="#Our-Robot"><li>Robot<div className="navIndicator navIndicator-robot"></div></li></a>
                  <a href="#The-Team"><li>The Team<div className="navIndicator navIndicator-the-team"></div></li></a>
                  <a href="#Sponsors"><li>Sponsors<div className="navIndicator navIndicator-sponsors"></div></li></a>
                  <a href="#ContactUs"><li>Contact Us<div className="navIndicator navIndicator-contact"></div></li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section data-aos="fade-up" className="hamburger-menu">
          <input 
            id="menu-toggle" 
            type="checkbox" 
            checked={isMenuOpen} 
            onChange={() => setIsMenuOpen(!isMenuOpen)} 
          />
          <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
          <ul className={`Menu ${isMenuOpen ? "show" : ""}`}>
            <a href="#header" onClick={() => setIsMenuOpen(false)}>
              <li>Home</li>
            </a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              <li>About Us</li>
            </a>
            <a href="#Our-Robot" onClick={() => setIsMenuOpen(false)}>
              <li>Robot</li>
            </a>
            <a href="#The-Team" onClick={() => setIsMenuOpen(false)}>
              <li>The Team</li>
            </a>
            <a href="#Sponsors" onClick={() => setIsMenuOpen(false)}>
              <li>Sponsors</li>
            </a>
            <a href="#ContactUs" onClick={() => setIsMenuOpen(false)}>
              <li>Contact Us</li>
            </a>
          </ul>
        </section>
        <div className="header" ref={headerRef} id="header">
          <p className="title" data-aos="fade-up"
            data-aos-duration="2000">MECHCAT</p>
  
          <a href="#about">
            <button className="cssbuttons-io" data-aos="fade-up"
              data-aos-duration="3000">
              <p className="b_about">About Us</p>
            </button>
          </a>
          <div data-aos="fade-up" data-aos-duration="750"  className="sponsorBanner">
            <p className="poweredBy">POWERED BY</p>
            <div className="Headerlogos">
              <div className="TDSAB">
                <img className="TDSB" height={80} src="/img/TDSAB.png"></img>
              </div>
              <div className="bethune">
                <img className="Bethune" height={83} src="/src/img/Bethune.png"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="Unoptimized">
          <div className="coolness">
            <div className="cloud1" ref={cloud1Ref}></div>
            <div className="cloud2" ref={cloud2Ref}></div>
            <div className="cloud3" ref={cloud3Ref}></div>
          </div>
          <div id="about" className="below">
            <div className="About-Us">
              <p data-aos="fade-up" data-aos-duration="1000" className="about">About Us</p>
              <div className="aboutSection">
                <p data-aos="fade-up" data-aos-duration="3000" className="aboutContent">MechCat is a Dr. Norman Bethune Collegiate Institute robotics team in the First Tech Challenge (FTC) competition. FTC is an international robotics event that challenges high school students to design, build, and program autonomous and driver-controlled robots to compete in annual themed challenges. MechCat started competing in 2021 and is entering its third season this year under completely new leadership. Based in Toronto, Canada, Team 19532's goal is to advance to Worlds while developing skills in STEM, teamwork, and problem-solving. Through competitions, MechCat strives to represent their school and community by setting an example as the best and inspiring others through our different feats, such as representing our school in different tournaments.</p>
    
                <div data-aos="fade-up" data-aos-duration="3000" className="aboutPhoto"></div>
              </div>
            </div>
  
            <div data-aos="fade-up" data-aos-duration="1550" className="Our-Robot" id="Our-Robot">
              <p data-aos="fade-up" data-aos-duration="2750"  className="robot">Our Robot</p>
            </div>
            <p data-aos="fade-up" data-aos-duration="750" className="ourRobotContent">A view of our work in progress bot</p>
            <div className="The-Team" id="The-Team">
              <div data-aos="fade-up" data-aos-duration="1200" className="TeamText">The Team</div>
              <div className="team-grid">
                <div className="TeamPhoto2" data-aos="flip-up" data-aos-duration="750"></div>
                <div className="TeamPhoto3" data-aos="flip-up" data-aos-duration="750"></div>
                <div className="TeamPhoto4" data-aos="flip-up"></div>
              </div>

              
              
              {/*<div class="Photos">
                <div class="team-member">
                  <img src="src/img/team/Kevin.png" data-aos="flip-up" class="team-photo"/>
                  <p class="member-description">Coder/Builder</p>
                </div>
                <div class="team-member">
                  <img src="Jefferson.png" data-aos="flip-up" class="team-photo"/>
                  <p class="member-description">Coder/Builder</p>
                </div>
                <div class="team-member">
                  <img src="Carl.png" data-aos="flip-up" class="team-photo"/>
                  <p class="member-description">Coder/Design</p>
                </div>
                <div class="team-member">
                  <img src="Kevin.png" data-aos="flip-up" class="team-photo"/>
                  <p class="member-description">Coder/Builder</p>
                </div>
                <div class="team-member">
                  <img src="Jefferson.png" data-aos="flip-up" class="team-photo"/>
                  <p class="member-description">Coder/Builder</p>
                </div>
                <div class="team-member">
                  <img src="Carl.png" data-aos="flip-up" class="team-photo"/>
                  <p class="member-description">Coder/Design</p>
                </div>
              </div>*/}
              <p className = "teamtext">
                On December 9th, MechCat participated in its first major competition at the Mississauga qualifier. Throughout the event, MechCat proved to be the strongest competitor, winning all nine games without losing a single match. As a result, we secured a spot in the FTC provincials competition while receiving the Innovate Award in addition to Winning Alliance Captain.
                <br /><br />
                The team will continue to strive further throughout its lifespan. Our goal for the provincials is to take it home and represent Canada in Worlds, the international competition. 
              </p>
            </div>
            
            <div className="SponsorSection" id="Sponsors">
              <div className="Sponsors" data-aos="fade-up" data-aos-duration="1200">Sponsors</div>
              <div className="sponsor-logos">
                {/* Repeat this `div` for each sponsor, replacing the `src` with the correct path to the sponsor's logo */}
                <div className="sponsor-logo" data-aos="flip-up" data-aos-duration="750">
                  <img src="img/Sponsors/CenithEnergy.png" alt="Sponsor Logo 1" />
                </div>
                <div className="sponsor-logo" data-aos="flip-up" data-aos-duration="750">
                  <img src="img/Sponsors/Sponsor1.png" alt="Sponsor Logo 2" />
                </div>
                <div className="sponsor-logo" data-aos="flip-up" data-aos-duration="750">
                  <img src="img/Sponsors/Sponsor2.png" alt="Sponsor Logo 3" />
                </div>
                <div className="sponsor-logo" data-aos="flip-down" data-aos-duration="750">
                  <img src="img/Sponsors/Sponsor3.png" alt="Sponsor Logo 4" />
                </div>
                <div className="sponsor-logo" data-aos="flip-down" data-aos-duration="750">
                  <img src="img/:3.png" alt="Sponsor Logo 5" />
                </div>
                <div className="sponsor-logo" data-aos="flip-down" data-aos-duration="750">
                  <img src="img/:3.png" alt="Sponsor Logo 6" />
                </div>
                {/* Add more sponsor logos as needed */}
              </div>
              <div className="Donate" data-aos="fade-up" data-aos-duration="2500">
              Want to sponsor us?
              </div>
              <div className="donateContent" data-aos="fade-up" data-aos-duration="1500">
                There are two current ways of sponsoring the team.<br /><br />

                <p className="A">A. Write and send a cheque to the school.</p>
                  
                  Use the address: 200 Fundy Bay Blvd, Scarborough, ON M1W 3G1 for mailing. The memo should be "Bethune CI Robotics", followed by our team name and team number, "MechCat 19532".
                <p className="B">B. Donate using SchoolCashOnline</p>
                1. Go to the <a className ="link" href = "https://tdsb.schoolcashonline.com/Fee/Details/457/153/false/true" target="_blank">TDSB Donation page</a><br />
                2. Enter the donation amount (CAD)<br />
                3. Select "Dr. Norman Bethune CI" as the school<br />
                4. Select "GENERAL" for Initiative<br />
                5. Select "Not a tribute gift"<br />
                6. In the "Message to School Board " text box, specify that the donation is for the robotics club and which team it is for<br />

                (e.g.
                "TDSB : Bethune CI Robotics.
                For team MechCat, 19532")<br />

                7. After you filled all the required options, click "Add to Cart", "Continue", then "Continue as guest"<br />
                8. Then, fill in all the information needed and follow the steps on the page. As stated on the website, a donation tax receipt will be emailed to you afterwards<br /><br />

                Check out our <a className ="link" href = "https://drive.google.com/file/d/1U189Hf2jGhCTBiCDf3FcImkHJ9P20YnP/view?usp=sharing" target="_blank">sponsorship package</a> for more details!
              </div>
            </div>
            
            <div className="ContactUs" id="ContactUs">
              <div className="contactText"data-aos="fade-up" data-aos-duration="1200">Contact Us</div>
              </div>
            <div className = "ContactUsContent">
              <div className="mapwrapper">
                <iframe className="googlemap" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.128145183073!2d-79.32496221195696!3d43.811701296565815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d391096f94c7%3A0xe8860b0ba7d1ad10!2sDr.%20Norman%20Bethune%20Collegiate%20Institute!5e0!3m2!1sen!2sca!4v1703189725256!5m2!1sen!2sca"
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className="socials">
              <br /><br />
              <p className="contextus" data-aos="fade-up" data-aos-duration="750">Curious about us or want to contact us?<br /><br /><br />
                <a href="mailto:ftcmechcat@gmail.com">
                  <div className="icon-text-pair">
                    <img className="icons" src="
                    /img/1011335_email_envelope_mail_message_send_icon.png" width="60" height="60" />
                    <span className="text">ftcmechcat@gmail.com</span>
                  </div>
                </a>
              <br />
                <a href = "https://instagram.com/ftcmechcat?igshid=eGtma293NzdsNXpl" target="_blank">
                <div className="icon-text-pair">
                  <img className="icons" src="/img/734395_instagram_media_online_photo_social_icon.png" width="60" height="60" />
                  <span className="text">@ftcmechcat</span>
                </div>
                </a>
                <br />

                <a href = "https://www.youtube.com/@MechCat-Robotics/featured" target="_blank">
                  <div className="icon-text-pair">
                    <img className="icons" src="/img/734362_media_online_social_tube_youtube_icon.png" width="60" height="60" />
                    <span className="text">@MechCat-Robotics</span>
                  </div>
                </a>
              </p>
              </div>
            </div>
          </div>
        </div>
  
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,900&display=swap');
        </style>
  
      </div>
    </div>
  )
}


