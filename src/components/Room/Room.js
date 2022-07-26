import './Room.css';

const Room = ({availableAt, currentPrice, nameFr, status, Pictures, Apartment}) => {

    return (
        <article className="card">
            <div 
                className='card-image' 
                style={
                        {
                            "backgroundImage": `url(${Pictures[0].url})`, 
                            "backgroundSize": "cover", 
                            "backgroundRepeat": "no-repeat",
                            "objectFit": "cover",
                            "backgroundPosition": "center"
                        }
                    }
            >
                <h3><span>Free from </span>{availableAt}</h3>
            </div>
            
            <div className='card-content'>
                <div className='card-name'>
                    <h2>{nameFr}</h2>
                    <p>{Apartment.fullAddress}</p>
                </div>
                <div className='card-price'>
                    <h1>{currentPrice}€</h1>
                    <button>
                        Buy now
                    </button>
                </div>
            </div>
            
            {/* <p>{status}</p> */}
            
        </article>
    )
}

export default Room;