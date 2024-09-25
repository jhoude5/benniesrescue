import * as React from "react"
import { graphql } from 'gatsby';
import Header from '../components/header.js';
import '../sass/styles.scss';
import Footer from "../components/fr/footer";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pagination from "../components/pagination.js";



const Adoptions = ({data, pageContext}) => {

  return (
    <div> 
        <main>
          <Header />
          <div className="container">
            <h1>Adoptions</h1>
              {data.allContentfulAdoptions.nodes.map((item, index)  => {
                      return (
                        <a href={item.urlPath}>
                          <div className="teaser-grid--wrapper col-lg-4">
                            <div className="teaser-grid">
                                <div className="teaser-grid__name teaser__link">
                                    <div className="teaser-grid__image">
                                      <GatsbyImage image={getImage(item.image[0].gatsbyImageData)} aria-label={item.name} alt={''} />
                                    </div>
                                    <div className="teaser-grid__title">Rencontrer {item.names}</div>
                                </div>
                            </div>
                          </div>
                          </a>
                      );
                    })
                  }
            </div>
          <Pagination pageContext={pageContext} />
          
        </main>
        <Footer />
    </div>
   
  )
}
export const query = graphql`
    query {
      allContentfulAdoptions(filter: {node_locale: {eq: "fr"}}) {
          nodes {
            names
            image {
                gatsbyImageData
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
export const Head = () => <title>Adoptions</title>


