import React, { useEffect } from 'react';
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
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}}}>s</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}}}>k</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}}}>i</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}}}>l</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}}}>l</Typography>
					<Typography className='title' sx={{color: 'var(--mango)', fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}}}>s</Typography> 
				</Box>				
			</Container>
		</ThemeProvider>
	)
}

