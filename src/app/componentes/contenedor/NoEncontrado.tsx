import noVisible from "../../../assets/img/noVisible.png";

export const NoEncontrado = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-4">
          <img src={noVisible} alt="novisible" />
          <h3>
            Oh no! esto no deberia de haber pasado parece que hubo un error...
          </h3>
        </div>
      </div>
    </>
  );
};
