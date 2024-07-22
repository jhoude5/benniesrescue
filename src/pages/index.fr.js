import * as React from "react";
import Header from '../components/fr/header';


const IndexPage = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Sauvetage Bennie's</h1>
            <p>Organisation à but non lucratif</p>
          </div>
          <div className="col-md-6">
            <img src='../files/headerimg.png' alt='chaton de dessin animé jouant avec une pelote de laine'/>
          </div>
        </div>
      </div>
      
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
