import React from 'react';
import me from '../images/me.jpg'

const Card = () => {
    return (
        <>
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded zoom">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img 
                                            src={me}
                                            alt="me"
                                            className="img-fluid"
                                        />
                                    </div>

                                    <div className="col-9">
                                        <h1 id="reduce">Julio César Noguera López</h1>
                                        <hr></hr>
                                        <p id="text">Actually Backend Developer at <a href="http://gosmart.co" rel="noopener noreferrer" target="_blank">@smarttaxicol</a> <br></br>
                                            Previously Course Director at <a href="https://www.platzi.com" rel="noopener noreferrer" target="_blank">@Platzi</a> <br></br>
                                            🇵🇾 in 🇨🇴 <br></br>
                                            'Ani rekyhyjéti rejavyrô guarâ, Ekyhyje nereñeha'âirô guarâ' <br></br>
                                        </p>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>  
        </>
    );
}

export default Card;