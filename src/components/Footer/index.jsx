import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <div className={s.footer_section}>
        <footer className={['wrapper', s.footer].join(' ')}>
            <p>© 2019 Строительная компания</p>
            <p>Разработано лучшей студей</p>
        </footer>

    </div>
  )
}
