import { CARD_DATA } from '../Data/cardData';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul>
                {CARD_DATA.map((card) => (
                    <>
                        <li >
                            <a href={`#${card.name}`} key={card.id} className="">
                                {card.title}</a>
                        </li>
                        <i></i>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar