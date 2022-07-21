import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react"


export const Hero = () => {
    const { mdx } = useStaticQuery(HeroData);
    return <MDXRenderer>{mdx.body}</MDXRenderer>;
    
}

export const HeroData = graphql`
    query {
        mdx ( frontmatter: { title: {eq:"hero"}}) {            
            body
        }
    }
`;