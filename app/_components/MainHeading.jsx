import React from 'react'

function MainHeading({title,desc}) {
  return (
    <>
      <div className="lg:w-[480px] max-w-md sm:max-w-full mx-auto my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black">
                <h3 className="mx-2 text-center capitalize text-2xl sm:text-xl font-normal">{title}</h3>
            </div>
            <div className="pb-11">
                <h1 className="text-center text-3xl font-bold">{desc}</h1>
         </div>
    </>
  )
}

export default MainHeading