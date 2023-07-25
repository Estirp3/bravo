import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from '../Ui/components/Navbar'
import { InicioPage, ContactosPage, NoticiasPage, QueHacemosPage, QuienesSomosPage, RepresentacionesPage} from "../contenidoPages/eful"




export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="inicio" element={<InicioPage />} />
                <Route path="quienessomos" element={<QuienesSomosPage />} />
                <Route path="quehacemos" element={<QueHacemosPage />} />
                <Route path="representaciones" element={<RepresentacionesPage />} />
                <Route path="noticias" element={<NoticiasPage />} />
                <Route path="contacto" element={<ContactosPage />} />
                          
                <Route path="/" element={<Navigate to="/inicio" />} />
                <Route path="/*" element={<InicioPage />} />
            </Routes>
        </>
    )
}
