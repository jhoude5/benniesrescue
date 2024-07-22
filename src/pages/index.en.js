import * as React from "react";
import Header from '../components/header';
import '../sass/styles.scss';


const IndexPage = () => {
  return (
    <main>
      <Header />
      <div className="col-md-6">
            <h1>Bennie's Rescue</h1>
            <p>Non-profit Organization</p>
          </div>
          <div className="col-md-6">
            <img src='../files/headerimg.png' alt='cartoon kitten playing with ball of yarn'/>
          </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
