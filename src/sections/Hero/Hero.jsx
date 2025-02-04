import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import facebookIcon from '../../assets/icons8-facebook-light.svg'
import gitHubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/Le Van Nam.pdf.pdf'
function Hero() {
    return (
      <section id = "hero" className={styles.container}>
       <div className={styles.colorModeContainer}>
        <img className={styles.heroImg} src={heroImg} alt="Ảnh của tớ Văn Nam " 
        />
        <img className={styles.colorMode}
        src={themeIcon}
        alt='Color mode icon'></img>
        </div>
        <div className={styles.info}>
            <h1>
                Le Van Nam
                
            </h1>
            <h2>Security/AI/RnD engineer </h2>
            <span>
             <a href="https://facebook.com" target="_blank">
            <img src={facebookIcon} alt="Facebook icon" style={{ width: "35px", height: "35px" }} />
           </a>
           <a href="https://github.com/NamVan091023" target="_blank">
            <img src={gitHubIcon} alt="Github icon" style={{ width: "40px", height: "40px" }} />
           </a>
           <a href="https://www.linkedin.com/in/nam-lee-749474292/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" style={{ width: "40px", height: "40px" }} />
           </a>
           </span>
           <p>A RnD Engineer with passionate with Artificial Inteligence and Cyber Security.</p>
           <a href={CV}><button className="hover" download> Resume </button></a>

        </div>
      </section>
    );
  }
  
  export default Hero;
  