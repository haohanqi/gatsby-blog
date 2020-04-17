import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import './index.css'

const IndexPage = ( 
  {data}
) => (
  
  <Layout>

   <div className = 'blogTitle'><h3>Entrepenership Group Project</h3></div>
   
   <div style={{overflow:'hidden'}}>
      <div style={{height:300,width:'45%',backgroundColor:'white', float:'left'}}>
            <img style={{ objectFit:'cover'}} src='https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
      </div>
      <div style={{height:300,width:'47%',backgroundColor:'white', float:'right'}}>
         <p>
            We are TechHub Company <br/><br/>
            
            Product: HTChip<br/><br/>

            <b>Our Goal: ONE CHIP  ONE PERSON  ONE LIFE </b>
         </p>
      </div>
   </div>
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
