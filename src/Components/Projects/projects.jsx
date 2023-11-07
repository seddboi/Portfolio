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
	ExpressLogo,
	TailwindLogo,
} from '../SVGComponents/svgcomponents';

const pwdntr = {
	name: 'Passwordinator',
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <PostgreSQLLogo />, <ExpressLogoBlack />, <ReactRouterLogo />],
	description:
		'A Google Chrome Password Duplicate application meant to securely create and hold any sensitive password information. Simply create a user account, and start saving away!',
	github: 'https://github.com/seddboi/pwdntr-client',
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
		'React Weatherboard which provides all of the essentials of daily and forecasted weather. From wind to hail, it has it all!',
	github: 'https://github.com/seddboi/Weatheredv2',
	video: { path: '/videos/weathered.mov', alt: 'Weathered Dashboard App' },
};

const mbd = {
	name: "Monchi's World",
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <ExpressLogoBlack />, <TailwindLogo />],
	description:
		"Full-Stack application showcasing my girlfriend's accomplishments and attributes. Created as a birthday present for a wonderful woman.",
	github: 'https://github.com/seddboi/Monchis-Home',
	video: { path: '/videos/mbd.mov', alt: "Monchi's World: My Girlfriend's Birthday Application" },
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
			<Container className="projects-section" id="projects" disableGutters maxWidth="false" sx={{}}>
				<Typography
					className="section-title"
					sx={{
						userSelect: 'none',
						fontSize: { xs: '25px', sm: '25px', md: '30px' },
						pl: '20px',
						zIndex: 0,
						color: 'var(--mediumblue)',
					}}
				>
					Projects
				</Typography>

				<Container
					className="projects-section-cards"
					disableGutters
					maxWidth="fixed"
					sx={{
						height: '3100px',
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
						<ProjectCard project={mbd} />
						<ProjectCard project={weathered} />
					</Box>
				</Container>
			</Container>
		</ThemeProvider>
	);
}
