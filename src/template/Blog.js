import React, { Component } from 'react';
import {graphql} from 'gatsby'
import './blog.css'

export default function Blog ({data}){
    console.log(data)
    const {markdownRemark}=data
    const {html,frontmatter} = markdownRemark
    return (
  
        <div className = "container">
        
          <div>{frontmatter.title}</div>
          <div>{frontmatter.date}</div>
          <div className="blog-content-container" dangerouslySetInnerHTML={{__html:html}}>
             
          </div>
        
        </div>

    )
}

export const pageContent = graphql`
query($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      path
      title
    }
  }
}
`