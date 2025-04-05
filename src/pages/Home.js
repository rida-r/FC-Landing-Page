import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../App.css';

const Home = () => (
  <div>
    <Hero />
    <Section title="about us"></Section>
    <Section title="events"></Section>
    <Section title="sponsorships"></Section>
    <Section title="our teams">
      <div className="card-scroll">
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
        <div className="team-card" />
      </div>
    </Section>
    <Section title="what we stand for"></Section>
    <Section title="past shows">
      <div className="card-row">
        <div className="show-card" />
        <div className="show-card" />
        <div className="show-card" />
      </div>
    </Section>
    <Footer />
  </div>
);

export default Home;
