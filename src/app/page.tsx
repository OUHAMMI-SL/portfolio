import HomePage from "@/compenents/Home/Home";
import programer from "@/assets/programer.jpg"
import Image from 'next/image';
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import WavingHandIcon from '@mui/icons-material/WavingHand';

export default function Home() {
  return (
    <div className="h-screen bg-black border-white items-center ">
    <div className="flex justify-around h-32 items-center w-full">
        <div className="flex flex-row  justify-around space-x-3 items-center">
            <div className="flex  flex-col items-center ">
                <CodeIcon className="text-yellow-400 " style={{width:60, height:60}}/>
            </div>
            <div className="flex  flex-col items-center">
                <span className="text-lg font-semibold text-white">OUHAMMI MOHAMED</span>
                <span className="text-lg font-semibold text-yellow-400">Web Developer</span>
            </div>
        </div>
        <div className="flex justify-center text-white font-bold space-x-10 text-lg ">
            <span className="hover:text-yellow-500">Intro</span>
            <span className="hover:text-yellow-500">Why me</span>
            <span className="hover:text-yellow-500">Technologies</span>
            <span className="hover:text-yellow-500">Experience</span>
            <span className="hover:text-yellow-500">Contact</span>
        </div>

    </div>


    {/* HOme page  */}

    <div className='w-full h-[70%] flex flex-center justify-center items-center space-x-10'>
          <div className='flex flex-center w-[40%] w h-full items-center text-white'>
          <div className="flex flex-col justify-between items-center space-x-2">
                  <div className="flex flex-center justify-center space-x-2 w-full">
                  <div className="flex  flex-col">
                    <span className="text-lg font-semibold text-white">I{"'"}am</span><br></br>
                      <span className="text-5xl font-bold text-yellow-400 border-b-4 border-white ">OUHAMMI  MOHAMED {" "}
                      <span className="text-center mb-10"><WavingHandIcon className="text-yellow-500 " style={{width:60, height:60}}/></span>
                    </span><br></br>
                    <span className="text-5xl font-bold text-white animate-left-to-right"> Full Stack Developer</span>
                    <h1 className="text-[24px] sm:text-[26px] md:text-[33px] xl:text-[48px] leading-[36px] lg:leading-[43px] xl:leading-[50px] 2xl:leading-[60px] font-semibold leading-snug mb-7">
                        Intégrez la première
                        {/* Text with underline animation */}
                        <div className="relative inline-block">
                            <span
                                className={`ml-1.5 md:ml-3 absolute z-10 bg-main left-0 bottom-[11px] sm:bottom-[10px] md:bottom-[15px] lg:bottom-[12px] xl:bottom-[15px] 2xl:bottom-[20px]  h-[8px] sm:h-[12px] lg:h-[15px] `}>
                            </span>
                            <span className="relative z-20">&nbsp; communauté &nbsp;</span>
                        </div>
                        sélective
                        <div className="relative inline-block">
                            <span
                                className={`ml-3 md:ml-4 z-10 bg-main left-0 bottom-[11px] sm:bottom-[10px] md:bottom-[15px] lg:bottom-[12px] xl:bottom-[15px] 2xl:bottom-[20px] absolute h-[8px] sm:h-[12px] lg:h-[15px] `}>
                            </span>
                            <span className="relative z-20">&nbsp; de formateurs indépendants &nbsp;</span>
                        </div>
                    </h1>
                 </div>
                  
                  </div>
                  <div className=" mt-10 w-full">
                    <IconButton color="primary" aria-label="LinkedIn" >
                      <LinkedInIcon style={{width:50, height:50}}/>
                      </IconButton>
                      <IconButton color="primary" aria-label="Facebook">
                        <LocalPostOfficeIcon style={{width:50, height:50}}/>
                      </IconButton>
                      <IconButton color="primary" aria-label="GitHub">
                        <GitHubIcon style={{width:50, height:50}}/>
                      </IconButton>
                      <IconButton color="primary" aria-label="Close">
                        <XIcon style={{width:50, height:50}}/>
                   </IconButton>
                    <div className=" flex flex-row justify-between space-x-3">
                          <button className="w-full py-3 border-2 rounded-full hover:bg-yellow-400 hover:text-black">Hire me</button>
                          <button className="text-white border-yellow-400 w-full py-3 rounded-full border-2 hover:bg-white text-yellow-400">  Downlead CV</button>
                      </div>
                  </div>
                {/* <p className="text-justify font-bold w-[80%]">
                    I have over 6.5 years of commercial experience as a Front End Developer (including Full Stack Node.js knowledge)
                    and 6.5 years of academic learning experience at a local technological university.
                    I hold a Master s degree in Software Engineering from ZPS University
                    of Ukraine and have an Upper Intermediate level of proficiency in written and spoken English.
                    I am highly motivated, detail-oriented, and a responsible employee who is always interested in building mutually-beneficial partnerships.
                    Have any questions or offers? Feel free to contact me on social networks or by email 24/7.
                </p> */}
                </div>
                
          </div>
          <div className='flex-flex-center w-[40%] w h-[80%] items-center '>
            <img src={programer.src} alt="" className="w-full h-full rounded-full"  />
          </div>
    </div>
</div>
  );
}
