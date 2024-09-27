import * as React from "react";
import Header from "../components/fr/header";
import Footer from "../components/fr/footer";
import Volunteer from "../components/fr/volunteer";


const Thankyou = () => {
  return (
    <main>
        <Header />
        <div className="container thank-you">
            <h1>Merci de nous avoir contactés</h1>
            <p>Nous vous répondrons sous peu.</p>
        </div>
        <section className="volunteers">
            <Volunteer />
        </section>
        <Footer />
      
    </main>
  )
}

export default Thankyou

export const Head = () => <title>Merci</title>
