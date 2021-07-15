import { Link } from 'react-router-dom';

function Footer() {

    return (

        <div className=" row footer">
            <div className="d-flex mt-2 col-lg-12 col-md-12 col-sm-12"style={{color:'white'}}>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <i className="bi bi-envelope" style={{ color: 'white', fontSize: 25 }}></i><h2>Phone</h2>
                    <p><b>0630253221</b></p>

                </div>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <i className="bi bi-telephone" style={{ color: 'white', fontSize: 25 }}></i><h2>Email</h2>
                    <p><b>mphomatthews597@gmail.com</b></p>

                </div>

                <div class="text-center col-lg-4 col-md-12 col-sm-12">
                    <i className="bi bi-geo-alt-fill" style={{ color: 'white', fontSize: 25 }}></i><h2>Address:</h2>
                    <p><b>Barkley West</b></p>
                    <p>Kimberley</p>
                </div>
            </div>
            <div className="d-flex bg-dark col-lg-12 col-sm-12" style={{ fontSize: 15, color: '#fff' }}>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <p>Copyright: <b>Mlabs South Africa,</b> All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

