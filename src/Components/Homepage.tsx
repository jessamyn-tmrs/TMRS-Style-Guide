import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Cards from './Cards';

type Props = {}

const Homepage = (props: Props) => {
    return (
        <div className='homepage'>
            <Navbar />
            <div className='homepage_wrap'>
                <div className='sidebar_wrap'>
                    <Sidebar />
                </div>
                <div className='cards_wrap'>
                    <Cards />
                </div>
            </div>

        </div>
    )
}

export default Homepage;