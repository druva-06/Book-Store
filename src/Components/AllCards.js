import SingleCard from "./SingleCard"

const AllCards = ({booksData,setClickBook}) => {
    console.log(booksData)
    return (
        <div className="all-cards">
            {
                booksData.map((element) => {
                    return <SingleCard
                    book = {element}
                    setClickBook = {setClickBook}
                    />
                })
            }
        </div>
    )
}

export default AllCards