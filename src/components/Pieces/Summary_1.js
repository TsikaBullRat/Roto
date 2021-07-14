import { Link } from 'react-router-dom';
import { Headline } from './Headline';

function Summary() {
    return (
        <div>
            <Headline headline="We Are ROTO" />

            <div className="row ml-5 pl-5">
                <div className="col-sm-12 col-lg-4 text-center ml-5" >
                    <h3>What We're About</h3>
                    <p>The ROTO Centre was established as a non-
                        profit organization in 2016 when Mpho
                        Matthews, the founder, joined up with other
                        individuals wanting to create a safe place
                        with educational activities and support
                        services that would cater to the specific
                        needs of special needs children. The need
                        for such an organization was realized
                        through the founder’s own personal
                        experience of having a child that has
                        special needs. To date, ROTO is the only
                        special needs day care centre in Barkley
                        West, serving more than 20 families each
                        day between Monday to Saturday with a
                        variety of programs and services.
                    </p>
                    <Link exact to="/about">
                        <button className="btn">Want To Know More</button>
                    </Link>
                </div>
                <div className="col-sm-12 col-lg-6  text-center ml-5" >
                    <h3>Our Mission</h3>
                    <ul>
                        <div className="list_repsonder">
                            <h6>
                                The mission of the ROTO centre is to help special needs children and their families improve and maintain a healthy and independent lifestyle; to improve their quality of life.Our four-pronged purpose is as follows:
                            </h6>
                            <hr />
                        </div>
                        <div className="list_repsonder">
                            <li>
                                Promote dignity and self-esteem
                            </li>
                            <hr />
                        </div>
                        <div className="list_repsonder">
                            <li>
                                Foster independence and self-determination

                            </li>
                            <hr />
                        </div>

                        <div className="list_repsonder">
                            <li>
                                Facilitate social interaction and involvement in community life
                            </li>
                            <hr />
                        </div>

                        <div className="list_repsonder">
                            <li>
                                Dispel stereotypes and myths about special needs
                            </li>
                            <hr />
                        </div>

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default Summary;