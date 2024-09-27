import * as React from "react";
import Header from '../components/fr/header';
import '../sass/styles.scss';
import Bennie1 from '../files/Bennie1.png';
import Bennie2 from '../files/Bennie2.png';
import Footer from "../components/fr/footer";
import Adopt from "../components/fr/adopt";
import rightarrow from '../files/rightarrow.png';


const About = () => {
  return (
    <main>
      <Header page='/en/about'/>
      <div className="aboutus container">
        <div className="row">
          <h1>À propos de nous</h1>
          <div className="col-md-6">
            <img src={Bennie1} alt='bennie the dog' />
          </div>
          <div className="col-md-6">
            <img src={Bennie2} alt='bennie the dog' />
          </div>
        </div>   
      </div>
      <div className="about-content container">
        <p>Chez Bennie’s Rescue, notre mission est de fournir un refuge sûr aux chats abandonnés, maltraités et sans abri, en assurant leur bien-être et leur bonheur grâce à des soins compatissants et des pratiques d’adoption responsables.</p>
<br></br>
        <p><strong>Nous nous consacrons à :</strong></p>
        <ol>
          <li>Sauvetage : Sauver les chats en détresse dans les refuges, les rues et les environnements dangereux.</li>
          <li>Réadaptation : fournir des soins médicaux, de la nourriture et un soutien émotionnel pour les aider à récupérer et à s’épanouir.</li>
          <li>Adoption : associer chaque chat à des foyers aimants et permanents qui comprennent et répondent à ses besoins uniques.</li>
          <li>Éducation : Promouvoir la sensibilisation à la possession responsable d’animaux de compagnie, à la stérilisation et à l’importance du bien-être animal.</li>
          <li>Soutien communautaire : créer un réseau de bénévoles, de foyers d’accueil et de sympathisants pour créer une communauté compatissante pour les chats et leurs soignants.</li>
        </ol>
        <br></br><br></br>
        <p>Grâce à nos efforts, nous visons à réduire le nombre de chats sans abri, à améliorer leur qualité de vie et à célébrer la joie et la compagnie que les chats apportent à nos vies.</p>
      </div>

      <div className="container link-board-members">
        <a href='/board-members'>Voir tous les membres du conseil d'administration <img src={rightarrow} alt="" /></a>
      </div>
      <section className="adopt-cta">
       <Adopt />
      </section>
      <Footer />
    </main>
  )
}

export default About

export const Head = () => <title>À propos</title>

