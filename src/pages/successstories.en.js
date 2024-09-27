
import * as React from "react";
import { graphql } from "gatsby";
import Header from '../components/header';
import Footer from '../components/footer';
import '../sass/styles.scss';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

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
      <Header page='/fr/successstories'/>
      <div className="container success">
        <div className="row">
            <h1>Sucess Stories</h1>
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
      allContentfulSuccessStories(filter: {node_locale: {eq: "en-US"}}) {
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
export const Head = () => <title>Success Stories</title>
