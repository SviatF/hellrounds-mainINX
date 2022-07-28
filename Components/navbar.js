import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import BgNav from './bg-nav'

export default function Navbar({items,header}){
    const [menuActive,setMenuActive] = useState(false)
    return(<nav >
        <div className={styles.nav}>
        <div className={styles.mainNv}>
            <div className={styles.nvlist}>
                    <Link href={items[1].href}><a className={styles.nvlistLink} >{items[1].value}</a></Link>
                    <Link href={items[2].href}><a className={styles.nvlistLink} >{items[2].value}</a></Link>
                    <Link href={items[3].href}><a className={styles.nvlistLink} >{items[3].value}</a></Link>
                    <Link href={items[4].href}><a className={styles.nvlistLink} >{items[4].value}</a></Link>
                    <Link href={items[5].href}><a className={styles.nvlistLink} >{items[5].value}</a></Link>
            </div>
            <div>
                <Link href={items[0].href}><a className={styles.logonv}>{items[0].value}</a></Link>
            </div>
            <div>
                <Link href={items[6].href}><a className={styles.absnv}>{items[6].value}</a></Link>
            </div>
        </div>

        <div className={menuActive ? 'nav-bg-mn bg-active':'nav-bg-mn'}>
                    <div className='nav-bg-mn-head'  >
                            <Link href={header.href}><a className={styles.logobg}>{header.value}</a></Link>
                            <a className='nav-bg-btn' onClick={()=>{setMenuActive(!menuActive)}}><span className='bg-menu-lines'></span></a>
                        </div>
                        <BgNav active={menuActive} setActive={setMenuActive} header={header} items={items}/>
                </div>
        </div>
    </nav>
    
    )

}