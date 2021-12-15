module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "final",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "finaldata",
        fieldName: "finaldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckwhxa6lp17j901xodk0w2czz/master"
      }
    }
  ],
};