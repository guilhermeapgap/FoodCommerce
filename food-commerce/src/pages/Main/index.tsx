import { Outlet } from 'react-router-dom' //componente para renderizar subpaginas

import { Sidebar } from '../../components/Sidebar'

import { Container } from './styles'

import logoImg from '../../assets/logo.svg'
export default function Main() {
  return (
    <Container>
      <Sidebar/> 
      <section>
        <img src={logoImg}/>
        <Outlet/>
      </section>
        
    </Container>
  )
}


    