import React from 'react'
import s from '@/styles/infobar.module.css'
import Profile from '../svgs/Profile'
import Arrow from '../svgs/Arrow'
import Taqarir from '../svgs/Taqarir'
import Bitaqat from '../svgs/Bitaqat'
import Tafaol from '../svgs/Tafaol'
import Omalae from '../svgs/Omalae'
import Idadat from '../svgs/Idadat'
import Bill from '../svgs/Bill'
import SMS from '../svgs/SMS'
import Misaha from '../svgs/Misaha'

const InfoBar = () => {
  return (

    <div className={s.container}>

      <div className={s.left_content}>

        <div className={s.timeline}>
          <a href="#">إرسال إشعار</a>
          <div>
            <Arrow />
          </div>
          <a href="#">التفاعل</a>
          <div>
            <Arrow />
          </div>
          <a href="#">بوابة الشركاء</a>
        </div>
        <div className={s.content}>
          <h2>التفاعل</h2>
          <div className={s.cards}>
            <div className={s.card_child_3}>
              <div>
                <Misaha />
              </div>
              <p>حجز مساحة إعلان</p>
            </div>
            <div className={s.card_child_2}>
              <div>
                <SMS />
              </div>
              <p>إرسال SMS</p>
            </div>

            <div className={s.card_child_1}>
              <div>
                <Bill />
              </div>
              <p>إرسال إشعار</p>
            </div>

          </div>
        </div>
      </div>

      <div className={s.sidebar}>

        <div className={s.prfcontainer}>
          <div className={s.infos}>
            <p>،مرحبًا بك</p>
            <h3>تسجيل الدخول</h3>
          </div>
          <div className={s.profile_pic}>
            <Profile />
          </div>
        </div>

        <div className={s.sidebar_items_container}>
          <div className={s.sidebar_items}>
            <div>
              <p>التقارير</p>
              <div>
                <Taqarir />
              </div>
            </div>
            <div>
              <p>البطاقات</p>
              <div>
                <Bitaqat />
              </div>
            </div>
            <div>
              <p>التفاعل</p>
              <div>
                <Tafaol />
              </div>
            </div>
            <div>
              <p>العملاء</p>
              <div>
                <Omalae />
              </div>
            </div>
            <div>
              <p>الإعدادات</p>
              <div>
                <Idadat />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default InfoBar