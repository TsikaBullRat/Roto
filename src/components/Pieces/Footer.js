import { Link } from 'react-router-dom';

function Footer() {

    return (


        <div className="footer"  style={{color:"white"}}>
        <div className=" row ">
          
                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <i className="bi bi-envelope" style={{ color: 'white', fontSize: 25 }}></i><h6>Phone</h6>
                    <p>0630253221</p>

                </div>

                <div className="text-center col-lg-4 col-md-6 col-sm-12">
                    <i className="bi bi-telephone" style={{ color: 'white', fontSize: 25 }}></i><h6>Email</h6>
                    <p>mphomatthews597@gmail.com</p>

                </div>

                <div class="text-center col-lg-4 col-md-12 col-sm-12">
                    <i className="bi bi-geo-alt-fill" style={{ color: 'white', fontSize: 25 }}></i><h6>Address:</h6>
                    <p>Barkley West</p>
                    <p>Kimberley</p>
                </div>
            </div>
            
            <div className="  d-flex bg-dark col-lg-12 col-sm-12 " style={{ fontSize: 15, color: '#fff' , display:"flex", justifyContent:'center' }}>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div>
                        <p>Copyright: All rights reserved<br />Developed By: Keahara van Blerk and Ntsikayomzi Ngcakani</p>
                    </div>
                </div>
        
        </div>
        </div>
        
    );
}

export default Footer;

