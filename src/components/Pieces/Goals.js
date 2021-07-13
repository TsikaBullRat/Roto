import { Headline } from './Headline';

export const Goals = () =>{ 
    return(
        <>
            <div className="mr-1 mb-n5 text-center">
                <Headline headline="Success Stories" />
                <p>lorem ipsum djkad jadhajhd ahdkahdja ajhdkahdja ajdkajsdj cjdkdhfl </p>
            </div>
            <div class="row justify-content-center mt-5 mb-5">
                <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                    <i class="bi bi-emoji-smile" style={{ fontSize: 100 }}></i>
                    <h4>300 Souls</h4>
                    <h4></h4>
                    <h4>Impacted</h4>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                    <i class="bi bi-check2-circle" style={{ fontSize: 100 }}></i>
                    <h4>300 Projects</h4>
                    <h4></h4>
                    <h4>Completed</h4>
                    </div>
                <div class="col-lg-3 col-md-6 col-sm-12 text-center">
                    <i class=" bi bi-award" style={{ fontSize: 100 }}></i>
                    <h4>300 Goals</h4>
                    <h4></h4>
                    <h4>Achieved</h4>
                </div>
            </div>
        </>
)
}