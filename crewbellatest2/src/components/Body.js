import React from 'react';
import "./Body.css";

export default function Body() {
    return <div >

        <div class="container-fluid py-5 bg-light">
            <div class="row py-5 ps-5 pe-0">
                <div class="col-md-6 m-0 p-4 body1">
                    <h5 class="text-danger fw-bold">INTERNATIONAL UNIWOOD FILM FESTIVAL</h5>
                    <h4 class="text-bold fw-bold">the short film challenge</h4>
                    <div class="col-md-6">
                        <label for="text" class="form-label">Film Link (YouTube / Vimeo / Google Drive)</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="col-md-6">
                        <label for="text" class="form-label">Title</label>
                        <input type="text" class="form-control" />
                    </div>
                    <img src='https://cdn.jsdelivr.net/gh/FrontCrewbella/sttc/img/main/events/filmmaking.png' alt='' />
                </div>
                <div class="col-md-6 m-auto p-4 body2">

                    <form class="row g-3">
                        <div class="col-12">
                            <label for="inputAddress" class="form-label">Visibility to audience?</label>
                            <select class="form-select" id="autoSizingSelect">
                                <option selected>Keep it Public</option>
                            </select>

                        </div>
                        <div class="col-md-6">
                            <label for="text" class="form-label">Film and Team Description</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label for="text" class="form-label">Name</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="text" class="form-label">Phone</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label for="text" class="form-label">Instagram</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label for="text" class="form-label">Facebook</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Country</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6 py-2">
                            <label>Is file password protected?</label>
                            <br></br>
                            <button type='submit' class='btn btn-outline-danger rounded-pill'>Enter here</button>
                        </div>
                        <div class="col-12">
                            <label>By clicking "POST NOW" you agree to the</label>
                        </div>
                        <div class="col-md-4">
                            <button type="submit" class="btn btn-outline-danger">POST NOW (FREE)</button>
                        </div>
                        <div class="col-md-4">
                            <button type="submit" class="btn btn-danger">POST NOW ($15)</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    </div>;
}
