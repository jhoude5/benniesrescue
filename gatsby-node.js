const path = require("path");
const { paginate } = require('gatsby-awesome-pagination');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(
          
    `query {
        adoptionsen: allContentfulAdoptions(filter: {node_locale: {eq: "en-US"}}) {
            edges {
                node {
                    urlPath
                    names
                }    
            }
        }
        adoptionsfr: allContentfulAdoptions(filter: {node_locale: {eq: "fr"}}) {
            edges {
                node {
                    urlPath
                    names
                }    
            }
        }
    }`
    );
    if (result.errors) {
        throw result.errors;
    }
    const enadoptionData = result.data.adoptionsen.edges;
    const EnAdoptionsTemplate = path.resolve('./src/templates/adoptions.js');
    result.data.adoptionsen.edges.forEach(( node , index) => {

        createPage({
          path: `/en/adoptions/${node.node.names}`,
          component: EnAdoptionsTemplate,
          // values in the context object are passed in as variables to page queries
          context: {
            id: node.node.id,
          },
        })
      });
   
      // Create pagination
        paginate({
            createPage,
            items: enadoptionData,
            itemsPerPage: 12,
            pathPrefix: '/en/adoptions',
            component: path.resolve('src/templates/adoptions.js')
        })

        const fradoptionData = result.data.adoptionsfr.edges;
        const FrAdoptionsTemplate = require.resolve('./src/templates/fr/adoptions.js');
        fradoptionData.forEach(( node , index) => {
    
            actions.createPage({
              path: `/fr/adoptions/${node.node.names}`,
              component: FrAdoptionsTemplate,
              // values in the context object are passed in as variables to page queries
              context: {
                id: node.node.id,
                title: node.node.names, // "Using a Theme"
              },
            })
          });
          // Create pagination
            paginate({
                createPage,
                items: fradoptionData,
                itemsPerPage: 12,
                pathPrefix: '/fr/adoptions',
                component: path.resolve('src/templates/fr/adoptions.js')
            })
}

