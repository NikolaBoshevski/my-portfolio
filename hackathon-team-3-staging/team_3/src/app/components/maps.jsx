import Link from "next/link";
import React from "react";

export default function Maps() {
  return (
    <div className="ratio" style={{ height: "300px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.451362697065!2d21.434224654019207!3d41.99058780425634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b7e0d48817%3A0x85ad99deccd03cdb!2zSGlnaCBzY2hvb2wg4oCeUmFkZSBKb3bEjWV2c2tpIC0gS29yxI1hZ2lu4oCc!5e0!3m2!1sen!2smk!4v1691835810127!5m2!1sen!2smk"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
