import React from 'react'

import s from '@/styles/navbar.module.css'

import Logo from '@/pages/svgs/Logo'

const Navbar = () => {
  return (
    <div className={s.container}>
        <div></div>
        <div className={s.logo}> <Logo/> </div>
        <p><span>نقدي</span> بوابة الشركاء </p>
    </div>
  )
}

export default Navbar