import SingleCard from "./SingleCard"

const AllCards = ({booksData,setClickBook}) => {

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