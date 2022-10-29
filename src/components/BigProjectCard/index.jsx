import React from 'react'
import s from './index.module.css'


export default function BigProjectCard({ img, title, text}) {

  return (
    <div className={s.big_proj_card}>
        <img src={img} alt={title} />
        <div className={s.orange_rect}></div>
        <p className={s.title}>{ title }</p>
        <p className={s.text}>{ text }</p>

    </div>
  )
}
