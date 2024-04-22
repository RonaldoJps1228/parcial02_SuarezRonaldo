export const CancionCrear = () => {
  return (
    <div className="pt-5 d-flex justify-content-center">
      <div className="col-md-8">
        <form className="row g-3 needs-validation">
          <div className="col-md-6 position-relative">
            <label htmlFor="marcas" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control border border-info"
              id="marca"
              required
            />
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="colores" className="form-label">
              Artista
            </label>
            <input
              type="text"
              className="form-control border border-info"
              id="color"
              required
            />
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="precios" className="form-label">
              Album
            </label>
            <input
              type="text"
              className="form-control border border-info"
              id="precio"
              required
            />
          </div>
          <div className="col-md-6 position-relative">
            <label htmlFor="precios" className="form-label">
              Duracion
            </label>
            <input
              type="text"
              className="form-control border border-info"
              id="precio"
              required
            />
          </div>
          <div className="col-12">
            <button className="btn btn-success " type="submit">
              Crear Cancion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
