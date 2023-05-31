import { useState } from "react"
import { SearchContainer, InputConstainer} from "./styles"
import {listBooks} from './apiSimulacao'

export function Search() {
    const [books, setBooks] = useState([])
    return(
        <SearchContainer>
            <h2>Encontre o livro que você deseja!</h2>
            <InputConstainer onChange={(event) => {
                const inputValue = event.target.value;
               const resultSearch = listBooks.filter(book => book.nome.includes(inputValue))
               setBooks(resultSearch)
            }} />
            { books.map(book => (
                <div>
                    <p key={book.id}>{book.nome}</p>
                    <img src={book.src}/>
                </div>
                
            ))}
        </SearchContainer>
    )
}