import styles from '../styles/footer.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTelegram,faInstagram,faPinterest}from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    let router = useRouter();
    


    return(            
<footer className={styles.footer}>
        <div className={styles.ftBody}>
            <div className={styles.ftCntr}>
                <div className={styles.ftItem}>
                     <div className={styles.ftThemes}>Recently added stories</div>
                     <Link href={`/news/post/[newsid]`} as={`/news/post/1`}>
                        <div className={styles.ftRcasItem}>
                        <div className={styles.rcasTxt}>
                            <div className={styles.rcasThemes}>Perdition myths</div>
                            <div className={styles.rcasSubt}>some text about explaining</div>
                        </div>
                        <div className={styles.contImg}>
                            <img src='https://zaxid.net/resources/photos/news/202112/1532978.jpg?202112251737&fit=cover&w=755&h=425&q=65'></img>
                        </div>
                        </div>
                        </Link>
                        <Link href={`/posts/devices/[deviceid]`} as={`/posts/devices/2`}>
                        <div className={styles.ftRcasItem}>
                        
                        <div className={styles.rcasTxt}>
                            <div className={styles.rcasThemes}>Cleopatra</div>
                            <div className={styles.rcasSubt}>some text about explaining</div>
                        </div>
                        <div className={styles.contImg}>
                            <img src='https://zaxid.net/resources/photos/news/202110/1528310.jpg?202110171034&fit=cover&w=755&h=425&q=65'></img>
                        </div>
                        </div>
                        </Link>
                        <Link href={`/news/post/[newsid]`} as={`/news/post/2`}>
                        <div className={styles.ftRcasItem}>
                        <div className={styles.rcasTxt}>
                            <div className={styles.rcasThemes}>Atlants</div>
                            <div className={styles.rcasSubt}>some text about explaining</div>
                        </div>
                        <div className={styles.contImg}>
                            <img src='https://zaxid.net/resources/photos/news/202110/1528310.jpg?202110171034&fit=cover&w=755&h=425&q=65'></img>
                        </div>
                        
                        </div>
                        </Link>
    </div>
    <div className={styles.ftItem}>
    <div className={styles.ftThemes}>Updates</div>
    
     <div className={styles.ftUitem}>
     <div className={styles.uThemes}>Optimization</div>
     <div className={styles.uDate}>06.05.2022</div>
     
     </div>
     
     <div className={styles.ftUitem}>
        <div className={styles.uThemes}>New Dezign</div>
        <div className={styles.uDate}>04.05.2022</div>
     </div>
     
     <div className={styles.ftUitem}>
     <div className={styles.uThemes}>Update System</div>
     <div className={styles.uDate}>01.05.2022</div>
     
     </div>
     <div className={styles.ftUitem}>
     <div className={styles.uThemes}>New Dezign</div>
     <div className={styles.uDate}>27.04.2022</div>
     </div>
     </div>
    <div className={styles.ftWafu}>
    <div className={styles.ftThemes}>Write Article for us</div>
    <div className={styles.wafuTxt}>
         If you want to become one of authories our articles about non-natural , write to us.
    </div>
    <div className={styles.wafuGm}>
     <p>Support</p>
      <div className={styles.gm}>support@hellrounds.com</div>
    </div>
    </div>
    
    </div>
     <hr className={styles.ftHr}/>
    <div className={styles.ftCs}>
         <a href="/">
         <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>
         </a>
         <a href="/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
         <a href="/"><FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></a>
         <p>© 2022 Hell Rounds. All Rights Reserved</p>
         <span>lorem</span>
     </div>
</div>
        </footer>
        )
}
