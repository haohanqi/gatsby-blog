import React from "react"
import { Link } from "gatsby"
import Blog from '../template/Blog'
import Layout from "../components/layout"
import './index.css'

const IndexPage = ( 
  {data}
) => (
  
  <Layout>

   <div className = 'blogTitle'><h3>Entrepenership Group Project</h3></div>

  
  <div className='blog-container' id='home'>
  {
    data.allMarkdownRemark.edges.map((item)=>{
      return (
        <div className = 'blog-item-container'>
          <Link className = 'blog-item' style={{display:`block`}} key={item.node.frontmatter.path} to={item.node.frontmatter.path}>{item.node.frontmatter.title}</Link>
          <div className='author'>Written By: {item.node.frontmatter.author}</div>
          <div className = 'description'> {item.node.excerpt}</div>
          <Link to={item.node.frontmatter.path}>
            <button className='keepReadingButton'>Keep Reading</button>
          </Link>
        </div>
      )
    })
  }
  </div>


   

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
            author
          }
        }
      }
    }
  }`
