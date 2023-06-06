import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #F0E68C;
    height: 24rem;
`
export const InputConstainer = styled.input`
    width: 20rem;
    height: 2rem;
    border-radius: 6px;;
    border: solid #FFD700;
    outline: #FFD700;

    font-size: medium;
`

export const ButtonSearch = styled.button`
    margin-top: 1rem;
    width: 6rem;
    height: 2rem;
    background-color: #FFD700;
    display: flex;
    text-align: center;
    align-items: center;
`

export const ResultBooks = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    justify-content: center;
    
`

export const BooksContainer = styled.div`
    background-color: black;
    color: white;
    border-radius: 2rem;
    box-shadow: 2px 2px 2px 2px #363636;
    width: 14rem;
    height: 20rem;
    margin-top: 2rem;

    img {
        width: 10rem;
        height: 15rem;
    }
`

export const RecommendationsContainer = styled.div`
    color: #F0E68C;
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ResultNewBooks = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 2rem;
`

