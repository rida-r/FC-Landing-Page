import Nav from '../components/Navbar.js'
import Footer from '../components/Footer';

import BOD1 from '../images/BOD-1.png'
import BOD2 from '../images/BOD-2.png'
import BODC1 from '../images/BOD-C1.png'
import BODC2 from '../images/BOD-C2.png'
import BODC3 from '../images/BOD-C3.png'
import BODC4 from '../images/BOD-C4.png'
import BODC5 from '../images/BOD-C5.png'
import BODC6 from '../images/BOD-C6.png'
import BODC7 from '../images/BOD-C7.png'
import BODC8 from '../images/BOD-C8.png'
import BODC9 from '../images/BOD-C9.png'
import BODC10 from '../images/BOD-C10.png'
import BODC11 from '../images/BOD-C11.png'
import BODC12 from '../images/BOD-C12.png'
import BODC13 from '../images/BOD-C13.png'
import BODC14 from '../images/BOD-C14.png'

import ART_H from '../images/ART-H.png'
import ARTC1 from '../images/ART-C1.png'
import ARTC2 from '../images/ART-C2.png'
import ARTC3 from '../images/ART-C3.png'
import ARTC4 from '../images/ART-C4.png'
import ARTC5 from '../images/ART-C5.png'
import ARTC6 from '../images/ART-C6.png'
import ARTC7 from '../images/ART-C7.png'
import ARTC8 from '../images/ART-C8.png'

import EVEH from '../images/EVE-H.png'
import EVEC1 from '../images/EVE-C1.png'
import EVEC2 from '../images/EVE-C2.png'
import EVEC3 from '../images/EVE-C3.png'
import EVEC4 from '../images/EVE-C4.png'
import EVEC5 from '../images/EVE-C5.png'
import EVEC6 from '../images/EVE-C6.png'
import EVEC7 from '../images/EVE-C7.png'
import EVEC8 from '../images/EVE-C8.png'

import STAH from '../images/STA-H.png'
import STAC1 from '../images/STA-C1.png'
import STAC2 from '../images/STA-C2.png'
import STAC3 from '../images/STA-C3.png'
import STAC4 from '../images/STA-C4.png'
import STAC5 from '../images/STA-C5.png'
import STAC6 from '../images/STA-C6.png'
import STAC7 from '../images/STA-C7.png'
import STAC8 from '../images/STA-C8.png'

import MODH from '../images/MOD-H.png'
import MODC1 from '../images/MOD-C1.png'
import MODC2 from '../images/MOD-C2.png'
import MODC3 from '../images/MOD-C3.png'
import MODC4 from '../images/MOD-C4.png'
import MODC5 from '../images/MOD-C5.png'
import MODC6 from '../images/MOD-C6.png'
import MODC7 from '../images/MOD-C7.png'
import MODC8 from '../images/MOD-C8.png'

const Teams = () => {
    return(
      <div className="teams">
        <Nav/>

        <h1 className="title">Meet the Teams</h1>

        <div className="team-list">
          <a className="team-nav" href='#bod'>board of directors</a>
          <a className="team-nav" href='#art'>artistic</a>
          <a className="team-nav" href='#eve'>events</a>
          <a className="team-nav" href='#sta'>stage</a>
          <a className="team-nav" href='/'>finance</a>
          <a className="team-nav" href='/'>public relations</a>
          <a className="team-nav" href='#mod'>model</a>
        </div>

        {/* Board of Directors */}
        <div className="team-header">
          <div className="header-text">
            <h1>bod</h1>
          </div>
          <img src={BOD1} alt="BOD" id="bod"></img>
          <img src={BOD2} alt="BOD"></img>
        </div>

        <div className="collage">
          <img src={BODC1} alt="bod"></img>
          <img src={BODC2} alt="bod"></img>
          <img src={BODC3} alt="bod"></img>
          <img src={BODC4} alt="bod"></img>
          <img src={BODC5} alt="bod"></img>
          <img src={BODC6} alt="bod"></img>
          <img src={BODC7} alt="bod"></img>
          <img src={BODC8} alt="bod"></img>
          <img src={BODC9} alt="bod"></img>
          <img src={BODC10} alt="bod"></img>
          <img src={BODC11} alt="bod"></img>
          <img src={BODC12} alt="bod"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={BODC13} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={BODC14} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>
        </div>

        {/* Artistic */}
        <div className="team-header">
          <div className="header-text">
            <h1>artistic</h1>
          </div>
          <img src={ART_H} alt="ART" id="art"></img>
        </div>

        <div className="summary">
          <p>The Artistic Team is responsible for shaping the creative vision of the production. This group includes choreographers and designers with other creative roles who work together to bring each scene to life. They oversee choreography, fashion design, lighting, music, and overall aesthetics, ensuring a cohesive and visually engaging performance. Collaboration, creativity, and strong time management are essential as they lead rehersals, attend workshops, and execute their artistic concepts on schedule.</p>
        </div>

        <div className="collage">
          <img src={ARTC1} alt="artistic team"></img>
          <img src={ARTC2} alt="artistic team"></img>
          <img src={ARTC3} alt="artistic team"></img>
          <img src={ARTC4} alt="artistic team"></img>
          <img src={ARTC5} alt="artistic team"></img>
          <img src={ARTC6} alt="artistic team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>Choreographers</h1>
            <ul>
              <li>Experience in one or more dance styles (Hip-Hop, Contemporary, Jazz, etc.).</li>
              <li>Choreograph, teach, and coordinate lighting/music for your scene.</li>
              <li>Lead independent rehearsals (Winter Term).</li>
              <li>Attend the Dance Workshop (Fall Term).</li>
              <li>Strong time management skills.</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={ARTC7} alt="choreographers"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={ARTC8} alt="designers"></img>
          </div>

          <div className="inner-1">
            <h1>Designers</h1>
            <ul>
              <li>Experience in fashion or jewelry design.</li>
              <li>Create designs, a catwalk, and coordinate lighting/music for your sccene.</li>
              <li>Collaborate with your stylist.</li>
              <li>Lead independent rehearsals (Winter Term).</li>
              <li>Attend the Model Workshop (Fall Term).</li>
              <li>Strong time management skills.</li>
            </ul>
          </div>
        </div>

        <div className="team-header">
          <div className="header-text">
            <h1>events</h1>
          </div>
          <img src={EVEH} alt="EVE" id="eve"></img>
        </div>

        <div className="summary">
          <p>summary</p>
        </div>

        <div className="collage">
          <img src={EVEC1} alt="artistic team"></img>
          <img src={EVEC2} alt="artistic team"></img>
          <img src={EVEC3} alt="artistic team"></img>
          <img src={EVEC4} alt="artistic team"></img>
          <img src={EVEC5} alt="artistic team"></img>
          <img src={EVEC6} alt="artistic team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={EVEC7} alt="choreographers"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={EVEC8} alt="designers"></img>
          </div>

          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>
        </div>

        {/* Stage */}
        <div className="team-header">
          <div className="header-text">
            <h1>stage</h1>
          </div>
          <img src={STAH} alt="STA" id="sta"></img>
        </div>

        <div className="summary">
          <p>summary</p>
        </div>

        <div className="collage">
          <img src={STAC1} alt="stage team"></img>
          <img src={STAC2} alt="stage team"></img>
          <img src={STAC3} alt="stage team"></img>
          <img src={STAC4} alt="stage team"></img>
          <img src={STAC5} alt="stage team"></img>
          <img src={STAC6} alt="stage team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={STAC7} alt="choreographers"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={STAC8} alt="designers"></img>
          </div>

          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>
        </div>

        {/* Model */}
        <div className="team-header">
          <div className="header-text">
            <h1>model</h1>
          </div>
          <img src={MODH} alt="MOD" id="mod"></img>
        </div>

        <div className="summary">
          <p>summary</p>
        </div>

        <div className="collage">
          <img src={MODC1} alt="model team"></img>
          <img src={MODC2} alt="model team"></img>
          <img src={MODC3} alt="model team"></img>
          <img src={MODC4} alt="model team"></img>
          <img src={MODC5} alt="model team"></img>
          <img src={MODC6} alt="model team"></img>
        </div>

        <div className="box">
          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>

          <div className="inner-2">
            <img src={MODC7} alt="models"></img>
          </div>
        </div>

        <div className="box">
          <div className="inner-2">
            <img src={MODC8} alt="models"></img>
          </div>

          <div className="inner-1">
            <h1>summary</h1>
            <ul>
              <li>summary</li>
            </ul>
          </div>
        </div>

        <Footer/>
      </div>
    )
  };
  
  export default Teams;
  