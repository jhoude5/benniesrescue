import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import rightarrow from '../files/rightarrow.png';

const Adoptions = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulAdoptions(limit: 12, filter: {node_locale: {eq: "en-US"}}) {
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
  `)
  const adoptions = data.allContentfulAdoptions.nodes;
  
    return (

        <div className="container">
            <div className="row">
                <h2>Adoptions</h2>
                {adoptions.map((item, index)  => {
                  return (
                    <a className='adoptions--wrapper' href={item.urlPath}>
                      <div className="adoption card col-md-4" id={index}>
                        <div className="adoption-teaser">
                        
                                <div className="adoption__image">
                                  <GatsbyImage image={getImage(item.image[0].gatsbyImageData)} aria-label={item.adoptionTitle} alt={''} />
                                </div>
                                <div className="title">Meet {item.names}</div>
                                
                        </div>
                      </div>
                      </a>
                  );
                })
              }
                <div><a className='view-adoptions' href='/en/adoptions'>View full cat-a-logue
                    <img src={rightarrow} alt="" />
                </a></div>
            </div>
        </div>
    );
};

export default Adoptions;
