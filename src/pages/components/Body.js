import React from 'react'
import s from '@/styles/body.module.css'
const Body = ({children}) => {
  return (
    <div className={s.container}>
        {children}
    </div>
  )
}

export default Body