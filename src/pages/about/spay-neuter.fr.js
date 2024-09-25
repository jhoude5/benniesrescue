import * as React from "react";
import Header from '../../components/header';
import '../../sass/styles.scss';
import Footer from "../../components/footer";
import Volunteer from "../../components/volunteer";


const SpayNeuter = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="row">
            <h1>Stérilisation à faible coût</h1>
            <p>Si vous avez un chat mâle ou femelle qui a besoin d'être stérilisé et que vous ne pouvez pas vous permettre les prix du vétérinaire, appelez-nous ou envoyez-nous un e-mail et nous vous proposerons un meilleur tarif.</p>
            <p className="center"><a href='mailto:benniesrescue@gmail.com'>benniesrescue@gmail.com</a></p>
            <p className="center"><a href='tel:613-306-2134'>613-306-2134</a></p>
        </div>
      </div>
      <Volunteer />
      <Footer />
    </main>
  )
}

export default SpayNeuter
export const Head = () => <title>Stérilisation à faible coût</title>
