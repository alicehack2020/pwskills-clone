import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HeroSlider from "../components/HeroSlider"
import Features from "../components/Features"
import { featureData,productData } from "../data"
import MultiSlider from "../components/MultiSlider"
 const Home = () => {
  const [menu, setMenu] = useState(false)
  const [searchMobile,setSearchMobile]=useState(false)
  const navigate = useNavigate()
  

  const pageChange = (pageName) => {
    console.log(pageName)
    navigate(`/${pageName}`)
  }
   return (
     <div className="p-2">
       <div className="relative">
       <div className="flex justify-between items-center px-10 pt-5">
         <div className="hover:cursor-pointer lg:hidden" onClick={()=>setMenu(true)}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:hidden">
          <path fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
          </svg>
        </div>
           
         <div className="w-1/4">
           <img src="https://pwskills.com/images/PWSkills-main.png" alt="" />
         </div>
           {/* input search desktop */}
           <div className="hidden lg:flex  border border-gray-400 h-10 p-2 rounded w-full mx-36">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 pr-2">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>  
             <input type="text" name="" id="" placeholder="What do you want to learn?"  className="w-full h-full outline-none"/>  
           </div>

           {/* search course mobile */}
          <div className="hover:cursor-pointer lg:hidden block" onClick={()=>setSearchMobile(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
          </div>
           <div className="bg-blue-400 p-2 rounded-md text-white font-semibold hidden lg:block">
             login/register
           </div>
       </div>
      {/* menu */}
      {menu===true?<div className="z-10 p-5 w-full absolute top-0 bg-white justify-center border-2 h-screen">
           <div className="flex justify-end hover:cursor-pointer" onClick={()=>setMenu(false)}>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
               <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
           </div>

          <ol onClick={(e)=>pageChange(e.target.innerText)} className="place-content-center grid hover:cursor-pointer text-xl m-2">
           <li>login</li>
           <li>register</li>
           <li>list</li>
           <li>logout</li>
         </ol>
         </div> : <></>}
         
         {
           searchMobile === true ?
           <div className="z-10 p-5 w-full absolute top-0 bg-white justify-center border-2 h-screen">
              <div className="flex justify-end hover:cursor-pointer" onClick={()=>setSearchMobile(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </div>
            <div className="flex w-full border-2 border-gray-400 h-fit p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 pr-2">
                <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>  
                <input type="text" name="" id="" placeholder="What do you want to learn?"  className="w-full h-full outline-none"/>  
            </div>
          </div>: <></>
       }    
         {/* categoty */}
         <div className=" justify-evenly mt-2 text-base font-semibold hidden lg:flex">
           <div className="flex items-center justify-center">
             <p>Courses</p>
             <div className="flex w-6">
                 <svg className="w-full pt-1 pl-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
             </div> 
           </div>
           <p>PW Skills Lab</p> 
           <p>Job Portal</p> 
           <p>Experience Portal</p> 
           <p>Become an affiliate</p> 
           <p>Hall of fame</p> 
           <div className="flex items-center justify-center">
             <p>More</p>
             <div className="flex w-6">
                 <svg className="w-full pt-1 pl-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
             </div> 
           </div> 
         </div>

          {/* sub category */}
         {/* banner */}
         <HeroSlider />
         <Features data={featureData} title={"“Pure Hardwork, No Shortcuts!”"} />
         <MultiSlider/>
         <Features data={productData} title={"Our Products"} />
       </div> 
    </div>
   
    
  )
}

export default Home