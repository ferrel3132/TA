import Pic1 from "../aset/Background1.jpg";

function dojang() {
    return (
        <>
            <div>
                <div>
                    <header class="masthead">
                        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                            <div class="d-flex justify-content-center">
                                <div class="text-center">
                                    <h1 class="mx-auto my-0 text-uppercase">Dojang Yang Berada di Salatiga</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container" style={{ marginTop: "50px" }}>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header text-center">
                                        Dojang 1
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text text-center">
                                            <img
                                                src={Pic1}
                                                style={{ width: "300px", height: "200px" }}
                                            />
                                            Dojang ini bla bla bla bla, untuk melihat
                                            lokasinya klik <a href="/">link</a> ini
                                        </div>
                                    </div>
                                    <div className="card-footer text-end">
                                        <a href="/">View more...</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <div className="card-header text-center">
                                        Dojang 2
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text text-center">
                                            <img
                                                src={Pic1}
                                                style={{ width: "300px", height: "200px" }}
                                            />
                                            Dojang ini bla bla bla bla, untuk melihat
                                            lokasinya klik <a href="/">link</a> ini
                                        </div>
                                    </div>
                                    <div className="card-footer text-end">
                                        <a href="/">View more...</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <div className="card-header text-center">
                                        Dojang 3
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text text-center">
                                            <img
                                                src={Pic1}
                                                style={{ width: "300px", height: "200px" }}
                                            />
                                            Dojang ini bla bla bla bla, untuk melihat
                                            lokasinya klik <a href="/">link</a> ini
                                        </div>
                                    </div>
                                    <div className="card-footer text-end">
                                        <a href="/">View more...</a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col">
                                <div className="card">
                                    <div className="card-header text-center">
                                        Dojang 4
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text text-center">
                                            <img
                                                src={Pic1}
                                                style={{ width: "300px", height: "200px" }}
                                            />
                                            Dojang ini bla bla bla bla, untuk melihat
                                            lokasinya klik <a href="/">link</a> ini
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="col">
                                <div className="card">
                                    <div className="card-header text-center">
                                        Dojang 4
                                    </div>
                                    <div className="card-body">
                                        <div className="card-text text-center">
                                            <img
                                                src={Pic1}
                                                style={{ width: "300px", height: "200px" }}
                                            />
                                            Dojang ini bla bla bla bla, untuk melihat
                                            lokasinya klik <a href="/">link</a> ini
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default dojang;