export const Carrusel = () => {
    const primeraImagen = `/assets/img/imagenesNav/3.jpg`
    const segundaImagen = `/assets/img/imagenesNav/5.jpg`
    const terceraImagen = `/assets/img/imagenesNav/6.jpg`
    return (

        <section className="colortop ">
            <section className="container">
                <div id="carouselExampleCaptions" className="carousel ">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={primeraImagen} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Submarino 209</h3>
                                <p>Servicios y apoyo logístico a submarinos.-</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={segundaImagen} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h3>Hagenuk</h3>
                                <p>Equipos de Comunicaciones Navales</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={terceraImagen} class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h3 >Atlas Elektronik</h3>
                                <p >Sensores acústicos</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>



            </section>

        </section>

    );
};