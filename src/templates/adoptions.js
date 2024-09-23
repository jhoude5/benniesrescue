import React from 'react';
import { graphql } from 'gatsby';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';



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
        <section className='adoptions-template'>
            <div className='container'>
                <h1>Meet { data.allContentfulAdoptions.edges[0].node.names }</h1>
                <GatsbyImage image={getImage(data.allContentfulAdoptions.edges[0].node.image[0])} alt={''} />
                <div className="description">{renderRichText(data.allContentfulAdoptions.edges[0].node.description, options)}</div>
            </div>
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

