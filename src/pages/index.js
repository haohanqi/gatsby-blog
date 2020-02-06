import React from "react"
import { Link } from "gatsby"
import Blog from '../template/Blog'
import Layout from "../components/layout"

const IndexPage = ( 
  {data}
) => (
  
  <Layout>

   <div><h3>Haohanqi's blogs</h3></div>

  {
    data.allMarkdownRemark.edges.map((item,key)=>{
      return <Link key={item.node.frontmatter.path} to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link>
    })
  }


   

   </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }`
