import React  from 'react';
import { Container, Box, AppBar, Toolbar, Button, Avatar, ThemeProvider, Typography } from '@mui/material';
import initial from '../../images/initial.png';
import { theme } from '../../App';
import './HomePage.css';
import { Skills } from '../../Components/Skills/skills';
import { PageReturn } from '../../Components/PageReturn/pagereturn';

export function HomePage() {

	const navButtons = [{name: 'Projects', route: '/projects'}, {name: 'Contact', route: '/contact'}];

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{display: 'flex', flexDirection: 'column', pl: 3, pr: 3, height: '150vh', width: 'auto'}}>
				<Container className='homepage' maxWidth={false} disableGutters sx={{position: 'relative', display: 'flex', flexDirection: 'column',alignItems: 'center', width: '100%', mt: 3, mb: '800px',  borderRadius: '15px', overflow: 'hidden'}}>
					<AppBar component='nav' position='absolute' elevation={0} sx={{width: '100%', backgroundColor: 'transparent',p: 2, mt: 4}} >
						<Toolbar >
							<Box sx={{flexGrow: 1, width: '100%'}}>
								<Avatar alt='g logo' src={initial} sx={{height: 60, width: 60}}/>
							</Box>
							<Box edge='end' sx={{display: 'flex', flexDirection: 'row'}}>
								{navButtons.map((item, index) => (<Button key={index} className='font-link' color='primary' variant='outlined' sx={{color: '#ffffff', margin: '5px', maxHeight: '42px', borderRadius: '10px', fontSize: {md: '30px', xs: '20px'}}}>{item.name}</Button>))}
							</Box>
						</Toolbar>
					</AppBar>
					<Box className='bird-box bird-box-one'><Box className='bird bird-one'></Box></Box>
					<Box className='bird-box bird-box-two'><Box className='bird bird-two'></Box></Box>
					<Box className='bird-box bird-box-three'><Box className='bird bird-three'></Box></Box>
					<Box className='bird-box bird-box-four'><Box className='bird bird-four'></Box></Box>
					<Box className='logo' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
						<Box className='firstname' sx={{display: 'flex', flexDirection: 'row'}}>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px',}}}>G</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>I</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>A</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>N</Typography> 
						</Box>
						<Box className='lastname' sx={{display: 'flex', flexDirection: 'row'}}>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>Z</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>A</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>M</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>O</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>R</Typography>
							<Typography id='letter' sx={{fontSize: {md: '110px', sm: '90px',  xs: '55px'}}}>A</Typography>
						</Box>
						<Typography className='logo-2' sx={{fontSize: {sm: '50px', xs: '40px'}}}>Full Stack Web Developer</Typography>
						<Box sx={{position: 'absolute', bottom: '1px'}}>
							<svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
								<g id="triangles">
									<g id="dark">
										<path id="dark1" d="M63.1306 55.7012C62.7491 56.3547 61.8081 56.364 61.4136 55.7182L49.9997 37.0305C49.595 36.3679 50.0669 35.517 50.8432 35.5093L73.2988 35.287C74.0752 35.2793 74.5638 36.1207 74.1723 36.7912L63.1306 55.7012Z" opacity="0.5"/>
										<path id="dark2" d="M63.1306 43.7012C62.7491 44.3547 61.8081 44.364 61.4136 43.7182L49.9997 25.0305C49.595 24.3679 50.0669 23.517 50.8432 23.5093L73.2988 23.287C74.0752 23.2793 74.5638 24.1207 74.1723 24.7912L63.1306 43.7012Z" opacity="0.5"/>
									</g>
								</g>
							</svg>
						</Box>
					</Box>
				</Container>
			</Box>
			<Box sx={{height: '100vh'}}>
				<Box className='peaks'>
					<svg viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
						<path d="M0 438L35 309L69 389L104 186L138 256L173 170L208 176L242 226L277 321L312 180L346 255L381 221L415 405L450 302L485 217L519 310L554 332L588 399L623 232L658 366L692 439L727 342L762 318L796 431L831 239L865 386L900 388L900 601L865 601L831 601L796 601L762 601L727 601L692 601L658 601L623 601L588 601L554 601L519 601L485 601L450 601L415 601L381 601L346 601L312 601L277 601L242 601L208 601L173 601L138 601L104 601L69 601L35 601L0 601Z" fill="#222831" strokeLinecap="square" strokeLinejoin="bevel"></path>
					</svg>
				</Box>
				<Skills />
			</Box>
			{/* <Box sx={{backgroundColor: '#738FC1'}}>
				<PageReturn />
			</Box> */}
		</ThemeProvider>
	)
};

