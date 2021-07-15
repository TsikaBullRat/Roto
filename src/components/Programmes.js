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
                            <h5 className="card-title">Preventive health care and education </h5> <br></br>
                            <p className="card-text">Our aim is to give adive to people on a social or personal level. In assisting and guiding clients, especially by a trained person on a proffessional basis, to resolve especially personal,social,or pysychological problems and difficulties.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={nutritious} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Nutritiuos in-centre meals </h5> <br></br>
                            <p className="card-text">Training is teaching ,or developing in oneself or others , any skills and knowledge or fitness that relates to a specific ueseful competencies. Training is the process of learning the skills that you need for a particular job or activity.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4 " style={{ width: '21rem' }}>
                        <img src={crisis} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Crisis intervention and support group</h5> <br></br>
                            <p className="card-text">Community services is unpaid work performed by a person or group of people for the benefit and betterment of their community without any form of compensation. Community services is not always performed on a voluntary basis and may be compulsory per situation.</p>

                        </div>
                    </div>

                </div>

                <div className=" row ">

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={leisure} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Leisure activities,recreation</h5> <br></br>
                            <p className="card-text">Our aim is to give adive to people on a social or personal level. In assisting and guiding clients, especially by a trained person on a proffessional basis, to resolve especially personal,social,or pysychological problems and difficulties.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4" style={{ width: '21rem' }}>
                        <img src={educational} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title">Educational and weekend classes </h5> <br></br>
                            <p className="card-text">Training is teaching ,or developing in oneself or others , any skills and knowledge or fitness that relates to a specific ueseful competencies. Training is the process of learning the skills that you need for a particular job or activity.</p>

                        </div>
                    </div>

                    <div className="card ml-3 mt-4 " style={{ width: '21rem' }}>
                        <img src={community} className="card-img-top" alt="..." style={{ height: '210px' }} />
                        <div className="card-body">
                            <h5 className="card-title"> Community Play Times</h5> <br></br>
                            <p className="card-text">Community services is unpaid work performed by a person or group of people for the benefit and betterment of their community without any form of compensation. Community services is not always performed on a voluntary basis and may be compulsory per situation.</p>

                        </div>
                    </div>

                </div>

            </div>

            <Footer ></Footer>

        </div>
    )

}

/*export default Aboutus;*/