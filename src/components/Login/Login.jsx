import React from 'react'

import Header from '../header'
import Footer from '../footer'
import LoginForm from './LoginForm'
import styles from './Login.module.css'
import LoginCriar from './LoginCriar'

const Login = () => {
 return(
  <section className={styles.login}>
    <div className={styles.forms}>
     <Header/>
     <LoginForm/>
     <Footer/>
    </div>
  </section>



 )
}

export default Login