import DetailCard from "./DetailCard"
import AllCards from "./AllCards"
import axios from "axios"
import { useEffect, useState } from "react"

const Main = ({search}) => {

    const [booksData,setBooksData] = useState([])
    const [clickBook,setClickBook] = useState(null)

    const loadBooks = async(search) => {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?',{
            params:{
                q:search
            }
        })
        let books = []
        response.data.items.forEach(element => {
            books.push(element)
        });
        setBooksData(books)
    }

    useEffect(() => {
        loadBooks('harry+potter')
        loadBooks('Sherlock+Holmes')
    },[])

    useEffect(() => {
        setBooksData([])
        setClickBook(null)
        if(search!=='')
            loadBooks(search)
    },[search])

    return (
        <div className="main">
            {clickBook!==null && <DetailCard
            clickBook = {clickBook}
            />}
            <AllCards
            booksData = {booksData}
            setClickBook = {setClickBook}
            />
        </div>
    )
}

export default Main