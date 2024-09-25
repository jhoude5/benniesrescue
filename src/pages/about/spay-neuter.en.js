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
            <h1>Low cost Spay/Neuter</h1>
            <p>If you have a male or female cat that needs to be spayed/neutered and you can’t afford the vet prices, give a call or email, and we will give you a better rate.</p>
            <p className="center"><a href='mailto:benniesrescue@gmail.com'>benniesrescue@gmail.com</a></p>
            <p className="center"><a href='tel:613-306-2134'>613-306-2134</a></p>
        </div>
      </div>

      <section className="volunteers">
        <Volunteer />
      </section>
      <Footer />
    </main>
  )
}

export default SpayNeuter
export const Head = () => <title>Low cost Spay/Neuter</title>

