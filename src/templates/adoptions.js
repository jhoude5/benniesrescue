import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import Foster from '../components/foster.js';



const AdoptionsTemplate = ({data}) => {
    
    const options = {
        
        renderMark: {
          [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
            [INLINES.HYPERLINK]: (node, children) => {
                const { uri } = node.data
                return (
                <a href={uri} className="underline">
                    {children}
                </a>
                )
            },
            
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const image = getImage(node.data.target)
                return <GatsbyImage image={image} alt='' />
                },
        
        }
        
    }

  return (
    <div>
        <main>
        <Header />
        <div className='adoptions-template'>
            <div className='container'>
                <h1>Meet { data.allContentfulAdoptions.edges[0].node.names }</h1>
                {data.allContentfulAdoptions.edges[0].node.image.map((item, index)  => {
                  return (
                    <GatsbyImage className="col-lg-4" image={getImage(item)} alt={''} />
                  );
                  
                })}
                <div className="description">{renderRichText(data.allContentfulAdoptions.edges[0].node.description, options)}</div>
            
            <div className="application-button">
              <a target='_blank' href="https://docs.google.com/forms/d/1n7IgAR-ygUWGYW1AEGWpG7yiautLAuvOkKEYDoGH-EE"className="application-btn btn btn-primary btn-header">Soumettre une demande</a>
            </div>
            </div>
        </div>
        <section className='foster'>
      <Foster />
    </section>
        </main>
        <Footer />
    </div>
      
      
    
  );
};
export const query = graphql`
query AdoptionsQuery {
  allContentfulAdoptions(filter: {node_locale: {eq: "en-US"}}) {
    edges {
      node {
        names
        description {
          raw
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
}

`;

export default AdoptionsTemplate;

