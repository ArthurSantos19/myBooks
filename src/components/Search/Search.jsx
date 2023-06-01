import { useState } from "react"
import { SearchContainer, InputConstainer, ButtonSearch} from "./styles"
import {listBooks} from './apiSimulacao'

export function Search() {
    const [books, setBooks] = useState([])
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        const resultSearch = listBooks.filter(book => book.nome.includes(searchValue))
        setBooks(resultSearch)
    }
    return(
        <SearchContainer>
            <h2>Encontre o livro que você deseja!</h2>
            <InputConstainer onChange={(event) => setSearchValue(event.target.value)} />
            <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
            { books.map(book => (
                <div>
                    <p key={book.id}>{book.nome}</p>
                    <img src={book.src}/>
                </div>
                
            ))}
        </SearchContainer>
    )
}