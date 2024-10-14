import * as React from "react";
import Header from '../../components/header';
import Footer from '../../components/footer';
import '../../sass/styles.scss';
import Adopt from "../../components/adopt";


const BecomeFosters = () => {
  return (
    <main>
      <Header page='/fr/fosters/become-a-foster'/>
      <div className="fostering container">
        <div className="row">
            <h1>How to Become a Foster</h1>
            <p>Becoming a foster parent is a significant and rewarding commitment. Here are the general steps and considerations involved in the process:</p>
            <p><strong>Steps to Become a Foster Parent</strong></p>
            <ol>
              <li>Research and Information Gathering:
                <ul>
                  <li>Understand what fostering entails, including the responsibilities and challenges.</li>
                  <li>Attend informational sessions or orientations provided by local foster care agencies.</li>
                </ul>
              </li>
              <li>Eligibility Requirements:
                <ul>
                  <li>Ensure you meet the basic requirements, which may include being at least 21 years old, having a stable income, and passing background checks.</li>
                </ul>
              </li>
              <li>Application Process:
                <ul>
                  <li>Complete an <a className='application-link' href='/en/foster-application'>application form</a>application form.</li>
                  <li>Provide necessary documentation, such as proof of income, identification, and references.</li>
                </ul>
              </li>
              <li>Approval and Licensing:
                <ul>
                  <li>If you meet all requirements, you will receive approval.</li>
                  <li>The licensing process ensures that you are prepared and equipped to care for foster a pet.</li>
                </ul>
              </li>
              <li>Placement:
                <ul>
                  <li>Once approved, you will be matched with a pet in need of foster care.</li>
                  <li>Be prepared for potential challenges and support the pet's transition into your home.</li>
                </ul>
              </li>
            </ol>
            <p><strong>Considerations</strong></p>
              <ul className="list">
                <li>Emotional Readiness: Fostering a pet can be emotionally demanding. It's important to be mentally and emotionally prepared for the ups and downs.</li>
                <li>Flexibility and Patience: Foster pets may have experienced trauma and need time to adjust. Patience and flexibility are crucial.</li>
                <li>Commitment to Education and Advocacy: Fostering a pet often needs you to advocate for the pet's needs in home, and possible medical care.</li>
              </ul>
            <div className="application-button">
              <a href="https://docs.google.com/forms/d/1H7Kq5qay87b-lCYedHfGb4qeUDWiF9iFVbFVNH-mOjs" className="application-btn btn btn-primary btn-header">Submit Application</a>
            </div>
          </div>
          
      </div>
      <section className="adopt-cta">
        <Adopt />
      </section>
     
      <Footer />
    </main>
  )
}

export default BecomeFosters
export const Head = () => <title>Become a Foster</title>

