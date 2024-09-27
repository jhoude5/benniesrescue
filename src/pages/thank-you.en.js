import * as React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Volunteer from "../components/volunteer";


const Thankyou = () => {
  return (
    <main>
        <Header />
        <div className="container thank-you">
            <h1>Thank You for reaching out to us</h1>
            <p>We will get back to you shortly.</p>
        </div>
        <section className="volunteers">
            <Volunteer />
        </section>
        <Footer />
      
    </main>
  )
}

export default Thankyou

export const Head = () => <title>Thank You</title>
