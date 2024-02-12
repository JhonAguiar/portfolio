import React, { useRef, useEffect } from 'react';
import './Home.css';
import { FaBars , FaX } from "react-icons/fa6";
import { FcClapperboard   } from "react-icons/fc";
import { ImGithub, ImInstagram, ImLinkedin } from "react-icons/im";
import { Link } from 'react-scroll';

import ProfilePhoto from '../assets/images/profile.jpg';
import trk from '../assets/images/trk.svg';

import progracol from '../assets/images/progracol.png';
import rv from '../assets/images/rv.png';
import buho from '../assets/images/buho.webp';
import colvatel from '../assets/images/Colvatel.png';
import correcol from '../assets/images/correcol.png';
import lisim from '../assets/images/Lisim.png';
import gml from '../assets/images/gml.jpg';
import asesoftware from '../assets/images/asesoftware.png';
import ethos from '../assets/images/ethos.jpg';
import cientocincuenta from '../assets/images/cientocincuenta.svg';
import global from '../assets/images/globalnews.png';

import { LiaAngular , LiaCss3, LiaGit, LiaHtml5,  LiaReact  } from "react-icons/lia";
import { RiJavascriptLine } from "react-icons/ri";
import { SiBootstrap, SiCsharp, SiGnometerminal, SiVisualstudio, SiW3C } from 'react-icons/si';
import { FaCogs } from 'react-icons/fa';
import { BiLogoFirebase } from 'react-icons/bi';
import { DiResponsive } from 'react-icons/di';

interface HomeState {
  menuOpen: boolean;
}

class Home extends React.Component<{}, HomeState> {

    

  

  constructor(props: {}) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }



  handleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <>
        <header className={`${this.state.menuOpen ? 'show-menu' : ''}`} id='home'>
          <div className='title'>
            <span><FcClapperboard  style={{fontSize: '40px'}} /> Jhon Aguiar Moreno</span><br />
            <span>(Front end Developer)</span>
          </div>

          <div className="menuCircle"></div>
          <div className={`menu-wrap ${this.state.menuOpen ? 'open' : ''}`}>
            <div className="menu">
              <div className="link-list">
                <li><Link 
                    to="home" 
                    href="#home">Home</Link></li>
                <li><Link 
                    to="profile" 
                    href="#profile">Profile</Link></li>
                <li><Link 
                    to="skills" 
                    href="#skills">Skills</Link></li>
                <li><Link 
                    to="works" 
                    href="#works">Works</Link></li>
              </div>
            </div>
          </div>
          <div className="menuHolder">            
            <button className={`c-hamburger c-hamburger--htx ${this.state.menuOpen ? 'is-active' : ''}`} id="open-button" onClick={this.handleClick}> 
              
            {this.state.menuOpen ? <FaX style={{color: 'white', fontSize: '40px'}} /> : <FaBars style={{color: 'white', fontSize: '40px'}} />}
            </button>
          </div>
        </header>
        <div className="angle angle1"></div>
        <section className='section'>
          <aside id='profile'>
            <h1>Profile</h1><br />
            <p>
              Hello! I'm a passionate Software Developer with 7 years of experience in the programming realm. Ever since I wrote my first program in .Net, I knew that my path lay in technology. My fascination with exploring computer components began in my childhood, and I've since translated that passion into a rewarding career.
            </p><br />
            <p>
              Throughout my journey, I've worked across diverse sectors, including credit, finance, data, health, and transportation. My expertise spans a spectrum of technologies, from my strong command of C# to my deep understanding of Python, not to mention my 6 years of proficiency in JavaScript, HTML, and CSS. Currently, I serve as a Senior Developer at Asesoftware, flexing my skills in full-stack development.
            </p><br />
            <p>
              My focus lies in swiftly acquiring new skills and programming languages, alongside troubleshooting and implementing efficient code organization methods. My toolkit includes C#, .NET, Angular, Python, PHP, JavaScript, React.js, Django, .NET Core, and Laravel, along with my database proficiency in SQL Server, PostgreSQL, and MySQL. I'm also a seasoned GIT user and well-versed in Power BI.
            </p><br />
            <p>
            I'm excited about the opportunities technology presents and how I can continue to innovate and contribute to impactful solutions. I'm always eager to learn and take on new challenges. Let's connect and discuss how we can collaborate in the world of programming!
            </p>
          </aside>
          <aside className='profile'>
            <img src={ProfilePhoto} alt="" style={{height: '500px'}} />
          </aside>
        </section>
        <section className='skills-tools' id='skills'>
          <div className="wrapper">
            <h2 className="light">skills &amp; tools</h2>
            <h3>my toolbox &amp; things i can do</h3>
            <p>The skills, tools and technologies I use to bring your products to life:</p>
            <div className="container-icons">
              <div className="box-icon">
                <LiaHtml5  className="devicon devicon-html5-plain" aria-hidden="true"></LiaHtml5>
                <p>HTML5</p>
              </div>
              <div className="box-icon">
                <LiaCss3  className="devicon devicon-css3-plain" aria-hidden="true"></LiaCss3>
                <p>CSS3</p>
              </div>
              <div className="box-icon">
                <RiJavascriptLine className="fab fa-js" aria-hidden="true"></RiJavascriptLine>
                <p>JavaScript</p>
              </div>
              <div className="box-icon">
                <LiaAngular className="devicon devicon-jquery-plain" aria-hidden="true"></LiaAngular>
                <p>Angular</p>
              </div>
              <div className="box-icon">
                <LiaReact  className="devicon devicon-react-original" aria-hidden="true"></LiaReact >
                <p>React</p>
              </div>
              <div className="box-icon">
                <LiaGit  className="devicon devicon-git-plain" aria-hidden="true"></LiaGit >
                <p>Git</p>
              </div>
              <div className="box-icon">
                <SiCsharp  className="devicon devicon-github-plain" aria-hidden="true"></SiCsharp >
                <p>C#</p>
              </div>
              <div className="box-icon">
                <FaCogs  className="fas fa-cogs" aria-hidden="true"></FaCogs>
                <p>RESTful APIs</p>
              </div>
              <div className="box-icon">
                <FaCogs  className="fas fa-cogs" aria-hidden="true"></FaCogs>
                <p>Firebase</p>
              </div>
              <div className="box-icon">
                <BiLogoFirebase className="devicon devicon-sass-original" aria-hidden="true"></BiLogoFirebase>
                <p>SASS</p>
              </div>
              <div className="box-icon">
                <SiGnometerminal  className="fas fa-terminal" aria-hidden="true"></SiGnometerminal >
                <p>Command Line</p>
              </div>
              <div className="box-icon">
                <SiVisualstudio className="devicon devicon-visualstudio-plain" aria-hidden="true"></SiVisualstudio>
                <p>VS Code</p>
              </div>
              <div className="box-icon">
                <DiResponsive className="devicon devicon-visualstudio-plain" aria-hidden="true"></DiResponsive>  
                <p>Responsive Websites</p>
              </div>
              <div className="box-icon">
                <SiW3C  className="devicon devicon-visualstudio-plain" aria-hidden="true"></SiW3C >  
                <p>Web Accessibility</p>
              </div>
              <div className="box-icon">
                <SiBootstrap  className="devicon devicon-wordpress-plain" aria-hidden="true"></SiBootstrap >
                <p>Bootstrap</p>
              </div>

            </div> 
          </div>
        </section>
        <section className='section' id='works'>
          <aside>
            <img src={trk} alt="" style={{width: '100%'}} />
          </aside>
          <aside>
              <div className="elem">
                <h2 className="dark">Workings</h2>
                <h3>I like work</h3>
                <p>Work I've taken on in the past.</p>
                <br />
                <div className='elemt'>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={global} alt="" />
                      </div>
                    </div>
                    <p>Global News</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={progracol} alt="" />
                      </div>
                    </div>
                    <p>Progracol</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={cientocincuenta} alt="" />
                      </div>
                    </div>
                    <p>150 Por ciento</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={ethos} alt="" />
                      </div>
                    </div>
                    <p>Ethos Soluciones</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={rv} alt="" />
                      </div>
                    </div>
                    <p>RV Inmobiliaria</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={buho} alt="" />
                      </div>
                    </div>
                    <p>Buho</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={colvatel} alt="" />
                      </div>
                    </div>
                    <p>Colvatel</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={correcol} alt="" />
                      </div>
                    </div>
                    <p>Correcol</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={lisim} alt="" />
                      </div>
                    </div>
                    <p>Lisim</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={gml} alt="" />
                      </div>
                    </div>
                    <p>Gml Software</p>
                  </div>
                  <div className='elem2'>
                    <div className='elem2-1'>
                      <div>
                        <img src={asesoftware} alt="" />
                      </div>
                    </div>
                    <p>Asesoftware</p>
                  </div>
                </div>
              </div>
          </aside>
        </section>
        <footer>
          <div className='foot-elem'>
            <div className='copy-elem'>
              &copy; 2024 - Jhon Henrry Aguiar Moreno
            </div>
          </div>
          <div className='foot-elem'>
            <div className='contacts'>
              <a href="https://github.com/JhonAguiar" target='_blank'>
                <ImGithub 
                  fontSize={22} 
                  color='#ffffff'></ImGithub>
              </a>
              <a href="https://www.instagram.com/jhon.aguiar93/" target='_blank'>
                <ImInstagram   
                  fontSize={22} 
                  color='#ffffff'></ImInstagram  >
              </a>
              <a href="https://www.linkedin.com/in/jhon-henrry-aguiar-moreno-728566173/" target='_blank'>
                <ImLinkedin    
                  fontSize={22} 
                  color='#ffffff'></ImLinkedin   >
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;