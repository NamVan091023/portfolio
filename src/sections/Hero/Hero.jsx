import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import facebookLight from '../../assets/icons8-facebook-light.svg'
import facebookDark from '../../assets/icons8-facebook-dark.svg'
import gitHubLight from '../../assets/github-light.svg'
import gitHubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Le Van Nam.pdf.pdf'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
  const gitHubIcon = theme === 'light' ? gitHubLight : gitHubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    return (
     
      <section id = "hero" className={styles.container}>
       <div className={styles.colorModeContainer}>
        <img className={styles.heroImg} src={heroImg} alt="Ảnh của tớ Văn Nam " 
        />
        <img className={styles.colorMode}
        src={themeIcon}
        alt='Color mode icon' onClick={toggleTheme}
        
        />
        
        </div>
        <div className={styles.info}>
            <h1>
                Le Van Nam
                
            </h1>
            <h2>Security/AI/RnD engineer </h2>
            <span>
             <a href="https://facebook.com" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" style={{ width: "40px", height: "40px" }} />
           </a>
           <a href="https://github.com/NamVan091023" target="_blank">
            <img src={gitHubIcon} alt="Github icon" style={{ width: "40px", height: "40px" }} />
           </a>
           <a href="https://www.linkedin.com/in/nam-lee-749474292/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" style={{ width: "40px", height: "40px" }} />
           </a>
           </span>
           <p>
           
I am an R&D engineer passionate about Artificial Intelligence and Cybersecurity. 🚀</p>
           <a href={CV}><button className="hover" download> Resume </button></a>

        </div>
      </section>
    );
  }
  
  export default Hero;
  