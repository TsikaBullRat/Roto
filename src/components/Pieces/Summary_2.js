import { Link } from 'react-router-dom';
import { Headline } from './Headline';

function impactSummary() {
    return (
        <div>
            <Headline headline="Our Impacts" />
            <div className="row justify-content-center my_text_center back mb-5">
                <div className="col-sm-12 col-lg-4">
                    <h2>Reach One Teach One</h2>
                    <p></p>
                   

                </div>
                <div className="d-flex justify-content-end">
                    <div className="text-center col-sm-12 col-lg-2">
                        <br />
                        <i className="bi bi-emoji-smile " style={{ fontSize: 80, padding: 50 }}></i>
                        <h5>ROTO’S current enrollment is</h5>
                        <h5>8 students.</h5>
                        <br />
                    </div>

                    <div className="text-center col-sm-12 col-lg-2">
                        <br />
                        <i className="bi bi-check2-circle" style={{ fontSize: 80, padding: 50 }}></i>
                        <h5>2020 We finally have our  own school premises from  donated land.
                        </h5>
                        <br />
                    </div>
                    <div className="text-center col-sm-12 col-lg-2">
                        <br />
                        <i class="bi bi-award" style={{ fontSize: 80, padding: 50 }}></i>
                        <h5>This year we celebrate 8  years </h5>
                        <h5>in the school's  operation</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default impactSummary;