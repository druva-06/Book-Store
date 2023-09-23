
const SingleCard = ({book,setClickBook}) => {

    console.log(book)

    function getDarkColor() {
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += Math.floor(Math.random() * 10);
        }
        return color;
    }

    const implementKnowMore = () => {
        setClickBook(book)
        window.open('#','_self')
    }

    return (
        <div onClick={implementKnowMore} className="single-card">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Loading.."/>
            <div style={ {backgroundColor: getDarkColor()} } className="single-card-content">
                <p className="title">{book.volumeInfo.title}</p>
                <p className="description">Description - {book.volumeInfo.description}</p>
                <button>Know More!</button>
            </div>
        </div>
    )
}

export default SingleCard