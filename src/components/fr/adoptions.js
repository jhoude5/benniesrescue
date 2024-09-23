// import React from "react";
// import { graphql, useStaticQuery } from 'gatsby';
// import { renderRichText } from 'gatsby-source-contentful/rich-text';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
// import rightarrow from '../files/rightarrow.png'

// const Adoptions = () => {
//     const data = useStaticQuery(graphql`
//   query AdoptionQuery {
//     allContentfulAdoptions(limit: 12, filter: {node_locale: {eq: "fr"}}) {
//         nodes {
//           urlPath
//           names
//           image {
//             gatsbyImageData
//           }
//           description {
//             raw
//           }
//         }
//       }
// }
//   `)
//   const adoptions = data.allContentfulAdoptions.nodes;
//     const options = {
    
//         renderMark: {
//           [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
//         },
//         renderNode: {
//           [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
//           [INLINES.HYPERLINK]: (node, children) => {
//             const { uri } = node.data
//             return (
//               <a href={uri} className="underline">
//                 {children}
//               </a>
//             )
//           },
//         }
//     }
//     return (

//         <div className="container">
//             <div className="row">
//                 <h2>Adoptions</h2>
//                 {adoptions.map((item, index)  => {
//                   return (
//                       <div className="blog--wrapper card col-md-4" id={index}>
//                         <div className="blog-teaser">
//                         <a href={item.urlPath}>
//                                 <div className="blog__image">
//                                   <GatsbyImage image={getImage(item.image[0].gatsbyImageData)} aria-label={item.blogTitle} alt={''} />
//                                 </div>
//                                 <div className="title">Rencontrer {item.names}</div>
//                                 </a>
//                         </div>
//                       </div>
//                   );
//                 })
//               }
//                 <a href='/adoptions'>Voir le catalogue complet
//                     <img src={rightarrow} alt="" />
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Adoptions;