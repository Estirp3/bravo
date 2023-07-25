export const Colaboradores = () => {
    const primeraImagen = `/assets/img/logos/atlas-elektronik-removebg-preview.png`
    const segundaImagen = `/assets/img/logos/logo-wh-removebg-preview.png`
    const terceraImagen = `/assets/img/logos/simlogo-removebg-preview.png`
    const cuartaImagen = `/assets/img/logos/thyssenkrupp.png`
    const quintaImagen = `/assets/img/logos/schoenrock-hydraulik.png`
    
    return (
        <section className='colortop'>
            <nav class="navbar navbar-expand-lg  ">
                <nav class="navbar navbar-custom ">
                    <div class="col-sm Banderas">
                        <a href="http://www.atlas-elektronik.com" target="_blank"><img src={primeraImagen}
                            class="rounded mx-auto d-block imagenes" alt="" /></a>
                    </div>

                    <div class="col-sm Banderas">
                        <a href="http://www.enersys-emea.com" target="_blank"> <img
                            class="rounded mx-auto d-block imagenes " src={segundaImagen} alt="" /></a>
                    </div>
                    <div class="col-sm Banderas">
                        <a href="http://www.sim-secure.de" target="_blank"><img
                            class="rounded mx-auto d-block imagenes" src={terceraImagen} alt="" /></a>
                    </div>
                    <div class="col-sm Banderas">
                        <a href="https://www.thyssenkrupp-marinesystems.com/en/" target="_blank"><img
                            class="rounded mx-auto d-block imagenes" src={cuartaImagen} alt="" /></a>
                    </div>
                    <div class="col-sm Banderas">
                        <a href="https://www.thyssenkrupp-marinesystems.com/en/" target="_blank"><img
                            class="rounded mx-auto d-block imagenes" src={quintaImagen} alt="" /></a>
                    </div>
              
                </nav>
            </nav>

        </section>

    )
}
import React from 'react'

