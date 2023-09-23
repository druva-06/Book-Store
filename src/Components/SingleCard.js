
const SingleCard = ({book,setClickBook}) => {

    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    return (
        <div className="single-card">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Loading.."/>
            <div style={ {backgroundColor:`#${randomColor}`} } className="single-card-content">
                <p className="title">{book.volumeInfo.title}</p>
                <p className="description">Description - {book.volumeInfo.description}</p>
                <button onClick={() => setClickBook(book)}>Know More!</button>
            </div>
        </div>
    )
}

export default SingleCard