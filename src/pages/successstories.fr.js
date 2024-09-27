
import * as React from "react";
import { graphql } from "gatsby";
import Header from '../components/fr/header';
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
      <Header page='/en/successstories'/>
      <div className="container success">
        <div className="row">
            <h1>Réussites</h1>
            {data.allContentfulSuccessStories.nodes.map((item, index)  => {
                  return (
                    <a href={item.urlPath}>
                      <div className="story-wrapper col-lg-4" key={index}>
                        <div className="story-teaser">
                          <div className="story">{renderRichText(item.story, options)}</div>
                            <div className="title">{item.name}</div>
                        </div>
                      </div>
                      </a>

                  );
                })
              }
              </div>
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