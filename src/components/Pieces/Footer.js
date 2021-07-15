import { Link } from 'react-router-dom';

function Footer() {

    return (

        <div className=" row footer">
            <div className="d-flex mt-2 col-lg-12 col-md-12 col-sm-12">
            
            <div className="text-center col-lg-4 col-md-6 col-sm-12">
            <i className="bi bi-envelope" style={{ color: '#000', fontSize: 24 }}></i><h2>Phone</h2>
                <h4><b>0630253221</b></h4>
                <h4>Head Office</h4>
            </div>

            <div className="text-center col-lg-4 col-md-6 col-sm-12">
            <i className="bi bi-telephone" style={{ color: '#000', fontSize: 24 }}></i><h2>Email</h2>
                <h4><b>mphomatthews597@gmail.com</b></h4>
                <h4>Head Office</h4>
            </div>

            <div class="text-center col-lg-4 col-md-12 col-sm-12">
            <i className="bi bi-geo-alt-fill" style={{ color: '#000', fontSize: 24 }}></i><h2>Address:</h2>
                <h4><b>Barkley West</b></h4>
                <h4>Kimberley</h4>
            </div>
        </div>
            <div className="d-flex bg-dark col-lg-12 col-sm-12" style={{ fontSize: 15, color: '#fff' }}>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <p>Copyright: <b>Mlabs South Africa,</b> All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                    </div>

                </div>
                <div className="d-flex col-lg-6 col-md-6 col-sm-12 justify-content-end">
                    <a> <i className="bi bi-facebook mr-3" style={{ fontSize: 30, color: '#fff'}}></i></a>
                    <a> <i className="bi bi-instagram ml-3" style={{ fontSize: 30, color: '#fff'}}></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;

