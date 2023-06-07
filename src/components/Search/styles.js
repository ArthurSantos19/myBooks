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
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    text-align: center;
    justify-content: center;
    margin: 5rem 10rem 5rem 10rem;
    background-color: black;
    
`

export const BooksContainer = styled.div`
    background-color: black;
    color: white;
    border-radius: 2rem;
    box-shadow: 1px 1px 4px 1px white;
    width: 14rem;
    height: 20rem;
    margin-top: 2rem;

    img {
        width: 10rem;
        height: 15rem;
    }
`



