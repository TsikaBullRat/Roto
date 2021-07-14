import { Link } from 'react-router-dom';
import { Headline } from './Headline';

function impactSummary() {
    return (
        <div>
            <Headline headline="Our Impacts" />
            <div className="row justify-content-center">
                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i className="bi bi-emoji-smile " style={{ fontSize: 120, padding: 50, color: "#ff2400" }}></i>
                    <h5>ROTO’S CURRENT ENROLLMENT IS </h5>
                    <h5>8 STUDENTS.</h5>
                    <br />
                </div>
                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i className="bi bi-house-door" style={{ fontSize: 120, padding: 50, color: "#1fcecb" }}></i>
                    <h5>2020 WE FINALLY HAVE OUR OWN SCHOOL PREMISES FROM DONATED LAND.
                    </h5>
                    <br />
                </div>
                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i class="bi bi-clock" style={{ fontSize: 120, padding: 50, color: "#ffef00" }}></i>
                    <h5>THIS YEAR WE CELEBRATE 8 YEARS IN THE SCHOOL'S OPERATION </h5>
                </div>
            </div>
        </div>
    )
}
export default impactSummary;