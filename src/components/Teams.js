import profile from '../assets/profile.png';
import { Headline } from './Pieces/Headline';
import Footer from './Pieces/Footer';
import Tshegofatso from '../assets/deputy chairperson -Tshegofatso Modise.jpeg'
import Kedibone from '../assets/treasurer-Kedibone Lekgetho.jpeg'
import Sharon from '../assets/acting secretary- Sharon Nyirenda.jpeg'


export const Teams = () => {

    return (
        <>
            <Headline headline="Our Team" />
            <p className="text-center" style={{ fontSize: 20 }}>We operate a non-profit multipurpose facility governed by an active 4 member volunteer bored of directors. </p>

            <div className="row justify-content-center">
                <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                    <img src={profile} className="card-img-top mt-3 ml-3" style={{ width: '230px', height: '230px', borderRadius: '50%' }} />
                    <div className="card-body">
                        <h5>Founder And Manager:</h5>
                        <p>Mpho Matthews  </p>
                    </div>
                </div>

                <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                    <img src={Tshegofatso} className="card-img-top mt-3 ml-3" style={{ width: '230px', height: '230px', borderRadius: '50%' }} />
                    <div className="card-body">
                        <h5> Deputy Chairperson</h5>
                        <p>Tshegofatso Modise</p>
                    </div>
                </div>

                <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                    <img src={Kedibone} className="card-img-top mt-3 ml-3" style={{ width: '230px', height: '230px', borderRadius: '50%' }} />
                    <div className="card-body">
                        <h5>Treasurer</h5>
                        <p>Kedibone Lekgetho</p>
                    </div>
                </div>

                <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                    <img src={Sharon} className="card-img-top mt-3 ml-3" style={{ width: '230px', height: '230px', borderRadius: '50%' }} />
                    <div className="card-body">
                        <h5> Acting Secretary</h5>
                        <p>Sharon Nyirenda</p>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: 190 }}><Footer /></div>
        </>

    )
}