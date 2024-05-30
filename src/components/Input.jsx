import React from 'react'
const classes = "text-stone-700 bg-stone-200 focus:outline-none focus:border-stone-600 p-1 w-full border-b-2 rounded-md border-stone-300"

export default function Input({label, textarea, ...props}) {
  return (
    <p className='flex flex-col gap-1 my-4 '>
        <label className='font-bold text-sm uppercase text-stone-500'>{label}</label>
        {textarea ? <textarea className={classes} {...props}/> : <input className={classes} {...props}/>}
    </p>
  )
}
