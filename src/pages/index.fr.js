import React from 'react'; 
import Header from '../components/fr/header';
import '../sass/styles.scss';
import headerimg from '../files/headerimg.png';
import trap from '../files/trap.png';
import adopt from '../files/adoption.svg';
import spayneuter from '../files/spay-neuter.png';
import Foster from "../components/fr/foster";
import Volunteer from "../components/fr/volunteer";
import Footer from "../components/fr/footer";
import Adoptions from "../components/Adoptionsfr";
import SuccessStories from "../components/Successstoriesfr";
import mainstreet from '../files/mainstreet.jpeg';
import houseofcommons from '../files/houseofcommons.png';
import harrington from '../files/harrington.png';
import chasseur from '../files/hoteldechasseur.png';
import grenville from '../files/grenville.png';
import petvalue from '../files/petvalue.png';
import arundel from '../files/arundel.png';
import imageUrl from '../files/paws.jpg';

const IndexPage = () => {
  const divStyles = {
    backgroundImage: `url(${imageUrl})`,
  }
  return (
    <main>
      <Header page='/en/'/>
      <section>
        <div className="container">
          <div className="row">
          <div className="col-md-4 header">
              <h1 className="header-title">Sauvetage Bennie's</h1>
              <p>Organisation à but non lucratif</p>
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
            <p>En 2023, nous avons eu <strong>307</strong> adoptions</p>
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Services offerts</h2>
        <div className="container">
          <div className="row service-wrapper">
            <div className="service col-md-4">
              <img src={trap} alt=''/>
              <p>Capturer, stériliser et relâcher</p>
            </div>
            <div className="service col-md-4 adopt">
              <img src={adopt} alt='' />
              <p>Adoptions abordables</p>
            </div>
            <div className="service col-md-4">
              <img src={spayneuter} alt=''/>
              <p>Stérilisation à faible coût</p>
            </div>
          </div>
        </div>
      </section>
      <section className="foster">
        <Foster />
      </section>
      <section className="adoptions" style={divStyles}>
        <Adoptions />
      </section>
      <section className="sponsors">
        <h2>Commanditaires</h2>
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
      <section className="success" style={divStyles}>
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


export const Head = () => <title>Page d'accueil</title>
