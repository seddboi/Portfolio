import React, {useEffect } from 'react';
import { Container, Box, Typography, ThemeProvider } from '@mui/material';
import { theme } from '../../App';
import { useInView } from 'react-intersection-observer';
import './skills.css';

export function Skills() {
	const {ref: myRef, inView: myElementIsVisible} = useInView();

	const currentFrame = index => {
		`background${index}.svg`
	}

	useEffect(() => {
		if (myElementIsVisible) {
			document.querySelectorAll('.title').forEach(entry => {
				entry.classList.add('title-animation');
			});

			document.querySelector('.skills-main-box').classList.add('skills-main-box-animation');
		}
	}, [myElementIsVisible])

	return (
		<ThemeProvider theme={theme}>
			<Box className='skills-main-box' sx={{position: 'sticky', top: 0, height: '100vh'}}>
				<Container className='skills-container' disableGutters sx={{height: '800px', ml: 0, mr: 0}}>
					<Box className='peaks' sx={{position: 'absolute'}}>
						<svg id="visual" viewBox="0 0 900 500" width="900" height="500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
							<path d="M0 160L35 289L69 209L104 412L138 342L173 428L208 422L242 372L277 277L312 418L346 343L381 377L415 193L450 296L485 381L519 288L554 266L588 199L623 366L658 232L692 159L727 256L762 280L796 167L831 359L865 212L900 210L900 0L865 0L831 0L796 0L762 0L727 0L692 0L658 0L623 0L588 0L554 0L519 0L485 0L450 0L415 0L381 0L346 0L312 0L277 0L242 0L208 0L173 0L138 0L104 0L69 0L35 0L0 0Z" fill="#222831" strokeLinecap="square" strokeLinejoin="bevel"></path>
						</svg>
					</Box>
					<Container className='skills-scroll' sx={{height: '500vh'}}>
						<Box className='title-wrapper' ref={myRef} sx={{display: 'flex', flexDirection: 'row', zIndex: 999, position: 'sticky'}}>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>S</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>k</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>i</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>l</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>l</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>s</Typography> 
						</Box>	
						<Box className='skills-wrapper'>

						</Box>	
					</Container>	
				</Container>
			</Box>
		</ThemeProvider>
	)
}

