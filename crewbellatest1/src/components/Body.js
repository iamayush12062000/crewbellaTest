import React from 'react';
import "./Body.css"

export default function Body() {
    return <div className='bg-light'>
        <div className="container-fluid py-4">
            <div className="row p-5">
                <div className="col-md-5 ms-5 py-4 ps-5 text-start">
                    <h1 className="display-1 fw-bold">events</h1>
                    <h5 className="text-muted">we conduct various competitions that revolve around your talent. be it photography, film, illustrations. you can participate and win various prizes.</h5>
                    <div className="row my-4">
                        <div className="col-md m-0 p-1">
                            <p className="btn btn-outline-danger rounded-pill px-0 py-2 w-100">Check posts</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 m-auto p-4">
                    <div className="shadow border rounded-3 p-3">
                        <p className="btn px-0 text-start w-100">
                            <div className="row">
                                <div className="col-md-6 col-10 m-auto p-3">
                                    <h5 className="fw-bold">Ambassador Program</h5>
                                </div>
                            </div>
                        </p>
                        <hr />
                        <p className="px-0 text-start w-100" >
                            <div className="row">

                                <div className="col-md-6 col-10 m-auto p-3">
                                    <h5 className="fw-bold">Winners & Jury</h5>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5">
            <div className="row">
                <div className="col-md-6 m-0 p-4">

                    <img src='https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/main/events/filmmaking.png' alt='' />
                </div>
                <div className="col-md-6 m-auto p-4">
                    <h1 className="text-danger text-start fw-bold display-3">the <br />Film Making <br /></h1>
                    <h1 className="text-decoration-underline text-danger text-start fw-bold display-3"> challenge</h1>
                    <h5 className="py-2 text-muted text-start">Lights, Camera, Action! <br /> Film Making competition is just a way to fulfill your imagination and bring it to life. Dreams turning into Reels.</h5>
                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 m-0 p-1">

                    <img src='https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/main/events/photography.png' alt='' />
                </div>
                <div className="col-md-6 m-auto p-4">
                    <h1 className="text-danger text-start fw-bold display-3">the <br />photography <br /></h1>
                    <h1 className="text-decoration-underline text-danger text-start fw-bold display-3"> challenge</h1>
                    <h5 className="py-2 text-muted text-start">Capture memories, capture hearts! <br /> A picture can explain everything that you want to say. A single frame, a million words.</h5>
                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 m-auto p-4">
                    <h1 className="text-danger text-start fw-bold display-3">the <br />writing <br /></h1>
                    <h1 className="text-decoration-underline text-danger text-start fw-bold display-3"> challenge</h1>
                    <h5 className="py-2 text-muted text-start">Tell your story! Write and let the world know how colourful your words can be.</h5>
                </div>
                <div className="col-md-6 m-0 p-1">

                    <img src='https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/main/events/writing.png' alt='' />
                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 m-auto p-4">
                    <h1 className="text-danger text-start fw-bold display-3">the <br />design <br /></h1>
                    <h1 className="text-decoration-underline text-danger text-start fw-bold display-3"> challenge</h1>
                    <h5 className="py-2 text-muted text-start">Art is born out of every moment. Design yourself. Make your art worthwhile.</h5>
                </div>
                <div className="col-md-6 m-0 p-1">

                    <img src='https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/main/events/design.png' alt='' />
                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 m-0 p-1">

                    <img src='https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/main/events/editing.png' alt='' />
                </div>
                <div className="col-md-6 m-auto p-4">
                    <h1 className="text-danger text-start fw-bold display-3">the <br />editing <br /></h1>
                    <h1 className="text-decoration-underline text-danger text-start fw-bold display-3"> challenge</h1>
                    <h5 className="py-2 text-muted text-start">Editing is putting together. <br /> Let's see who can put together their dreams and make their editing skills shine.</h5>
                </div>
            </div>
        </div>

        <footer className="mb-4 py-5 text-center container-fluid border-top">
            <h5 className="mb-0"><b>Crewbella</b></h5>
            <a className="btn btn-sm text-muted p-0" href="/privacy" target="_BLANK">Privacy Policy</a>
            <span className="text-muted"> | </span>
            <a className="btn btn-sm text-muted p-0" href="/terms" target="_BLANK">Terms & Condition</a>
        </footer>

    </div>;
}
