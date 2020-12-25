import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import ArticleLayout from '../layouts/articleLayout';

const ArticlesWrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

const articlePage = ({data}) => {
    return (
        <div>
            <div>
                <h3>article</h3>
                <p>Lorem consequat labore eiusmod reprehenderit eu esse exercitation.</p>
            </div>
            <ArticlesWrapper>
            {console.log(data.allMdx.nodes)}
            { data.allMdx.nodes.map((e)=><ArticleLayout data={e}/>)
            }
            </ArticlesWrapper>

        </div>
    );
}

export default articlePage;

export const query = graphql`
{
allMdx {
    nodes {
      frontmatter {
        autor
        slug
        title
        featuredImage{
            childImageSharp {
                 fluid(maxWidth: 400, maxHeight: 400, quality: 90){
                    ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
        }
      }
      excerpt(pruneLength: 30)
      body
    }
  }
  allFile(filter: {relativePath: {regex: "/articles/"}, extension: {eq: "jpg"}}) {
    nodes {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, quality: 90){
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
}
`
