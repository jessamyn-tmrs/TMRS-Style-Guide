import logo from "../Assets/tmrs-logo.svg";

type Props = {}
const home: string = "/";
const basics: string = "/basics";
const components: string = "/components";

const Navbar = (props: Props) => {
    return (
        <div className='navbar'>
            <ul className='navbar_list'>
                <li className='navbar_list-logo'>
                    <a href={home}>
                        <img src={`${logo}`} alt="TMRS logo" />
                    </a>
                </li>
                <ul className='navbar_list-cards'>
                    <li>
                        <div>
                            <a href={home}>How To Use</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href={basics}>Style Basics</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href={components}>Web Components</a>
                        </div>
                    </li>
                </ul>

            </ul>
        </div>
    )
}

export default Navbar