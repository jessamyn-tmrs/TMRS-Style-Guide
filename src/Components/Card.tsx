import { CARD_DATA } from '../Data/cardData';

function Card() {
    return (
        <div className="row">test
            {CARD_DATA.map((section) => (
                <div key={section.id} className="">
                    <div className="card">
                        <img src={section.imageUrl} alt={section.name} />
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{section.name}</strong>
                            </h5>
                            <p>{section.description}</p>
                            <p>Budget : {section.budget.toLocaleString()}</p>
                        </section>
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