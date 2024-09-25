import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import rightarrow from '../files/rightarrow.png';

const SuccessStories = () => {
    const data = useStaticQuery(graphql`
  query {
    allContentfulSuccessStories(limit: 2, filter: {node_locale: {eq: "fr"}}) {
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
                <h2>Histoires de réussite</h2>
                {stories.map((item, index)  => {
                  return (
                    
                      <div className="story-wrapper" id={index}>
                        <div className="story-teaser">
                            <div className="story">{renderRichText(item.story, options)}</div>
                            <div className="title">{item.name}</div>
                                
                        </div>
                      </div>
                      
                  );
                })
              }
              <a href='/fr/foster'>
                See all stories <img src={rightarrow} alt="" /></a>
            </div>
        </div>
    );
};

export default SuccessStories;