import { Headline } from './Headline';

export const Goals = () =>{ 
    return(
        <>
            <div className="mr-1 mb-n5 text-center">
                <Headline headline="Reach One Teach One" />
            </div>
            <div class="row justify-content-center mt-4 mb-4">
            <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i className="bi bi-emoji-smile " style={{ fontSize: 120, padding: 50, color: "#ff2400" }}></i>
                    <h5>ROTO’S current enrollment is</h5>
                    <h5>8 students.</h5>
                    <br />
                </div>

                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i className="bi bi-house-door" style={{ fontSize: 120, padding: 50, color: "#1fcecb" }}></i>
                    <h5>2020 We finally have our  own school premises from  donated land.
                    </h5>
                    <br />
                </div>
                <div className="text-center col-sm-12 col-lg-2">
                    <br />
                    <i class="bi bi-clock" style={{ fontSize: 120, padding: 50, color: "#ffef00" }}></i>
                    <h5>This year we celebrate 8  years </h5>
                    <h5>in the school's  operation</h5>
                </div>
            </div>
        </>
)
}