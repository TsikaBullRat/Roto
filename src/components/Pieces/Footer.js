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
            <div className="bg-dark col-lg-12 col-sm-12 mr-5% text-center " style={{ fontSize: 15, color: '#fff' }}>

                <p>Copyright: <b>Mlabs South Africa,</b> All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>

            </div>
        </div>
    );
}

export default Footer;