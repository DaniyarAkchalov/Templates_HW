import React from 'react'
import s from './index.module.css'
import { big_project } from '../../data/big_project'
import BigProjectCard from '../BigProjectCard'

export default function BigProject() {
  return (
    <div className={s.big_project_section}>
        <section className='wrapper'>
            <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
            <div className={s.big_project_container}>
                {
                    big_project.map(el => <BigProjectCard key={el.id} {...el} />)
                }


            </div>
        </section>
    </div>
    )
}
