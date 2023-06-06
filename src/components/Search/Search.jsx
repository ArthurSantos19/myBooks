import { useState } from "react"
import { SearchContainer, InputConstainer, ButtonSearch, ResultNewBooks, BooksContainer, ResultBooks, RecommendationsContainer} from "./styles"
import {listBooks, newBooks} from './apiSimulacao'

export function Search() {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");


    const handleSearch = () => {
        const resultSearch = listBooks.filter(book => book.nome.includes(searchValue))
        setBooks(resultSearch)
    }
    return(
       <div>
            <SearchContainer>
                <h2>Encontre o livro que você deseja!</h2>
                <InputConstainer onChange={(event) => setSearchValue(event.target.value)} />
                <ButtonSearch onClick={handleSearch}>Buscar</ButtonSearch>
                
            </SearchContainer>
            <ResultBooks>
                { books.map(book => (
                    <BooksContainer>
                        <p key={book.id}>{book.nome}</p>
                        <img src={book.src}/>
                    </BooksContainer>
                    
                ))}
            </ResultBooks>
            <RecommendationsContainer>
            <h1>Últimos Lançamentos!</h1>
                    <ResultNewBooks>
                        {newBooks.map(newBook => (
                            <BooksContainer>
                                <p key={newBook.id}>{newBook.nome}</p>
                                <img src={newBook.src}/>
                            </BooksContainer>
                        ))}
                    </ResultNewBooks>
            </RecommendationsContainer>
       </div>

       
        
    )
}