import profile from '../assets/profile.png';
import { Headline } from './Pieces/Headline';
import React, { useState, useEffect } from 'react'
import Loader from 'react-spinners/HashLoader';

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
                        <p className="text-center">We aid in changing peoples lives for the better,to ensure that your physical ,emotional and mental health is cared for. </p>

                <div className="row justify-content-center">
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>My Story</h5>
                            <p>A story told by those who have had problems, and the triumpht of life line</p>
                        </div>
                    </div>
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>My Story</h5>
                            <p>A story told by those who have had problems, and the triumpht of life line</p>
                        </div>
                    </div>
                    <div className="card col-lg-2 col-md-6 col-sm-12 mt-4" style={{ width: '20rem', marginLeft: 25, marginRight: 25 }}>
                        <img src={profile} style={{ width: 250, height: 250 }} />
                        <div className="card-body">
                            <h5>My Story</h5>
                            <p>A story told by those who have had problems, and the triumpht of life line</p>
                        </div>
                    </div>
                </div>
                </>
        )
      }
        </>
    )
}