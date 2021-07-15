
import { Teams } from './Teams';
import { Goals } from './Pieces/Goals';
import { Background } from './Pieces/Background';
import Footer from './Pieces/Footer';

function AboutUs() {

    return (

        <>
            <Background />
            <Goals />
            <div style={{ marginTop: 100 }}><Footer /></div>
        </>
    )
}
export default AboutUs;