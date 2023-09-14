import React from "react";
import Image from "next/image";
import DocumentImage from "../Images/pdf-file.png";
import "bootstrap/dist/css/bootstrap.css";

function Dokumenti() {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <div className="width-80">
            <p className="dokumenti">Документи</p>
            <hr className="dokuments-hr" />
            <a className="download-file" href="/somefile1.txt" download>
              {" "}
              <Image
                src={DocumentImage}
                alt="pdf"
                width={32}
                height={32}
                style={{ maxWidth: "100%", height: "100%" }}
              ></Image>
              | Document name
            </a>
            <br></br>
            <a className="download-file" href="/somefile2.txt" download>
              {" "}
              <Image
                src={DocumentImage}
                alt="pdf"
                width={32}
                height={32}
                style={{ maxWidth: "100%", height: "100%" }}
              ></Image>
              | Document name
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dokumenti;
