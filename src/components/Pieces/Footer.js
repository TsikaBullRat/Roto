import { Link } from 'react-router-dom';

function Footer() {

    return (


        <div className="footer" style={{ color: "white" }}>
            <div className=" row ">

                <div class="text-center col-lg-3 col-md-12 col-sm-12">
                    <i className="bi bi-geo-alt-fill" style={{ color: 'white', fontSize: 25 }}></i><h6>Address:</h6>
                    <p>3182 Dahlia Street,De Beershoogte</p>
                    <p>Barkley West</p>
                    <p>Kimberley 8309</p>
                </div>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <i className="bi bi-envelope" style={{ color: 'white', fontSize: 25 }}></i><h6>Phone</h6>
                    <p>Mpho Matthews</p>
                    <p>0630253221</p>
                </div>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <i className="bi bi-telephone" style={{ color: 'white', fontSize: 25 }}></i><h6>Email</h6>
                    <p>Mpho Matthews</p>
                    <p>mphomatthews597@gmail.com</p>
                </div>

            </div>

            <div className=" bg-dark col-lg-12 col-sm-12" >
                <div className="col-lg-11 col-md-6 col-sm-12 " style={{ fontSize: 15, color: '#fff', display: "flex", justifyContent: 'center' }}>
                    <div className="ml-1 pt-3">
                        <p >Copyright: All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Footer;

