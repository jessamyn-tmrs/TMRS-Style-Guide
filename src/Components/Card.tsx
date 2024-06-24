import { CARD_DATA } from '../Data/cardData';

function Card() {
    return (
        <div className="card_wrapper">
            {CARD_DATA.map((section) => (
                <div key={section.id} className="">
                    <div className="card">
                        <section className="card_info">
                            <h1 className="card_title">{section.title}</h1>
                            <h3>{section.subtitle}</h3>
                            <p>{section.description}</p>
                        </section>
                        <img src={section.imageUrl} alt="" />

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;

// const SectionCard = (props: Props) => {
//     return (
//         <div className='section'>
//             <div className="section_card">
//                 <h1>sectionData[0].id</h1>
//                 <h3>sectionData[0].subtitle</h3>
//                 <h5>sectionData[0].description</h5>
//             </div>
//         </div >
//     )
// }

// export default SectionCard;