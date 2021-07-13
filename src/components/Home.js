import Footer from './Pieces/Footer'
import Summary_1 from './Pieces/Summary_1'
import Loader from 'react-spinners/HashLoader';
import { Jumbotron } from './Pieces/Jumbotron';
import React, { useState, useEffect } from 'react'


export const Home = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => { //useEffect is called with our function arg
    setLoading(true)//We call a function declared in our useState to set loading to true
    setTimeout(() => {//We set our time out which takes to args and the first is a function
      setLoading(false)//We set loading to true
    }, 3000)// we set our time as the second arg which is about 3 seconds
  },
    []//then we have no dependcies
  );//close our useEffect.

  return (
    <>
      {
        loading ? (
          <div className="text-center" style={{ marginTop: 300 }}>
            <Loader size={300} color={"#fa8701"} loading={loading} />
          </div>
        ) : (
          <>
            <Jumbotron />
            <Summary_1 />
            <Footer />
          </>
        )
      }
    </>
  );
}
