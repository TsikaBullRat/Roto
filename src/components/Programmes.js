import { Headline } from './Pieces/Headline';
import Footer from './Pieces/Footer';
import community from '../assets/community play times.jpg'
import preventive from '../assets/preventive health care and education.jpg'
import nutritious from '../assets/nutritious in-centre meals.jpg'
import crisis from '../assets/crisis intervention and support group.jpg'
import leisure from '../assets/leisure activities,recreation.jpg'
import educational from '../assets/educational and weekend classes.jpg'

export const Programmes = () => {

    return (
        <div>

            <div className="container">

                <Headline headline="Give A Smile" />

                <p className="text-center" style={{ fontSize: 20 }}>We offer a variety of programs at our
                    centre to meet the special needs of those
                    we serve.
                </p> <br></br>
                <div className=" row ">

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={preventive} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Preventive health care and education </h5>
                            <p className="card-text">Preventive health care deals with the prevention of illness to decrease the burden of disease and associated risks factors.Teaching youth,adults, and communities about healthy behavior and lifestyles is one way we can decrease risky behavior.Education is the key to understanding behavior.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={nutritious} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Nutritiuos in-centre meals </h5>
                            <p className="card-text">Nutrition is how food affects the health of the body.Food is comprised of macronutrients including protiein,carbohydrate and fat that not only offer calories to feul the body and give it energy but play specific roles in maintaining health.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4 " style={{ width: '21rem' }}>
                        <img src={crisis} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Crisis intervention and support group</h5>
                            <p className="card-text">Crisis intervention also refers to the methods used to offer immediate,short-term help to individuals who experience an event that produces emotional, mental, physical, and behavioral distress or problems.</p>

                        </div>
                    </div>

                </div>

                <div className=" row ">

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={leisure} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Leisure activities,recreation</h5>
                            <p className="card-text">Leisure refers to the free time that people can spend away from their everyday responsibilities to rest,relax and enjoy life.Recreation acivities are walking, swimming, meditation, reading playing games and dancing.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={educational} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Educational and weekend classes </h5>
                            <p className="card-text">The act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgement ,and generally of preparing oneself or others intellectually for mature life .</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4 " style={{ width: '21rem' }}>
                        <img src={community} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title"> Community Play Times</h5>
                            <p className="card-text">A group of people with a common characteristic or interest living together within a larger society a community .</p>

                        </div>
                    </div>

                </div>

            </div>

            <Footer ></Footer>

        </div>
    )

}

/*export default Aboutus;*/