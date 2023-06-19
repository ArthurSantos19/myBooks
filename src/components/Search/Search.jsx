import { useEffect, useState } from "react"
import { SearchContainer, InputConstainer, ButtonSearch,  BooksContainer, ResultBooks} from "./styles"
import {listBooks} from './apiSimulacao'
import { getBooks } from "../../services/books";

export function Search() {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [booksAPI, setBooksAPI] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const APIbooks = await getBooks()
        setBooksAPI(APIbooks)
    }

    const handleSearch = () => {
        const resultSearch = booksAPI.filter(book => book.nome.includes(searchValue))
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
       </div>

       
        
    )
}