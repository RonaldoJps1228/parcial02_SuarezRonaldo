import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { CancionCrear } from "../../componentes/canciones/CancionCrear";
import { CancionListar } from "../../componentes/canciones/CancionListar";
import { CancionAdmin } from "../../componentes/canciones/CancionAdmin";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/cancionCrear" element={<CancionCrear />}></Route>
      <Route path="/cancionListar" element={<CancionListar />}></Route>
      <Route path="/CancionAdministrar" element={<CancionAdmin />}></Route>
      <Route path="/NoEncontrado" element={<NoEncontrado />}></Route>
    </Routes>
  );
};
