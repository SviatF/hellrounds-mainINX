import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {MainLayout} from '../Components/MainLayout'
import NewBc from '../Components/posts/NewBc'
import {useState,useEffect} from 'react'



export default function Index() {

const [width, setWidth] = useState(0);
const navItems = [ {val:'jjj',id:1},
                    {val:'jjj',id:2},
                    {val:'jjj',id:3},
                    {val:'jjj',id:4},
                    {val:'jjj',id:5},
                    {val:'jjj',id:6},
                    {val:'jjj',id:7},
                    {val:'jjj',id:8},
                    {val:'jjj',id:9},
                    {val:'jjj',id:10},
                    {val:'jjj',id:11},
                    {val:'jjj',id:12},
                    {val:'jjj',id:13},
                    {val:'jjj',id:14},
                    {val:'jjj',id:15},
                    {val:'jjj',id:16}


          ]




  
useEffect(() =>{
  setWidth(window.innerWidth);
  function handleWidth(){
    setWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleWidth)
  
},[])



  return (
    <MainLayout title={'Головна'}>
      
      <Head>
        <meta charSet="utf-8"/>
        <meta name="keywords" content="myths" />
        <meta name="description" content="textetxetxtetxetxtetxtetxetxet" />
     </Head>
        <header className={styles.hd50vw}>
              <div className={styles.hdRow}>
                 <h1>Hell Rounds</h1>
                 <h2>site about non-natural</h2>
              </div>
         </header>


        <section className={styles.bcDark}>
          <section className={styles.InxBCMain}>
            <div className={styles.InxtopNews}>
                <h3>News</h3>
                  <h4>Unexplained things that make your skin tingle</h4>
            </div>

            <div className={styles.InxBcNews}>
                {navItems.filter((val,Index)=>{

                     
                      if(width<=768&&Index<3){
                          return val;
                      }
                      if(768<=width&&width<=880&&Index<4){
                          return val;
                      }
                      if(880<=width&&width<=1200&&Index<6){
                          return val;
                      }
                      if(1200<=width&&width<=1500&&Index<9){
                          return val;
                      }
                      if(1500<=width&&width<=1955&&Index<12){
                        return val;
                      }
                      if(1955<=width&&width<=2200&&Index<15){
                        return val;
                       }
                       if(2200<=width&&Index<19){
                        return val;
                       }
                      else{return false;}

                }).map((post)=>{
                  return  <NewBc key={post.id}/>
                  
                })}
            </div>

            <div className='btn-pd'><a onClick={()=>{Router.push('/news/')}} className='btn btn-5 btn-wh'>More news</a> </div>
            </section>
        </section>



        <section className={styles.bcWhite}>
          <section className={styles.InxBCMain}>
            <div className={styles.InxtopTxt}>
                <h3>Bestiary</h3>
                  <h4>What is a bestiary? <br/>This is a great book, which stores all the information about fictional or obvious creatures</h4>
            </div>
          <section className={styles.bcDark}>
            <section className={styles.InxBcPadd}>
              <h5>Movies</h5>

                <div className={styles.InxBcContent}>
                      {navItems.filter((val,Index)=>{

                     
                     if(width<=880&&Index<3){
                          return val;
                      }
                      if(880<=width&&width<=1200&&Index<4){
                        return val;
                      }
                      if(1200<=width&&width<=1534&&Index<3){
                        return val;
                    }
                      if(1534<=width&&width<=1950&&Index<4){
                          return val;
                      }
                      if(1950<=width&&width<=2200&&Index<5){
                        return val;
                    }
                       if(2200<=width&&Index<6){
                        return val;
                       }
                      else{return false;}

                  }).map((post)=>{
                       return <NewBc key={post.id}/>
                  })}
                </div>

            </section>

            <section className={styles.InxBcPadd}>
              <h5>Creatures</h5>

                  <div className={styles.InxBcContent}>

                    {navItems.filter((val,Index)=>{

                     
                     if(width<=880&&Index<3){
                          return val;
                      }
                      if(880<=width&&width<=1200&&Index<4){
                        return val;
                      }
                      if(1200<=width&&width<=1534&&Index<3){
                        return val;
                    }
                      if(1534<=width&&width<=1950&&Index<4){
                          return val;
                      }
                      if(1950<=width&&width<=2200&&Index<5){
                        return val;
                    }
                       if(2200<=width&&Index<6){
                        return val;
                       }
                      else{return false;}

                  }).map((post)=>{
                       return <NewBc key={post.id}/>
                  })} 
                </div>

            </section>
            <div className='btn-pd'><a onClick={()=>{Router.push('/news/')}} className='btn btn-5 btn-wh'>More Posts ...</a> </div>
            </section>
            

              
          
            <div className={styles.InxtopTxt}>
                <h3>Myths</h3>
                  <h4>The most interesting myths and legends that can only be imagined you can find here..</h4>
            </div>
          <section className={styles.bcDark}>
            <section className={styles.InxBcPadd}>
              

                <div className={styles.InxBcContent}>

                 {navItems.filter((val,Index)=>{

                     
                      if(width<=768&&Index<3){
                          return val;
                      }
                      if(768<=width&&width<=880&&Index<4){
                          return val;
                      }
                      if(880<=width&&width<=1200&&Index<6){
                          return val;
                      }
                      if(1200<=width&&width<=1500&&Index<9){
                          return val;
                      }
                      if(1500<=width&&width<=1955&&Index<12){
                        return val;
                      }
                      if(1955<=width&&width<=2200&&Index<15){
                        return val;
                       }
                       if(2200<=width&&Index<19){
                        return val;
                       }
                      else{return false;}

                      }).map((post)=>{
                          return <NewBc key={post.id}/>
                    })}
                </div>

            </section>
            </section>
            <div className='btn-pd'><a onClick={()=>{Router.push('/news/')}} className='btn btn-5'>More Posts ...</a> </div>
            
            </section>
        </section>
        <section className={styles.bcDark}>
              <div className={styles.bcAbs}>
                    <h3>About us</h3>
                    <p className={styles.bcAbsP}>Site about the supernatural, news that is difficult to understand,
                       fascinating myths and legends, the widest bestiaries of movies and
                        mythologies, stories of people who saw something will not explain,
                         the most popular religions and mythologies, you can find it all only here.</p>

              </div>

        </section>
    </MainLayout>
  )
}
