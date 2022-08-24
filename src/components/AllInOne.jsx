import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';
import { Link } from 'react-scroll'

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Groups</h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <h3 className='font-bold text-lg'>Group A</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
              <button className='w-full py-4 my-4'><Link to={"/login"} > Get Started</Link></button>
            </div>
          </div>
          <div className='flex'>
            <div>
              <h3 className='font-bold text-lg'>Group B</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
              <button className='w-full py-4 my-4'><Link to={"/login"} > Get Started</Link></button>
            </div>
          </div>
          <div className='flex'>
            <div>
              <h3 className='font-bold text-lg'>Group C</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
              <button className='w-full py-4 my-4'><Link to={"/login"} > Get Started</Link></button>
            </div>
          </div>
          <div className='flex'>
            <div>
              <h3 className='font-bold text-lg'>Group E</h3>
              <p className='text-lg pt-2 pb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
              <button className='w-full py-4 my-4'><Link to={"/login"} > Get Started</Link></button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AllInOne;
