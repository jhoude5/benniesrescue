import * as React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../sass/styles.scss';
import Volunteer from "../components/volunteer";
import imgAllanna from '../files/allanna.jpg';
import imgDorothy from '../files/dorothy.jpg';
import imgGeorge from '../files/george.jpg';

const BoardMembers = () => {
  return (
    <main>
      <Header />
      <div className="board-members container">
        <div className="row">
            <h1>Board Members</h1>
            <div className="col-md-4">
            <div className="board-img">
                <img src={imgAllanna}  alt='allana courte'/>
              </div>
              <h2>Allanna Courte</h2>
              <p>CEO and Owner of Bennie's Rescue</p>
            </div>
            <div className="col-md-4">
              <div className="board-img">
                <img src={imgDorothy} alt='dorothy young'/>
              </div>
             <h2>Dorothy Young</h2>
             <p>CEO and Owner of Bennie's Rescue</p>
            </div>
            <div className="col-md-4">
              <div className="board-img">
                <img src={imgGeorge} alt='Goerge Fletcher'/>
              </div>
              <h2>Goerge Fletcher</h2>
              <p>CEO and Owner of Bennie's Rescue</p>
            </div>
            
        </div>
      </div>
      <section className="volunteers">
        <Volunteer />
      </section>
      <Footer />
    </main>
  )
}

export default BoardMembers

export const Head = () => <title>Board Member</title>