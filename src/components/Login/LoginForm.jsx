import React from 'react'
import {Link} from 'react-router-dom'
import Input from '../Forms/input'
import Button from '../Forms/button'
import useForm from '../../Hooks/useForm'
import {TOKEN_POST, USER_GET} from '../../api'
import Error from '../../Helper/Error'
import styles from './LoginForm.module.css'
import stylesBtn from '../Forms/button.module.css'

const LoginForm = () => {

 const username = useForm()
 const password = useForm()

 React.useEffect(() => {
  const token = window.localStorage.getItem('token')
  if(token){
   getUser()
  }
  
 })


 async function getUser(token){
  const {url, options } = USER_GET(token)
  const response = fetch()
  const json = (await response).json()
  console.log(json)
 }

 async function handleSubmit(event){
  event.preventDefault()
  if(username.validate() && password.validate()){
   const { url, options } = TOKEN_POST({username: username.value, password: password.value})
   
   const response = await fetch(url,options)
   const json = await response.json()
   console.log(json)
  }
 }

 return(
  <section className="animeLeft">
    <h1 className="title">Login</h1>
    <form  className={styles.form} action="" onSubmit={handleSubmit}>
       <Input label="Usuário" type="text" name="username" {...username}/>
       <Input label="Senha" type="password" name="password" {...password}/>
       <Button children="Entrar"/>
     <Error/>
    </form>

  <div className={styles.cadastro}>
   <h2 className={styles.subtitle}>Cadastre-se</h2>
   <p>Anda nao possui conta ? Cadastre-se na nossa plataforma.</p>
   <Link  className={stylesBtn.button}to="/criar">
     Cadastrar
    </Link>
  </div>

  </section>

 )
}

export default LoginForm