import * as React from "react"
import { graphql } from 'gatsby';
import Header from '../components/header.js';
import '../sass/styles.scss';
import Footer from "../components/footer";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pagination from "../components/pagination.js";



const Adoptions = ({data, pageContext}) => {
  return (
    <div> 
        <main>
          <Header page='/fr/adoptions'/>
          <div className="container adoptions">
            <h1>Adoptions</h1>
            <div className="row">
              {data.allContentfulAdoptions.nodes.map((item, index)  => {
                      return (
                        <a className="adoptions--wrapper col-md-4" href={`/en/adoptions/${item.names}`}>
                          
                            <div className="adoption card ">
                                <div className="adoption-teaser">
                                    <div className="adoption__image">
                                      <GatsbyImage image={getImage(item.image[0].gatsbyImageData)} aria-label={item.names} alt={''} />
                                    </div>
                                    <div className="title">Meet {item.names}</div>
                                </div>
                            </div>
                          
                          </a>

                      );
                    })
                  }
            </div>
          <Pagination pageContext={pageContext} />
          </div>
        </main>
        <Footer />
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
          }
        }
  }
  `

export default Adoptions

export const Head = () => <title>Adoptions</title>

