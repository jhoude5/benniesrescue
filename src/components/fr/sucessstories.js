import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import rightarrow from '../files/rightarrow.png'
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

const SucessStories = () => {
    const data = useStaticQuery(graphql`
  query SuccessStoryQuery {
    allContentfulSuccessStories(limit: 2, filter: {node_locale: {eq: "FR"}}) {
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
                    
                      <div className="adoption card col-md-4" id={index}>
                        <div className="adoption-teaser">
                            <div className="story">{renderRichText(item.story, options)}</div>
                            <div className="title">{item.name}</div>
                                
                        </div>
                      </div>
                      
                  );
                })
              }
            </div>
        </div>
    );
};

export default SucessStories;