import Link from 'next/link'

export default function BgNav({header,items,active,setActive}){



    return(
                <>  
                            <div className='nav-bg-mn-body'>
                            <ul className='nav-bg-mn-body-list'onClick={()=>{setActive(!active)}}>
                                   <li> <Link href={items[1].href}><a>{items[1].value}</a></Link></li> 
                                   <li><Link href={items[2].href}><a>{items[2].value}</a></Link></li> 
                                   <li> <Link href={items[3].href}><a>{items[3].value}</a></Link></li> 
                                   <li> <Link href={items[4].href}><a>{items[4].value}</a></Link></li> 
                                   <li><Link href={items[5].href}><a >{items[5].value}</a></Link></li> 
                                   <li><Link href={items[6].href}><a >{items[6].value}</a></Link></li> 
                            </ul>
                        </div>
                        <div className='bg-space-close' onClick={()=>{setActive(!active)}}></div>
                </>
            )
                
}
