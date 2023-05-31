import {HeaderContainer} from './styles'
import {BsBagHeartFill} from 'react-icons/bs'
import {ImUser} from 'react-icons/im'
import {ImBooks} from 'react-icons/im'

const infos = ["Categorias", "Meus Preferidos", "Estante"]

export function Header() {
    return (
        <HeaderContainer>
            <h2><ImBooks size={32}/> BOOKS</h2>
            {infos.map(info => (
                <p>{info}</p>
            ))}

            <p><BsBagHeartFill size={26}/></p>
            <p><ImUser size={26}/></p>
        </HeaderContainer>

    )
}