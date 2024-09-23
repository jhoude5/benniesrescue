import * as React from "react";
import Header from '../components/header';
import '../sass/styles.scss';
import Footer from "../components/footer";
import Foster from "../components/foster";


const Donate = () => {
  return (
    <main>
      <Header />
      <div className="container donations">
        <div className="row center">
            <h1>Donations</h1>
            <p>To donate, send us an e-transfer to:</p>
            
            <p><strong>benniesrescue@gmail.com</strong></p>

            <p></p>
            <p>You can also donate any cat food and treats to:</p>
            <p><strong>160 Chemin de Harrington<br></br>
            Harrington, QC<br></br>
            J8G 2S8</strong></p>

        </div>
      </div>
      <section className="foster">
        <Foster />
      </section>
      <Footer />
    </main>
  )
}

export default Donate
export const Head = () => <title>Donate</title>
