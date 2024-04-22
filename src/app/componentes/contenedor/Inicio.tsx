export const Inicio = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center text-center">
        <div className="col-md-7">
          <div className="col-lg-11">
            <svg
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <div className="pt-1 d-flex justify-content-center">
              <div className="col-md-4">
                <h2 className="fw-normal">Heading</h2>
              </div>
            </div>
            <div className="pt-1 d-flex justify-content-center">
              <div className="col-md-12">
                <p>
                  Another exciting bit of representative placeholder content.
                  This time, we've moved on to the second column.
                </p>
                <p></p>
                <div className="pt-3 d-flex justify-content-center">
                  <div className="col-md-6">
                    <a className="btn btn-secondary" href="#">
                      View details »
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
