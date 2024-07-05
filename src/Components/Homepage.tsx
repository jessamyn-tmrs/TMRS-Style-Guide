// import { useState } from "react";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Cards from './Cards';
// import Scrollbar from './Scrollbar';

type Props = {}

const Homepage = (props: Props) => {
    // const [backgroundColor, setBackgroundColor] = useState("white");

    // const handleScroll = (event: any) => {
    //     const { scrollTop, scrollHeight, clientHeight } = event.target;
    //     const scrollRatio = scrollTop / (scrollHeight - clientHeight);

    //     if (scrollRatio > 0.5) {
    //         setBackgroundColor("lightblue");
    //     } else {
    //         setBackgroundColor("pink");
    //     }
    // };

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