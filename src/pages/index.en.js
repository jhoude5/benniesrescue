import * as React from "react";
import Header from '../components/header';
import '../sass/styles.scss';
import headerimg from '../files/headerimg.png';
import trap from '../files/trap.png';
import adopt from '../files/adoption.svg';
import spayneuter from '../files/spay-neuter.png';
import Foster from "../components/foster";
import Volunteer from "../components/volunteer";
import Footer from "../components/footer";
import Adoptions from "../components/adoptions";
import SuccessStories from "../components/sucessstories";
import mainstreet from '../files/mainstreet.jpeg';
import houseofcommons from '../files/houseofcommons.png';
import harrington from '../files/harrington.png';
import chasseur from '../files/hoteldechasseur.png';
import grenville from '../files/grenville.png';
import petvalue from '../files/petvalue.png';
import arundel from '../files/arundel.png';

const IndexPage = () => {
  return (
    <main>
      <Header />
      <section>
        <div className="container">
          <div className="row">
          <div className="col-md-4 header">
              <h1 className="header-title">Bennie's Rescue</h1>
              <p>Non-profit Organization</p>
            </div>
            <div className="col-md-8 header-img">
              <img className='header-title-img' src={headerimg} alt='cartoon kitten playing with ball of yarn'/>
            </div>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="container">
          <div className="row">
            <p>In 2023 we had <span className="bold">307</span> adoptions</p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Services Offered</h2>
        <div className="container">
          <div className="row service-wrapper">
            <div className="service col-md-4">
              <img src={trap} alt=''/>
              <p>Trap Neuter and Release</p>
            </div>
            <div className="service col-md-4 adopt">
              <img src={adopt} alt='' />
              <p>Affordable Adoptions</p>
            </div>
            <div className="service col-md-4">
              <img src={spayneuter} alt=''/>
              <p>Low cost Spay and Neutering</p>
            </div>
          </div>
        </div>
      </section>
      <section className="fosters">
        <Foster />
      </section>
      <section className="adoptions">
        <Adoptions />
      </section>
      <section className="sponsors">
        <h2>Sponsors</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={mainstreet} alt='main street newspaper logo' />
            </div>
            <div className="col-md-4">
              <img src={houseofcommons} alt='house of commons logo' />
            </div>
            <div className="col-md-4">
              <img src={harrington} alt='Harrington township logo' />
            </div>
            <div className="col-md-4">
              <img src={grenville} alt='grenville logo' />
            </div>
            <div className="col-md-4">
              <img src={arundel} alt='arundel golf club logo' />
            </div>
            <div className="col-md-4">
              <img src={chasseur} alt='hotel de chasseur logo' />
            </div>
            <div className="col-md-4">
              <img src={petvalue} alt='pet value logo' />
            </div>
          </div>
        </div>
      </section>
      <section className="success">
        <SuccessStories />  
      </section>
      <section className="volunteers">
        <Volunteer />
      </section>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
