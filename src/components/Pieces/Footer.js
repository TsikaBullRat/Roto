import { Link } from 'react-router-dom';

function Footer() {

    return (

        <div className=" row footer">
            <div className="col-sm-12 ml-4 mt-4" style={{ color: '#fff' }}>
                <div><i className="bi bi-envelope" style={{ color: '#fff', fontSize: 24 }}></i>mphomatthews597@gmail.com <br></br></div>
                <div className='Space-around' > <i className="bi bi-telephone" style={{ color: '#fff', fontSize: 24 }}></i>  0630253221 <br></br></div>
                <div className='Space-around'> <i className="bi bi-geo-alt-fill" style={{ color: '#fff', fontSize: 24 }}></i> Barkley West <br></br></div>
                <br />
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