import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import rightarrow from '../files/rightarrow.png';

const SucessStories = () => {
    const data = useStaticQuery(graphql`
        query {
          allContentfulSuccessStories(limit: 2, filter: {node_locale: {eq: "en-US"}}) {
              nodes {
                name
                story {
                  raw
                }
              }
            }
        }
  `)
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
  const stories = data.allContentfulSuccessStories.nodes;
  
    return (

        <div className="container">
            <div className="row">
                <h2>Success Stories</h2>
                {stories.map((item, index)  => {
                  return (
                      <div className="story-wrapper" id={index}>
                        <div className="story-teaser">
                            <div className="story">{renderRichText(item.story, options)}</div>
                            <div className="title"><p>{item.name}</p></div>
                                
                        </div>
                      </div>
                      
                  );
                })
              }
              <div className="see-more-link"><a href='/en/successstories'>
                See all stories <img src={rightarrow} alt="" /></a></div>
            </div>
        </div>
    );
};

export default SucessStories;