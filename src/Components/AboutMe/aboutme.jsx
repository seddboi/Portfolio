import React from 'react';
import { ThemeProvider, Box, Typography } from '@mui/material';
import './aboutme.css';
import { theme } from '../../App';

export function AboutMe() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					backgroundColor: 'var(--darkblue)',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					textAlign: { sm: 'justify', xs: 'left' },
					lineHeight: '1.2',
					mb: 15,
					ml: 3,
					mr: 4,
					p: { sm: 4, xs: 2 },
					boxShadow: '5px 5px #3E434B, 10px 10px #595E65',
				}}
			>
				<Typography variant="body" sx={{ fontSize: { md: '35px', sm: '25px', xs: '25px' } }}>
					Hello there!
				</Typography>
				<Typography>&nbsp;</Typography>
				<Typography variant="body" paragraph="true" sx={{ textIndent: '20px', fontSize: { md: '35px', sm: '25px', xs: '25px' } }}>
					I am a Full Stack Web Developer with a degree in Computer Science and a Certificate in Web Development from the
					University of California, Riverside. With extensive experience in management and participation in various open-source
					projects, I am determined to employ skills like problem solving, being a self starter, and being a team player. My
					current expertise focuses around Javascript, React, Express, Node, SQL and Python, rounding me out to be a perfect
					inclusion to any company.
				</Typography>
			</Box>
		</ThemeProvider>
	);
}
