import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import rightarrow from '../files/rightarrow.png'

const Adoptions = () => {
    const data = useStaticQuery(graphql`
      query {
        allContentfulAdoptions(limit: 12, filter: {node_locale: {eq: "fr"}}) {
            nodes {
              urlPath
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
    const options = {
    
        renderMark: {
          [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
          [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
              <a href={uri} className="underline">
                {children}
              </a>
            )
          },
        }
    }
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
                                <div className="title">Rencontrer {item.names}</div>
                                
                        </div>
                      </div>
                      </a>
                  );
                })
              }
            
                <a href='/adoptions'>Voir le catalogue complet
                    <img src={rightarrow} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Adoptions;