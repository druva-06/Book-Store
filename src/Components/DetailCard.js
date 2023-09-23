
const DetailCard = () => {
    return (
        <div className="detail-card">
            <img src="http://books.google.com/books/content?id=kLAoswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="Loading.."/>
            <div className="card-content">
                <p className="card-title">Fantastic Beasts and Where to Find Them</p>
                <div className="author-publish-date">
                    <p className="author">J K. ROFLING</p>
                    <p className="publish-date">Published On : 2017-09-02</p>
                </div>
                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elit lectus enim id euismod. Gravida at praesent aliquam, at natoque at leo. Faucibus quam ipsum mi eget consectetur posuere dui vulputate magna.</p>
                <div className="card-reviews">
                    <p>Avg Rating : 4.5</p>
                    <p>|</p>
                    <p>Rating Count : 85</p>
                    <p>|</p>
                    <p>Publisher : Blurb</p>
                    <p>|</p>
                    <p>Language : En</p>
                </div>
                <div className="more-btns">
                    <button>Now Read!</button>
                    <button>More Info!</button>
                </div>
            </div>
        </div>
    )
}

export default DetailCard