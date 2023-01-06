import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, ThemeProvider } from '@mui/material';
import { theme } from '../../App';
import './skills.css';

export function Skills() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			const skillTitles = document.querySelectorAll('.title');
			if (entry.isIntersecting) {
				skillTitles.forEach((x) => x.classList.add('title-animation'));
				return;
			}

			skillTitles.forEach((entry) => entry.classList.remove('title-animation'));
		})
	}); 

	useEffect(() => {
		observer.observe(document.querySelector('.title-wrapper'));
	}, [observer])

	return (
		<ThemeProvider theme={theme}>
			<Container disableGutters>
				<Box className='title-wrapper' sx={{display: 'flex', flexDirection: 'row'}}>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'Bronson'", lineHeight: '0.9em', fontSize: {md: '130px', sm: '100px',  xs: '65px'}, textShadow: '0 3px 3px #000'}}>S</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'Bronson'", lineHeight: '0.9em', fontSize: {md: '130px', sm: '100px',  xs: '65px'}, textShadow: '0 3px 3px #000'}}>k</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'Bronson'", lineHeight: '0.9em', fontSize: {md: '130px', sm: '100px',  xs: '65px'}, textShadow: '0 3px 3px #000'}}>i</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'Bronson'", lineHeight: '0.9em', fontSize: {md: '130px', sm: '100px',  xs: '65px'}, textShadow: '0 3px 3px #000'}}>l</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'Bronson'", lineHeight: '0.9em', fontSize: {md: '130px', sm: '100px',  xs: '65px'}, textShadow: '0 3px 3px #000'}}>l</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'Bronson'", lineHeight: '0.9em', fontSize: {md: '130px', sm: '100px',  xs: '65px'}, textShadow: '0 3px 3px #000'}}>s</Typography> 
				</Box>	
				<Box className='skills-wrapper'>
					<Box className='sliders-svg-wrapper' sx={{mt: 14, mb: 14, width: {md: '600px', sm: '350px'}}}>
					</Box>
				</Box>			
			</Container>
		</ThemeProvider>
	)
}

