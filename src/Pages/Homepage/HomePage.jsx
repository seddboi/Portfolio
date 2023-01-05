import React, {useEffect} from 'react';
import { Container, Box, AppBar, Toolbar, Button, Avatar, ThemeProvider, Typography } from '@mui/material';
import initial from '../../images/initial.png';
import { theme } from '../../App';
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
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>G</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>I</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>A</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>N</Typography> 
							</Box>
							<Box className='lastname' sx={{display: 'flex', flexDirection: 'row'}}>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>Z</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>A</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>M</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>O</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>R</Typography>
								<Typography id='letter' sx={{fontFamily: "'3dlet'", lineHeight: '0.9em', fontSize: {md: '150px', sm: '130px',  xs: '75px'}, textShadow: '0 4px 7px #000'}}>A</Typography>
							</Box>
						<Typography className='logo-2' sx={{fontSize: {sm: '50px', xs: '40px'}}}>Full Stack Web Developer</Typography>
					</Box>
				</Container>
			</Box>
		</ThemeProvider>
	)
};

