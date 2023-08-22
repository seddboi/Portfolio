import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, ThemeProvider, Typography, Grid, Button } from '@mui/material';
import { ProjectCard } from './project_card';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../App';
import './projects.css';
import './horizontal-scroll.js';
import {
	CSS3Logo,
	MySQLLogo,
	NodeJSLogo,
	ReactLogo,
	ReactRouterLogo,
	JavascriptLogo,
	ExpressLogoBlack,
	PostgreSQLLogo,
	PythonLogo,
} from '../SVGComponents/svgcomponents';

const pwdntr = {
	name: 'Passwordinator',
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <PostgreSQLLogo />, <ExpressLogoBlack />, <ReactRouterLogo />],
	description:
		'A Google Chrome Password Duplicate application meant to securely create and hold any sensitive password information. Simply create a user account, and start saving away!',
	github: 'https://github.com/seddboi/passwordinator',
	video: {
		path: './videos/passwordinator.mov',
		alt: 'Passwordinator Web Application',
	},
};

const blackjack = {
	name: 'BlackJack',
	skillsUsed: [<PythonLogo />],
	description:
		'A simple command-line/terminal Casino BlackJack game. Excellent way to play the game without all of the detrimental debt! ',
	github: 'https://github.com/seddboi/BlackJack-Python-Game',
	video: { path: './videos/blackjack.mov', alt: 'BlackJack Game being played on Mac Terminal' },
};

const weathered = {
	name: 'Weathered',
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <JavascriptLogo />, <CSS3Logo />],
	description:
		'React Weatherboard the provides all of the essentials of daily and forecasted weather. From rain to wind to hail, it has it all!',
	github: 'https://github.com/seddboi/Weathered',
	video: { path: '/videos/weathered.mov', alt: 'Weathered Dashboard App' },
};

export function Projects() {
	// const { ref: secondRef, inView: isTitleVisible } = useInView();

	useEffect(() => {
		const scrollContainer = document.querySelector('.cards-main');

		scrollContainer.addEventListener('wheel', (e) => {
			scrollContainer.scrollLeft += e.deltaY;
		});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Container className="projects-section" disableGutters maxWidth="false" sx={{}}>
				<Typography
					className="section-title"
					sx={{ userSelect: 'none', fontSize: { xs: '25px', sm: '25px', md: '30px' }, pl: '20px', zIndex: 0 }}
				>
					Projects
				</Typography>

				<Container
					className="projects-section-cards"
					disableGutters
					maxWidth="fixed"
					sx={{
						height: '2300px',
						position: 'relative',
						display: 'flex',
						zIndex: 1,
					}}
				>
					<Box
						className="cards-main"
						sx={{
							width: '100vw',
							display: 'flex',
							justifyContent: 'space-around',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<ProjectCard project={pwdntr} />
						<ProjectCard project={blackjack} />
						<ProjectCard project={weathered} />
					</Box>
				</Container>
			</Container>
		</ThemeProvider>
	);
}
