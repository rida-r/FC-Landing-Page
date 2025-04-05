import Hero from '../components/Hero';
import Footer from '../components/Footer';
import '../App.css';

const Home = () => (
  <div>
    <Hero />

    {/* About Us + Events side-by-side */}
    <div className="grid-two">
  <div>
    <h2>about us</h2>
    <div className="card bordered-card"></div>
  </div>
  <div>
    <h2>events</h2>
    <div className="card bordered-card"></div>
  </div>
</div>


    {/* Sponsorship full width */}
    <div className="full-width">  
  <h2>sponsorships</h2>
  <div className="card bordered-card"></div>
</div>

    {/* Teams section (scrollable cards) */}
    <div className="full-width">
      <h2>our teams</h2>
      <div className="horizontal-scroll">
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
      </div>
    </div>

    {/* What We Stand For full width */}
    <div className="full-width">
  <h2>what we stand for</h2>
  <div className="card bordered-card"></div>
</div>
    {/* Past Shows: grid of 3 */}
    <div className="full-width">
      <h2>past shows</h2>
      <div className="horizontal-scroll">
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
      </div>
    </div>

    <Footer />
  </div>
);

export default Home;
