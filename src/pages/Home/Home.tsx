import { FC } from "react";
import Landing from "../../components/Landing/Landing";
import Projects from './../../components/Projects/Projects';

const Home: FC = () => {
    return (
        <>
            <Landing />
            <Projects />
        </>
    )
}


export default Home