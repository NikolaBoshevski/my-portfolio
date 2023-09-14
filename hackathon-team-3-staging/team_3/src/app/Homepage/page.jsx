import Image from "next/image";
import carbon from "../Images/carbon_location.png";
import facebook from "../Images/teenyicons_facebook-outline.png";
import insta from "../Images/teenyicons_instagram-outline.png";
import youtube from "../Images/ri_youtube-line.png";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";



const Homepage = () => {

  return (
    <div className="container-fluid margins">
      
      <div className="button-default-green homepage-frame-216" >
      <div className="homepage-frame-210">
      <div className="homepage-frame-214">
          <div className="homepage-frame-219">
          <Image src={carbon} width={24} height={24} alt="carbon-logo" />
          <p className="p-header">ул. „Трета Македонска Ударна Бригада“ бр. 9</p>
          </div>
          
          
          <div className="homepage-frame-218">
          <Link href="/"><Image src={facebook} width={24} height={24} alt="facebook-logo" /></Link>
          <Link href="/"><Image src={insta} width={24} height={24} alt="insta-logo" /></Link>
          <Link href="/"><Image src={youtube} width={24} height={24} alt="youtube-logo" /></Link>
          </div>
          </div>
      </div>
      <div className="homepage-frame-215">
        <Link href="/" className="za-nas">Е-библиотека</Link>
        <Link href="/" className="za-nas">Microsoft 365</Link>
        <Link href="/" className="za-nas">Е-дневник</Link>

      </div>
        
        
      </div>
      
      
      
    </div>
  );
};

export default Homepage;
