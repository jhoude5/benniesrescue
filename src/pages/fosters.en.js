import * as React from "react";
import { graphql } from "gatsby";
import Header from '../components/header';
import Footer from '../components/footer';
import '../sass/styles.scss';
import Foster from "../components/foster";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Pagination from "../components/pagination.js";


const Fosters = ({data, pageContext }) => {
  console.log(data.allContentfulFosters.nodes);
  return (
    <main>
      <Header page='/fr/fosters'/>
      <div className="fosters container">
        <div className="row">
            <h1>Fosters</h1>
            {data.allContentfulFosters.nodes.map((item, index)  => {
                  return (
                      <div className="teaser-grid--wrapper col-lg-6" key={index}>
                        <div className="teaser-grid">
                            <div className="teaser-grid__name teaser__link row">
                                <div className="teaser-grid__image col-md-4">
                                  <GatsbyImage image={getImage(item.image.gatsbyImageData)} aria-label={item.name} alt={''} />
                                </div>
                                <div className="teaser-grid__title col-md-6">{item.name}</div>
                               
                            
                            </div>
                        </div>
                      </div>

                  );
                })
              }
        </div>
      </div>
      <Pagination pageContext={pageContext} />
      <section className="foster">
        <Foster />
      </section>
      <Footer />
    </main>
  )
}
export const query = graphql`
    query {
      allContentfulFosters {
          nodes {
            name
            image {
                gatsbyImageData
                url
            }
          }
        }
  }
  `
export default Fosters
export const Head = () => <title>Fosters</title>

