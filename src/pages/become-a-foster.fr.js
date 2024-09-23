import * as React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import '../sass/styles.scss';
import Adopt from "../components/adopt";


const BecomeFosters = () => {
  return (
    <main>
      <Header />
      <div className="fostering container">
        <div className="row">
            <h1>How to Become a Foster</h1>
            <p>Becoming a foster parent is a significant and rewarding commitment. Here are the general steps and considerations involved in the process:</p>

            <p><strong>Steps to Become a Foster Parent</strong></p>

            <ol>
                <li>Research and Information Gathering:
                    <ul>
                        <li>Understand what fostering entails, including the responsibilities and challenges.</li>
                
                    </ul>
                </li>
                <li>Eligibility Requirements:
                    <ul>
                        <li>Ensure you meet the basic requirements, which may include being at least 18 years old.</li>
            
                    </ul>
                </li>
                <li>Application Process:
                    <ul>
                        <li>Complete an application form provided by Bennie's Rescue.</li>
                        <li>Provide necessary documentation, identification, and references.</li>
                    </ul>
                </li>
                <li>Approval:
                    <ul>
                        <li>If you meet all requirements, you will receive approval.</li>
                        <li>The application process ensures that you are prepared and equipped to care for fostering kittens/cats.</li>
                    </ul>
                </li>
        
            </ol>
        
            <p><strong>Considerations</strong></p>

            <ul>
                <li>Emotional Readiness: Foster parenting can be emotionally demanding. It's important to be mentally and emotionally prepared for the ups and downs.</li>
                <li>Support System: Have a strong support network of family, friends, or support groups to help you through the fostering process.</li>
                <li>Flexibility and Patience: Foster children may have experienced trauma and need time to adjust. Patience and flexibility are crucial.</li>
        
            </ul>
        
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