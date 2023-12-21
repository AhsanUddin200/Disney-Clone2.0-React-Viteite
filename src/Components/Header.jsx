import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiPlayCircle, HiTv, HiStar} from "react-icons/hi2";
import { HiPlus,HiDotsVertical }  from 'react-icons/hi';
import Headeritem from './Headeritem';
const Header = () => {
    const [toggle,setToggle]=useState(false);
    

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
return (
    <div className="w-full h-30  bg-gray-800 rounded-b-2xl shadow-2xl fixed">
    <div className='flex items-center justify-between p-6  '>

        <div className='flex gap-8 items-center '>
    <img src={logo} alt='logo' className='w-[90px] md:w-[115px] object-cover hover:scale-125' />
    
    <div className='hidden md:flex gap-12  '>
    {menu.map((item)=>(
            <Headeritem  name={item.name} Icon={item.icon}/>
    ))}
    </div>

    <div className='flex  md:hidden gap-8 '>
    {menu.map((item,index)=>index<3&&(
            <Headeritem   Icon={item.icon}/>
    ))}
    
    <div className='md:hidden' onClick={()=>setToggle(!toggle)}> 
            <Headeritem name={''} Icon={HiDotsVertical} />
        {toggle ? <div className='absolute mt-4 bg-slate-800 border-[1px] p-4 border-gray-500 px-6 py-3 rounded-lg'>
            {menu.map((item,index)=>index>2&&(
            <Headeritem  name={item.name} Icon={item.icon}/>
    ))} 
    </div> :null}
        
        </div>
    </div>
    

</div>
<img
src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61'
alt='Unsplash'
className='w-[60px] rounded-full'
/>

    </div>
    </div>
)
}

export default Header
