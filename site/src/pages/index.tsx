import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { createGlobalStyle } from 'styled-components';
import Parallax from '../../../lib/index';

const GlobalStyles = createGlobalStyle`
	body {
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
		lineHeight: 12px;
	}
`;

const Container = styled.div`
	width: 87.5%;
	margin: 50px auto;
`;

interface ImageProps {
	source: string;
}

const IndexPage = () => {
	const images = useStaticQuery(graphql`
		query {
			phoebe0: file(relativePath: { eq: "phoebe_0.png" }) {
				childImageSharp {
					# Specify the image processing specifications right in the query.
					# Makes it trivial to update as your page's design changes.
					fixed(width: 500, height: 500) {
						...GatsbyImageSharpFixed
					}
				}
			}

			phoebe1: file(relativePath: { eq: "phoebe_1.png" }) {
				childImageSharp {
					# Specify the image processing specifications right in the query.
					# Makes it trivial to update as your page's design changes.
					fixed(width: 525, height: 525) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<Container>
			<GlobalStyles />

			<h1>apple-tv-parallax Demo</h1>

			<p>This demos this.</p>

			<h3>Phoebe</h3>

			<Parallax
				style={{ width: 500, height: 500 }}
				borderRadius="50px"
				layers={[
					<Img fixed={images.phoebe0.childImageSharp.fixed} />,
					<Img
						style={{
							width: '110%',
							height: '110%',
							top: -10,
						}}
						fixed={images.phoebe1.childImageSharp.fixed}
					/>,
				]}
			/>
		</Container>
	);
};

export default IndexPage;
