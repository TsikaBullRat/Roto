import profile from '../assets/profile.png';
import { Headline } from './Pieces/Headline';
import React, { useState, useEffect } from 'react'
import Loader from 'react-spinners/HashLoader';
import Footer from './Pieces/Footer';

export const Teams = () =>{
    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    },
        []
    );

    return(
        <> 
         {
        loading ? (
          <div className="text-center" style={{ marginTop: 300 }}>
            <Loader size={300} color={"#fa8701"} loading={loading} />
          </div>
        ) : (
        <>  
                        <Headline headline="Our Team" />
                        <p className="text-center" style={{fontSize:20}}>We operate a non-profit multipurpose facility governed by an active 3 member volunteer bored of directors. </p>

                <div className="row justify-content-center">
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>Founder:</h5>
                            <p>Ms Mpho Matthews 071 801 9052</p>
                        </div>
                    </div>
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>Chairperson</h5>
                            <p>Mrs Gadibolaye Koloi 078 851 0463</p>
                        </div>
                    </div>
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>Vice Chairperson</h5>
                            <p>Mr Steven Jantjies 071 812 4176</p>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: 190}}><Footer/></div>
                </>
        )
      }
        </>
    )
}