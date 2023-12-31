import React from 'react'

const Contact = () => {
    return (
       
        <div className='px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10'>
        {/* title */}
        <div className=" text-white font-semibold text-[32px] mt-12">
            <span className=' text-[#7FFF00]'>/</span>
            contacts</div>
        {/* h2 title */}
        <div className=" text-white mt-[14px] mb-[46px]">Who am i?</div>
        {/* flex main */}
        <div className="flex justify-between flex-wrap gap-10">
            {/* left side */}
            <div className="  md:w-3/5 w-full">
                {/* some text */}
                <div className=" text-[#ABB2BF] font-medium">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </div>
            </div>
            {/* right side */}
            <div className=" flex gap-3">
                {/* boxes/flex */}
               
                {/* 2 */}
                <div className=" p-4 border border-[#ABB2BF]">
                    <h2 className=' text-white font-medium pb-4 '>Message me here</h2>
                    <div className=" text-[#ABB2BF]">
                        {/* contacts */}
                        <div className=" flex gap-1 items-center">
                            {/* img */}
                            <img src={require("../../assets/phone.png")} alt="" />
                            {/* text */}
                            <span>(+94)76 350 288</span>
                        </div>
                        {/* contacts */}
                        <div className=" flex gap-1 items-center">
                            {/* img */}
                            <img src={require("../../assets/gmail.png")} alt="" />
                            {/* text */}
                            <span>iamiranga10@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* all media */}
        <div className=" mt-6 mb-5x">
            {/* title */}
            <div className=" text-[32px] font-medium text-white"><span className='text-[#7FFF00]'>#</span>all-media</div>
            {/* media */}
            <div className=" flex gap-6">
                <a href="https://github.com/Irangaumayantha2001">
                    <div className=" text-[#ABB2BF] flex items-center gap-1">
                        <img src={require('../../assets/github.png')} alt="" />
                        <span>Irangaumayantha2001</span>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/iranga-umayantha-20973b184/">
                    <div className=" text-[#ABB2BF] flex items-center gap-1">
                        <img src={require('../../assets/linkedin.png')} alt="" />
                        <span>iranga-umayantha-20973b184</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    )
}

export default Contact


