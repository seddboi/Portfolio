import React from 'react';
import { Box, AppBar, Toolbar, Button, Avatar, ThemeProvider, Typography } from '@mui/material';
import initial from '../../images/initial.png';
import { theme } from '../../App';
import './HomePage.css';

export function HomePage() {

	const navButtons = [{name: 'Projects', route: '/projects'}, {name: 'Contact', route: '/contact'}];

	return (
		<ThemeProvider theme={theme}>
			<Box className='main-container' sx={{display: 'flex', flexDirection: 'column'}}>
				<Box className='navbar' sx={{display: 'flex', justifyContent: 'center', m: 2}}>
					<AppBar component='nav' position='sticky' elevation={1} sx={{borderRadius: '10px'}} >
						<Toolbar>
							<Box sx={{flexGrow: 1}}>
								<Avatar alt='g logo' src={initial} sx={{height: 50, width: 50}}/>
							</Box>
							<Box edge='end'>
								{navButtons.map((item, index) => (<Button key={index} className='font-link' color='secondary' sx={{color: '#F05454', m: 1, maxWidth: '100px', maxHeight: '42px'}}>{item.name}</Button>))}
							</Box>
						</Toolbar>
					</AppBar>
				</Box>
				<Box sx={{height: '400px', display: 'flex', flexDirection: 'column', backgroundColor: '#30475E', borderRadius: '10px', ml: 6, mr: 6, mt: 4, boxShadow: '1px 1px #222831, 2px 2px #222831,3px 3px #222831, 7px 7px 10px #000'}}>
					<Box sx={{display: 'flex', flexDirection: 'row', backgroundColor: '#222831', height: '24px', width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}}>
						<Box sx={{height: '13px', width: '13px', borderRadius: '50%', position: 'relative', top: '6px', left: '6px', backgroundColor: 'red', marginRight: '5px' }}></Box>
						<Box sx={{height: '13px', width: '13px', borderRadius: '50%', position: 'relative', top: '6px', left: '6px', backgroundColor: 'yellow', marginRight: '5px' }}></Box>
						<Box sx={{height: '13px', width: '13px', borderRadius: '50%', position: 'relative', top: '6px', left: '6px', backgroundColor: 'green' }}></Box>
					</Box>
					<Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
						<Typography className='title-1 type-anim' variant='h4' color='black' sx={{fontSize: '90px'}}>Gian Paulo Zamora</Typography>
					</Box>
					<Box>
						<Typography className='typewriter-effect' variant='h6' color='black'> Full Stack Web Developer</Typography>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	)
};

