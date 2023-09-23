
const DetailCard = ({clickBook}) => {

    const implementBtn = (url) => {
        window.open(url,'_blank')
    }

    return (
        <div className="detail-card">
            <img src={clickBook.volumeInfo.imageLinks.thumbnail} alt="Loading.."/>
            <div className="card-content">
                <p className="card-title">{clickBook.volumeInfo.title}</p>
                <div className="author-publish-date">
                    <p className="author">{clickBook.volumeInfo.authors[0]}</p>
                    <p className="publish-date">Published On : {clickBook.volumeInfo.publishedDate}</p>
                </div>
                <p className="card-description">{clickBook.volumeInfo.description}</p>
                <div className="card-reviews">
                    <p>Avg Rating : {clickBook.volumeInfo.averageRating}</p>
                    <p>|</p>
                    <p>Rating Count : {clickBook.volumeInfo.ratingsCount}</p>
                    <p>|</p>
                    <p>Publisher : {clickBook.volumeInfo.publisher}</p>
                    <p>|</p>
                    <p>Language : {clickBook.volumeInfo.language}</p>
                </div>
                <div className="more-btns">
                    <button onClick={() => implementBtn(clickBook.accessInfo.webReaderLink)}>Now Read!</button>
                    <button onClick={() => implementBtn(clickBook.volumeInfo.infoLink)}>More Info!</button>
                </div>
            </div>
        </div>
    )
}

export default DetailCard