import React, {useEffect } from 'react';
import { Container, Box, Typography, ThemeProvider } from '@mui/material';
import { theme } from '../../App';
import { useInView } from 'react-intersection-observer';
import './skills.css';

export function Skills() {
	const {ref: myRef, inView: myElementIsVisible} = useInView();
	
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
			<Box className='skills-main-box' sx={{position: 'sticky', top: 0, height: '100vh', backgroundColor: '#30475E'}}>
				<Container className='skills-container' maxWidth='false' disableGutters sx={{height: '800px', ml: 0, mr: 0}}>
					<Box className='peaks' sx={{position: 'absolute'}}>
						<svg id="visual" viewBox="0 0 900 500" width="900" height="500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
							<path d="M0 160L35 289L69 209L104 412L138 342L173 428L208 422L242 372L277 277L312 418L346 343L381 377L415 193L450 296L485 381L519 288L554 266L588 199L623 366L658 232L692 159L727 256L762 280L796 167L831 359L865 212L900 210L900 0L865 0L831 0L796 0L762 0L727 0L692 0L658 0L623 0L588 0L554 0L519 0L485 0L450 0L415 0L381 0L346 0L312 0L277 0L242 0L208 0L173 0L138 0L104 0L69 0L35 0L0 0Z" fill="#222831" strokeLinecap="square" strokeLinejoin="bevel"></path>
						</svg>
					</Box>
					<Container className='skills-scroll' sx={{height: '100vh'}}>
						<Box className='title-wrapper' ref={myRef} sx={{display: 'flex', flexDirection: 'row', zIndex: 998, position: 'sticky'}}>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>S</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>k</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>i</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>l</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>l</Typography>
							<Typography className='title' sx={{fontSize: {md: '130px', sm: '100px',  xs: '65px'}}}>s</Typography> 
						</Box>	
						<Box className='skills-wrapper' sx={{zIndex: 999}}>
							<Box className='react-logo' sx={{height: '40vh'}}>
								<svg height="128" viewBox="175.7 78 490.6 436.9" width="111" xmlns="http://www.w3.org/2000/svg">
									<g fill="#61dafb">
										<path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"/>
										<circle cx="420.9" cy="296.5" r="45.7"/>
									</g>
								</svg>
							</Box>
							<Typography variant='h4' className='logo-titles' sx={{m: 2}}>React</Typography>
						</Box>	
					</Container>
				</Container>
			</Box>
		</ThemeProvider>
	)
}

