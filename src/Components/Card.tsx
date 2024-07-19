import { CARD_DATA } from '../Data/cardData';

// map through and display card info from card data
function Card() {
    return (
        <div className="card_wrap">
            {CARD_DATA.map((card) => (
                <div key={card.id} className="card" id={card.name}>
                    <div className="card_inner">
                        <section className="card_info">
                            <h1 className="card_title">{card.title}</h1>
                            <h3>{card.subtitle}</h3>
                            <p>{card.description}</p>
                        </section>
                        <ul className='card_images'>
                            {card.images.map((item) => (
                                <li >
                                    <img
                                        src={`/src/Assets/${(item.url)}.svg`}
                                        alt={item.alt}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div >
    );
}

export default Card;
