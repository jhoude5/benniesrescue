import * as React from "react"
import { graphql } from 'gatsby';
import Header from '../components/header.js';
import '../sass/styles.scss';
// import Footer from "../components/footer";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pagination from "../components/pagination.js";



const Adoptions = ({data, pageContext}) => {
    console.log(data.allContentfulAdoptions.nodes);
    

  return (
    <div> 
        <main>
          <Header />
          <div className="container">
            <h1>Adoptions</h1>
          </div>
          
          {data.allContentfulAdoptions.nodes.map((item, index)  => {
                  return (
                    <a href={item.urlPath}>
                      <div className="teaser-grid--wrapper col-lg-4" key={index}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link card">
                                <div className="teaser-grid__image">
                                  <GatsbyImage image={getImage(item.image[0].gatsbyImageData)} aria-label={item.names} alt={''} />
                                </div>
                                <div className="teaser-grid__title">Meet {item.names}</div>
                               
                            
                            </div>
                        </div>
                      </div>
                      </a>

                  );
                })
              }
          <Pagination pageContext={pageContext} />
          
        </main>
        {/* <Footer /> */}
    </div>
   
  )
}
export const query = graphql`
    query {
      allContentfulAdoptions(filter: {node_locale: {eq: "en-US"}}) {
          nodes {
            names
            image {
                gatsbyImageData
                url
            }
            description {
              raw
            }
            urlPath
          }
        }
  }
  `

export default Adoptions


