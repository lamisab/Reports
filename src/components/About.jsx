import React from 'react'
import { Link } from 'react-scroll'


const About = () => {
  return (
    <div name='about' className='w-full my-32'>
     <div className='grid md:grid-cols-3'>
       <div className='bg-white text-slate-900 m-4 p-10 rounded-xl shadow-2xl relative'>
            <div>
            <span className='text-xl text-slate-500 flex flex-col justify-end'>@Nourah7</span>
            </div>
            <div className='text-2xl'>
              <p className='flex py-4'>  
                Title</p>
            <p className='text-2xl py-8 text-slate-500'>this is first report $$$$$$$$$$$$$$.</p>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm justify-between'><a href="#">#Standard</a></span> <span/><span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'><a href="#">#Tags</a> </span>
                <button className='w-full py-4 my-4'><Link to={"/login"} > Get Started</Link> </button>
            </div>
          </div>

          
          <div className='bg-white text-slate-900 m-4 p-10 rounded-xl shadow-2xl relative'>
            <div>
            <span className='text-xl text-slate-500 flex flex-col justify-end'>@Nourah7</span>
            </div>
            <div className='text-2xl'>
              <p className='flex py-4'>  
                Title</p>
            <p className='text-2xl py-8 text-slate-500'>this is first report $$$$$$$$$$$$$$.</p>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm justify-between'><a href="#">#Standard</a></span> <span/><span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'><a href="#">#Tags</a> </span>
                <button className='w-full py-4 my-4'><Link href='#' to="/login" > Get Started</Link></button>
            </div>
          </div>

          <div className='bg-white text-slate-900 m-4 p-10 rounded-xl shadow-2xl relative'>
            <div>
            <span className='text-xl text-slate-500 flex flex-col justify-end'>@Nourah7</span>
            </div>
            <div className='text-2xl'>
              <p className='flex py-4'>  
                Title</p>
            <p className='text-2xl py-8 text-slate-500'>this is first report $$$$$$$$$$$$$$.</p>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm justify-between'><a href="#">#Standard</a></span> <span/><span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'><a href="#">#Tags</a> </span>
                <button className='w-full py-4 my-4'><Link href='#' to="/login" > Get Started</Link></button>
            </div>
          </div>
    </div>

    </div>
  )
}

export default About