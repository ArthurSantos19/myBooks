import { RecommendationsContainer, ResultNewBooks } from "./styles"
import { BooksContainer } from "../Search/styles"
import { newBooks } from "../Search/apiSimulacao"

export function LastRealeases() {
    return(
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
    )
}