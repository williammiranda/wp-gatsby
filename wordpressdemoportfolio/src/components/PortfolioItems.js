import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const PortfolioItemsWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const PortfolioItemDiv = styled.div`
    width: 300px;
    border: 1px solid #efefef;
    padding: 16px;
    margin: 16px;
`

const PortfolioImage = styled.img`
    max-width: 100%;
`

const PortfolioItems = () => {
    return (
        <StaticQuery query={graphql`
        {
            allWordpressWpPortfolio {
                edges {
                    node {
                        id
                        title
                        slug
                        excerpt
                        content
                        featured_media {
                            source_url
                        }
                    }
                }
            }
        }
        `} render={props => (
            <PortfolioItemsWrapper>
                {props.allWordpressWpPortfolio.edges.map(PortfolioItem => (
            <PortfolioItemDiv key={PortfolioItem.node.id}>
                <h2>{PortfolioItem.node.title}</h2>
                <PortfolioImage src={PortfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                <div dangerouslySetInnerHTML={{__html: PortfolioItem.node.excerpt}} />
                <Link to={`/portfolio/${PortfolioItem.node.slug}`}>Read More</Link>
            </PortfolioItemDiv>
        ))}
            </PortfolioItemsWrapper>
        )} />
    )
}

export default PortfolioItems;