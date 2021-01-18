import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Button from '../Forms/button'
import Input from '../Forms/input'
import useForm from '../../Hooks/useForm'
import {USER_POST} from '../../api'
import '../Login/formcriar.css'


const LoginCriar = () =>{
  const username= useForm()
  const password = useForm()
  const email = useForm('email')

 async function handleSubmit(event){
 event.preventDefault()
 const {url, options} = USER_POST({
  username: username.value,
  email: email.value,
  password: password.value,
 }) 
 const response = await fetch(url, options)
  console.log(response)
 }

 return(
  <section className="animeLeft">
   <Header/>
   <div className="cont">
   <h1 className="title">Cadastre-se</h1>
   <form onSubmit={handleSubmit}>
    <div className="area-user">
    <Input label="Usuário" type="text" name="username"{...username}/>
     <Input label="Senha" type="password" name="password"{...password}/>
     <Input label="Email" type="email" name="email"{...email}/>
     <Button>Cadastrar</Button>
    </div>
    </form>
   </div>
   <Footer/>
  </section>
 )
}

export default LoginCriar