import * as React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../sass/styles.scss';
import Foster from "../components/foster";


const Volunteer = () => {
  return (
    <main>
      <Header />
      <div className="container volunteer">
        <div className="row">
            <h1>Volunteering</h1>
            <p>Our organization thrives on the dedication and passion of volunteers like you. Whether you have a few hours to spare or can commit to a regular schedule, your time and effort can make a significant impact.</p>

            <p>Currently we are in need of:</p> 
            <p><strong>Drivers</strong> to deliver kittens to new homes, to pick up cans and bottles, to bring cats/kittens to the vet clinic.</p>
            <p><strong>Qualified foster families</strong> with different levels of experience from stray kittens to socialise, others already socialized the time they are vetted and adopted. Must have a spare room to keep them in.</p>
        </div>
      </div>
      <section className="foster">
        <Foster />
      </section>
     
      <Footer />
    </main>
  )
}

export default Volunteer
export const Head = () => <title>Volunteering</title>

