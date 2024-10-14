import * as React from "react"
import { graphql } from 'gatsby';
import Header from '../components/fr/header.js';
import '../sass/styles.scss';
import Footer from "../components/fr/footer";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pagination from "../components/pagination.js";



const Adoptions = ({data, pageContext}) => {

  return (
    <div> 
        <main>
          <Header page='/en/adoptions'/>
          <div className="container adoptions">
            <h1>Adoptions</h1>
            <div className="row">
              {data.allContentfulAdoptions.nodes.map((item, index)  => {
                      return (
                        <a className="adoptions--wrapper col-md-4" href={`/fr/adoptions/${item.names}`}>
                          
                            <div className="adoption card ">
                                <div className="adoption-teaser">
                                    <div className="adoption__image">
                                      <GatsbyImage image={getImage(item.image[0].gatsbyImageData)} aria-label={item.name} alt={''} />
                                    </div>
                                    <div className="title">Rencontrer {item.names}</div>
                                </div>
                            
                          </div>
                          </a>
                      );
                    })
                  }
            </div>
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
          }
        }
  }
  `

export default Adoptions
export const Head = () => <title>Adoptions</title>


