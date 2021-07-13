import { Headline } from './Pieces/Headline';
import Footer from './Pieces/Footer';
import Loader from 'react-spinners/HashLoader';
import React, { useState, useEffect } from 'react'
import mailjs from 'emailjs-com'

export const Contacts = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },
        []
    );
    function sendEmail(e){
        e.preventDefault();

        mailjs.sendForm(
            'service_7yvj03f',
            'template_au3n66h',
            e.target, 'user_6J1Ea28T23gHtil5EVwgk'
        ).then(res =>{
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
        <div>
            {
                loading ? (
                    <div className="text-center" style={{ marginTop: 300 }}><Loader size={300} color={"#27394a"} loading={loading} /></div>
                ) : (<>


                    <div> <Headline headline="Get in touch" />

                        <p className="text-center">Please give us a call, drop us an email or fill out our form and we will get back to you.</p>

                        <div className="row">

                            <div className="col-lg-6  col-sm-12 ">

                                <div className="logos">

                                    <div className="mt-4">
                                        <div className='Space-around'> <i className="bi bi-envelope-fill"></i> Lifeline@gmailcom</div>
                                        <div className='Space-around'> <i className="bi bi-telephone-fill"></i> 0530501067  <br></br></div>
                                        <div className='Space-around'> <i className="bi bi-geo-alt-fill"></i> 1 Lynch St.Homestead,Kimberley,8301 <br></br></div>
                                        <div className='Space-around'> <i className="bi bi-facebook"></i><a href=" https://www.facebook.com "> facebook.com </a></div>
                                        <div className='Space-around'> <i className="bi bi-instagram"></i><a href=" https://www.@Lifeline_nc "> @Lifeline_nc</a></div>


                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6  col-sm-12">

                                <div className="mt-5">
                                    <form onSubmit={sendEmail}>
                                        <input type="email" placeholder="Email" className="form-control w-50" name="email" aria-describedby="emailHelp" />
                                        <input type="text" placeholder="Subject" className="form-control w-50 mt-3" name="subject" aria-describedby="emailHelp" /> <br></br>
                                        <textarea className="form control w-50 mt-3" name="matter" rows="3" placeholder="Message"></textarea> <br></br>
                                        <button name="submit" type="submit" className="btn">send</button> <br></br>
                                    </form>
                                </div>
                                <div>

                                </div>
                            </div>




                        </div></div>

                    <Footer></Footer>
                </>)}
        </div>



    )

    /*export default Contacts*/
}
