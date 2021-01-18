import React from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { AiTwotoneHome } from 'react-icons/ai'

const header = () => {
 return <div className={styles.header}>
  <nav className={`${styles.nav} container`}>
   <Link  className={styles.logo} to="/"><AiTwotoneHome/></Link>
   <Link className={styles.login} to="/login">Login / Criar </Link>
  </nav>
  </div>
}

export default header