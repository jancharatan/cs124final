import React from "react";
import Navbar from "../components/Navbar";
import background from "../assets/landingPageBackground.jpg";
import "../App.css";

const LandingPage = () => (
    <div>
        <Navbar />
        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh' }}>
            <div className="welcome-block">
                <h1 className="welcome-message" style={{ fontSize: "32pt", color: "white" }}>
                    Technology, on demand.
                </h1>
                <h3 style={{ marginTop: "0px", color: "white", textAlign: "center", fontSize: "16pt" }}>
                    We have hundreds of gadgets to choose from. <br />
                    Pay for using, not owning. <br />
                    Then upgrade whenever you want.
                </h3>
                <button className="emphasis-button" onClick={(e) => {e.preventDefault(); window.location.href='/#/store';}}>
                    Rent Now!
                </button>
            </div>
        </div>
    </div>
)

export default LandingPage;
