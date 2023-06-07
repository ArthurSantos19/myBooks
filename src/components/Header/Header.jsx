import {HeaderContainer} from './styles'
import {BsBagHeartFill} from 'react-icons/bs'
import {ImUser} from 'react-icons/im'
import {ImBooks} from 'react-icons/im'
import { Link } from 'react-router-dom'

const infos = ["Categorias", "Favoritos", "Estante"]

export function Header() {
    return (
        <HeaderContainer>
            <Link to={'/'}><h2><ImBooks size={32}/> BOOKS</h2></Link>
            
            {infos.map(info => (
                <Link to={`/${info.toLowerCase()}`}><p>{info}</p></Link>
                
            ))}

            <p><BsBagHeartFill size={26}/></p>
            <p><ImUser size={26}/></p>
        </HeaderContainer>

    )
}