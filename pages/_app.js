import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <> 
  
  
  <Component {...pageProps} />


    <style jsx global>{`
      .bc-row-info   {
        height:550px;
        width: 320px;
        background: #1c1c1c;
        margin-bottom: 20px;
    }
     .bc-row-info p {color: #fff;}
     .bc-row-info h3{color: #fff;}
     .bc-row-info .bc-row-ft{color: #fff;}
    
    .bc-row-mg img{
        width: 320px;
        height: 235px;
    }
    .bc-row-txt{
        color: #000;
        text-decoration: none;
        margin: 20px;
        height: 100%;
    }
    .bc-row-txt h3{
        font-size: 25px;
        font-weight: 600;
        text-align: start;
        height: 10%;
        overflow: hidden;
    }
    .bc-row-txt p{
        text-align: start;
        font-size: 15px;
        margin-top:20px; 
        height: 35%; 
        line-height: 1.4;
        overflow: hidden;
    }
    .bc-row-view{
        float: left;
        opacity: 0.7;
    }
    .bc-row-view p1{
        margin-left: 5px;
    }
    .bc-row-ft span{
        float: right;
    }
    
    
    @media screen and (max-width:475px){
        .bg-menu-item{
            padding: 3vw;
        }
        .bg-item-modifier-stdn a{
            font-size: 5vw;
        }
        .bg-item-modifier-abtus a{
            font-size:4vw;
        }
    }

   
    
    `}</style>
        </>
}

export default MyApp
