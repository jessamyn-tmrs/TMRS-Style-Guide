import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Card from './Card';
import Sections from './Sections';

type Props = {}

const Homepage = (props: Props) => {
    return (
        <div className='homepage'>
            <Navbar />
            <div className='homepage_main'>
                <div className='sidebar_wrapper'>
                    <Sidebar />
                </div>
                <div className='section_wrapper'>
                    <Sections />
                </div>
            </div>

        </div>
    )
}

export default Homepage;