import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";




function SoopstenijaCards({ data }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div>
            <div className="soopstenijaHeadline">
              <p>Соопштенија</p>
            </div>
            <div className="soopstenijaCards row">
              {data.map((item) => (
                <div key={item.id} className="col-md-4 mb-4" >
                  <div className="soopstenija-card">
                    <div className="card-body-soopstenija">
                      <h6 className="card-title-soopstenija">{item.title}</h6>
                      <h6 className="card-subtitle-soopstenija mb-2 text-body-secondary primary-dark-blue">
                        {item.date}
                      </h6>
                      <p className="card-text-soopstenija">{item.text}</p>
                      <a href="#" className="card-link-soopstenija secondary-magenta">
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoopstenijaCards;