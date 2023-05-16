import React from 'react'

const Features = ({data,title}) => {
  return (
      <div className='grid mx-auto mt-8 text-center place-content-center'>
          <div className='m-6'>
              <h1 className='font-bold text-4xl text-blue-500'>{title}</h1>
                <img src="" alt="" />  
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
        {data.map((e, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
                <div className=" m-5 w-40">
                   <img className='w-full h-full object-cover' src={e?.img} alt="" />
                </div>
                <h1 className="text-3xl font-semibold mt-4">{e?.count}</h1>
                <h1 className="text-3xl font-semibold text-gray-500">{e?.title}</h1>
                <h1 className="font-semibold text-gray-500 px-10">{e?.desc}</h1>
            </div>
        ))}
        </div>
      </div>
  )
}

export default Features