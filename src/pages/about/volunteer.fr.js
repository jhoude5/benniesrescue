import * as React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../sass/styles.scss';
import Foster from "../../components/foster";


const Volunteer = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="row">
            <h1>Volontariat</h1>
            <p>Notre organisation prospère grâce au dévouement et à la passion de bénévoles comme vous. Que vous ayez quelques heures de libre ou que vous puissiez vous engager à respecter un horaire régulier, votre temps et vos efforts peuvent avoir un impact significatif.</p>

            <p>Nous avons actuellement besoin de :</p> 
            <p><strong>Des chauffeurs</strong> pour livrer des chatons à de nouveaux foyers, pour récupérer des canettes et des bouteilles, pour amener des chats/chatons à la clinique vétérinaire.</p>
            <p><strong>Familles d'accueil qualifiées</strong> avec différents niveaux d'expérience, des chatons errants à socialiser, d'autres déjà socialisés au moment où ils sont examinés et adoptés. Il faut avoir une pièce libre pour les garder.</p>
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
export const Head = () => <title>Volontariat</title>

