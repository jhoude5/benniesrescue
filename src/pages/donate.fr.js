import * as React from "react";
import Header from '../components/header';
import '../sass/styles.scss';
import Footer from "../components/footer";
import Foster from "../components/foster";


const Donate = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="row center">
            <h1>Dons</h1>
            <p>Pour faire un don, envoyez-nous un virement électronique à :</p>
            
                <p><strong>benniesrescue@gmail.com</strong></p>

            <p>Vous pouvez également faire don de nourriture et de friandises pour chats à :</p>
            <p><strong>160 Chemin de Harrington<br></br>
            Harrington, QC<br></br>
            J8G 2S8</strong></p>

        </div>
      </div>
      <Foster />
      <Footer />
    </main>
  )
}

export default Donate
export const Head = () => <title>Dons</title>

