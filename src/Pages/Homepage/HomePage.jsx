import React  from 'react';
import { Container, Box, AppBar, Toolbar, Button, Avatar, ThemeProvider, Typography } from '@mui/material';
import initial from '../../images/initial.png';
import { theme } from '../../App';
import arrow  from '../../images/arrow.svg';
import './HomePage.css';

export function HomePage() {

	const navButtons = [{name: 'Projects', route: '/projects'}, {name: 'Contact', route: '/contact'}];

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{display: 'flex', justifyContent: 'center'}}>
				<Container className='homepage' maxWidth={false} disableGutters sx={{display: 'flex', flexDirection: 'column',alignItems: 'center', width: '100%', ml: 3, mr: 3, mt: 3, borderRadius: '15px'}}>
					<AppBar component='nav' position='absolute' elevation={0} sx={{width: '100%', backgroundColor: 'transparent',p: 2, mt: 4}} >
						<Toolbar >
							<Box sx={{flexGrow: 1, width: '100%'}}>
								<Avatar alt='g logo' src={initial} sx={{height: 60, width: 60}}/>
							</Box>
							<Box edge='end' sx={{display: 'flex', flexDirection: 'row'}}>
								{navButtons.map((item, index) => (<Button key={index} className='font-link' color='primary' variant='outlined' sx={{color: '#ffffff', m: 1, maxWidth: '120px', maxHeight: '42px', borderRadius: '10px'}}>{item.name}</Button>))}
							</Box>
						</Toolbar>
					</AppBar>
					<Box className='bird-box bird-box-one'><Box className='bird bird-one'></Box></Box>
					<Box className='bird-box bird-box-two'><Box className='bird bird-two'></Box></Box>
					<Box className='bird-box bird-box-three'><Box className='bird bird-three'></Box></Box>
					<Box className='bird-box bird-box-four'><Box className='bird bird-four'></Box></Box>
					<Box className='logo' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
						<Box className='firstname' sx={{display: 'flex', flexDirection: 'row'}}>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 7px #000'}}>G</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>I</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>A</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>N</Typography> 
						</Box>
						<Box className='lastname' sx={{display: 'flex', flexDirection: 'row'}}>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>Z</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>A</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>M</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>O</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>R</Typography>
							<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 5px 8px #000'}}>A</Typography>
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
		</ThemeProvider>
	)
};

