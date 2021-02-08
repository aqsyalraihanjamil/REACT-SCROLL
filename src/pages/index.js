import React, {useState} from 'react'
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Upper from '../components/Upper';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => [
        setIsOpen(!isOpen)
    ]

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Upper />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <Footer />
        </>
    )
}

export default Home
