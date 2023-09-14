import React from 'react';
import Image from 'next/image';
import bootstrap from "bootstrap/dist/css/bootstrap.css";


const ZaNasMain = (props) => {
  const { title, content, img } = props;

  return (
     <div className="section-padding pad-top ">
      <h2 className='font-weight-bolder font-family-exo mb-4'>
        {title}
      </h2>
      <p className='my-4 text-align-left'>{content}</p>
      {img && (
          <Image
          src={img}
          alt="pattern"
          width={800}
          height={200}
          style={{
              maxWidth: "100%",
              height: "auto"
            }}
            />
            )}

            </div>
  );
};

export default ZaNasMain;
