import { CARD_DATA } from '../Data/cardData';

// search and map all asset files
const images: any = require.context("../Assets", true);
const imageList: any = images.keys().map((str: string) => images(str));

// filter asset files to match url set in card data for img source
let imageFilter = (arg: string) => {
    let filter: string = imageList.filter((color: string) => color.match((arg)));
    return filter[0]
}

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
                                        src={imageFilter(item.url)}
                                        alt={item.alt}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
