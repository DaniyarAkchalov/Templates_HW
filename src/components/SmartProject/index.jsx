import React from 'react'
import s from './index.module.css'

export default function SmartProject() {
  return (
    <div className={s.smart_proj_section}>
        <section className={['wrapper', s.smart_proj].join(' ')}>
            <div>
                <h2>САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
                <p>РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</p>
            </div>

            <div className={s.button}>ВАШ ЗАПРОС</div>

        </section>
    </div>
  )
}
