const path = require(`path`);
const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allGraphCmsPost(filter: { stage: { eq: PUBLISHED } }) {
        nodes {
          id
          author {
            name
            picture {
              url
            }
          }
          content
          coverImage {
            url
          }
          createdAt
          date
          excerpt
          id
          date
          createdAt
          slug
          tags
          title
          updatedAt
          twitterPost
          youTubeVideoId
          tags
        }
      }
    }
  `);

  result.data.allGraphCmsPost.nodes.forEach((edge) => {
    createPage({
      path: `/post/${edge.slug}`,
      component: blogPostTemplate,
      context: {
        id: edge.id,
        title: edge.title,
        content: edge.content,
        createdAt: edge.createdAt,
        updatedAt: edge.updatedAt,
        date: edge.date,
        tags: edge.tags,
        author: edge.author,
        twitterPost: edge.twitterPost,
        youTubeVideoId: edge.youTubeVideoId,
        tags: edge.tags,
      },
    });
  });
};
