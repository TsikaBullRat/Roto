
import { Teams } from './Teams';
import { Goals } from './Pieces/Goals';
import { Background } from './Pieces/Background';
import Footer from './Pieces/Footer';
import Loader from 'react-spinners/HashLoader';
import React, { useState, useEffect } from 'react';

function AboutUs(){

    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    },
      []
    );

    return (
        <>
            {
                loading ? (
                    <div className="text-center" style={{marginTop:300}}><Loader size={300} color={"#fa8701"} loading={loading} /></div>
                ) : (
                    <>
                        <Background />
                        <Goals />
                        <Footer />
                    </>
                ) 
            }
        </>
    )
}
export default AboutUs;