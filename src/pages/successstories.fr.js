
import * as React from "react";
import { graphql } from "gatsby";
import Header from '../components/header';
import '../sass/styles.scss';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Footer from "../components/fr/footer";

const SuccessStories = ({ data }) => {
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
        
    
    }
    
}
  return (
    <main>
      <Header />
      <div className="col-md-6">
            <h1>Réussites</h1>
            {data.allContentfulSuccessStories.nodes.map((item, index)  => {
                  return (
                    <a href={item.urlPath}>
                      <div className="teaser-grid--wrapper col-lg-4" key={index}>
                        <div className="teaser-grid">
                          <div className="story">{renderRichText(item.story, options)}</div>
                            <div className="title">{item.name}</div>
                        </div>
                      </div>
                      </a>

                  );
                })
              }
          </div>
          <Footer />
    </main>
  )
}
export const query = graphql`
    query {
        allContentfulSuccessStories(filter: {node_locale: {eq: "fr"}}) {
            nodes {
                name
                story {
                    raw
                }
            }
        }
    }
`


export default SuccessStories

export const Head = () => <title>Réussites</title>