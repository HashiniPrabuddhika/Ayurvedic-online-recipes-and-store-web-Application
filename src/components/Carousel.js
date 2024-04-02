import React from 'react';
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" id='carousel'>
                  
                    <div className="carousel-item active">
                        <img src="https://as1.ftcdn.net/v2/jpg/01/35/42/76/1000_F_135427639_KGLguNuGTINjdOzZUdNuiVY1CkcD5fcG.jpg" className="d-block w-100" style={{ filter: "brightness(100%)" }} alt="..." />
                        <div className="welcome-text" style={{ backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', borderRadius: '60px', padding: '10px', top: '80px' }}>
                            <h1 style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '28px', fontFamily: 'Open Sans, sans-serif', margin: 0 }}>
                                Welcome To the Natural Ayurvedic Recipes & Products Shopping Center
                            </h1>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://as2.ftcdn.net/v2/jpg/06/52/79/61/1000_F_652796188_56V4nAK63ipgKjjezhG6Wf2l03cl4Q9r.jpg" className="d-block w-100" style={{ filter: "brightness(100%)" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://as2.ftcdn.net/v2/jpg/01/22/36/57/1000_F_122365779_TXWTvWrjAH3O7Cpbx6WdWRFPegl6XhQr.jpg" className="d-block w-100" style={{ filter: "brightness(100%)" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
