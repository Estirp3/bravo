import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    const logoBravo = `/assets/img/icon/logoMarina.png`;
    const banderaAlema = `/assets/img/icon/BanderaAlemania.png`;
    const banderaGrand = `/assets/img/icon/BanderaGB.png`;
    const banderaChile = `/assets/img/icon/CHICUadrada.png`;
    return (
        <>
            <incio className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <img src={logoBravo} className='img' />
                    <div>
                        <div className='cols-sm'>
                            <a class="" href="index.php?idioma=en"><img src={banderaAlema} class="Banderas" /></a>
                            <a class="" href="index.php?idioma=de"><img src={banderaGrand} class="Banderas" /></a>
                            <a class="" href="index.php?idioma=es"><img src={banderaChile} class="Banderas" /></a>
                        </div>
                    </div>

                </div>
            </incio>
            <menuNav className="nav navbar-expand-lg justify-content-center">
                <div className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} letras`} to="/inicio" >Inicio</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} letras`} to="/quienessomos">QuienesSomos</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}letras`} to="/quehacemos">quehacemos</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}letras`} to="/representaciones">Representaciones</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}letras`} to="/noticias">Noticias</NavLink>
                        <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}letras`} to="/contacto">Contactos</NavLink>
                    </div>
                </div>
            </menuNav>
        </>





    )
}