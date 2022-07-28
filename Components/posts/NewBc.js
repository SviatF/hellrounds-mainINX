import Link from "next/dist/client/link";
import React from "react";

const NewBc=()=>{


        return(

            <Link href={`/news/post/[newsid]`}>
                
                <div class="bc-row-info">
                        <a href="#">
                            <div class="bc-row-mg"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvIGKhYLhu3XFULi_mypFyU2xSz6anTlUEoTaCTlFmsSRsB4yTzZRMOfOTrnBck4QPuI0&usqp=CAU" alt=""></img></div> 
                                <div class="bc-row-txt">
                                    <h3>The bones of Atlantis were found</h3>
                                    <p align="left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae similique molestias quae omnis rem et suscipit facere reprehenderit tempora, nisi eligendi ipsum natus sint nihil nobis voluptates inventore ipsam facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, alias!</p>
                                     <div class="bc-row-ft"> 
                                          <div class="bc-row-view"><i class="fas fa-eye"></i><p>1345</p></div>
                                          <span>12.09.2021</span>
                                    </div>
                                </div>
                        </a>
                         </div>

            </Link>



        )
}

export default NewBc;