import React from 'react'
import s from './index.module.css'
import { about_us_cards } from '../../data/about_us'
import AboutUsContainer from '../AboutUsContainer'

export default function AboutUs() {
  return (

    <div className={s.header_section}>
      <header className='wrapper'>
         <h1>Реализуем крупнейшие проекты в россии</h1>
         <p className={s.subheader}>Стадионы, Газопроводы, Мосты, Дамбы</p>
         <div className={s.cards_container}>
          {
            about_us_cards.map(el => <AboutUsContainer key={el.id} {...el}/>)
          }
           
         </div>
      </header>             
              
    </div>
  )
}
