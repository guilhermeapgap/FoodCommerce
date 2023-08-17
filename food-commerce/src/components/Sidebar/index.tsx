import { Container } from "./styles"

import { ReactComponent as BurgerIcon } from '../../assets/burger.svg'

import menuImg from '../../assets/menu.svg'

export function Sidebar(){
    return <Container>
        <button type="button">
            <img src={menuImg} alt="abrir e fechar menu"/>
        </button>
        <nav>
            <ul>
                <li>
                    <a href="#" className="active">
                        <BurgerIcon/>
                        <span>Hambúrgueres</span>
                    </a>
                </li>
            </ul>
        </nav>
    </Container>
}