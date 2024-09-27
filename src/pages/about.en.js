import * as React from "react";
import Header from '../components/header';
import '../sass/styles.scss';
import Bennie1 from '../files/Bennie1.png';
import Bennie2 from '../files/Bennie2.png';
import Footer from "../components/footer";
import Adopt from "../components/adopt";
import rightarrow from '../files/rightarrow.png';


const About = () => {
  return (
    <main>
      <Header page='/fr/about'/>
      <div className="aboutus container">
        <div className="row">
          <h1>About Us</h1>
          <div className="col-md-6">
            <img src={Bennie1} alt='bennie the dog' />
          </div>
          <div className="col-md-6">
            <img src={Bennie2} alt='bennie the dog' />
          </div>
        </div>   
      </div>
      <div className="about-content container">
        <p>At Bennie’s Rescue, our mission is to provide a safe haven for abandoned, abused, and homeless cats, ensuring their well-being and happiness through compassionate care and responsible adoption practices.</p>
<br></br>
        <p><strong>We are dedicated to:</strong></p>
        <ol>
          <li>Rescue: Saving cats in distress from shelters, streets, and unsafe environments.</li>
          <li>Rehabilitation: Providing medical care, nourishment, and emotional support to help them recover and thrive.</li>
          <li>Adoption: Matching each cat with loving, permanent homes that understand and meet their unique needs.</li>
          <li>Education: Promoting awareness about responsible pet ownership, spaying/neutering, and the importance of animal welfare.</li>
          <li>Community Support: Building a network of volunteers, foster homes, and supporters to create a compassionate community for cats and their caregivers.</li>
        </ol>
        <br></br><br></br>
        <p>Through our efforts, we aim to reduce the number of homeless cats, improve their quality of life, and celebrate the joy and companionship that cats bring to our lives.</p>
      </div>

      <div className="container link-board-members">
        <a href='/board-members'>View all Board Members <img src={rightarrow} alt="" /></a>
      </div>
      <section className="adopt-cta">
        <Adopt />
      </section>
      <Footer />
    </main>
  )
}

export default About

export const Head = () => <title>About</title>

