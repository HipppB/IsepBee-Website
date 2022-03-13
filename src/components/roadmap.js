import "../style/roadmap.css";

function roadmap() {
    return (
        <div classNameName="main-container">
            <br/>
            <br/>
            <section className="timeline">

                <div className="timeline-line">
                    <span className="line arrow-right"></span>
                    <span className="timeline-innerline"></span>
                </div>



                <ul>

                    <li>
                        <span className="timeline-point"></span>
                        <span className="date">Phase 1</span>
                        <p>Thinking about the project, discussing pros and cons</p>
                    </li>

                    <li>
                        <span className="timeline-point"></span>
                        <span className="date">Phase 2</span>
                        <p>Design, name and establishement of basic securities rules</p>
                    </li>

                    <li>
                        <span className="timeline-point"></span>
                        <span className="date">Phase 3</span>
                        <p>Developement of the token  and the website. Testing the concept to collect data</p>
                    </li>

                    <li>
                        <span className="timeline-point"></span>
                        <span className="date">Phase 4</span>
                        <p>Deployement of a beta version for members of IsepInvest and blockchain lab</p>
                    </li>

                    <li>
                        <span className="timeline-point"></span>
                        <span className="date">Phase 5</span>
                        <p>Global rollout</p>
                    </li>

                </ul>

            </section>
        </div>
    );
}

export default roadmap;