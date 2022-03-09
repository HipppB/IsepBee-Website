import "../style/roadmap.css";

function roadmap() {
    return (
        <div className="main-container">
            <section id="timeline" className="timeline-outer">
                <div className="container" id="content">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <ul className="timeline">
                                <li className="event" data-date="01 December 2021 ">
                                    <h3>Development</h3>
                                    <p>
                                        Development of the IBEP token
                                    </p>
                                </li>
                                <li className="event" data-date="December 2021">
                                    <h3>Deployment</h3>
                                    <p>
                                        Deployment of the IBEP token internally
                                    </p>
                                </li>
                                <li className="event" data-date="December 2021">
                                    <h3>Website</h3>
                                    <p>Creation of the website
                                    </p>
                                </li>
                                <li className="event" data-date="2022">
                                    <h3>Beginning</h3>
                                    <p>Start of the fund in-house at IsepInvest only</p>
                                </li>
                                <li className="event" data-date="2022">
                                    <h3>Opening</h3>
                                    <p>Opening the fund to a few insiders only</p>
                                </li>
                                <li className="event" data-date="2022">
                                    <h3>Audits</h3>
                                    <p>Legal checks and that everything is working well and ready</p>
                                </li>
                                <li className="event" data-date="2022">
                                    <h3>launch</h3>
                                    <p>Launch of the fund in public at Isep</p>
                                </li>
                                <li className="event" data-date="2022">
                                    <h3>Bots</h3>
                                    <p>Creation of the different bots</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </div>
    );
}

export default roadmap;