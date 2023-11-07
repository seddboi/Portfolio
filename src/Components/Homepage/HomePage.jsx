import React from 'react';
import { Container, Box, AppBar, Toolbar, Button, Avatar, ThemeProvider, Typography } from '@mui/material';
import initial from '/images/initial.png';
import { theme } from '../../App';
import './HomePage.css';
import { AboutMe } from '../AboutMe/aboutme';
import { Projects } from '../Projects/projects';
import { IntroPointer } from '../SVGComponents/svgcomponents';
import { Contact } from '../Contact/contact';
import { Link } from 'react-scroll';

export function HomePage() {
	const navButtons = [
		{ name: 'Projects', route: 'projects' },
		{ name: 'Contact', route: 'contact' },
	];

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					mb: '300px',
					pl: 3,
					pr: 3,
					width: 'auto',
					backgroundColor: 'var(--white)',
					outlineOffset: 0,
					position: 'relative',
				}}
			>
				<Container
					className="homepage"
					maxWidth={false}
					disableGutters
					sx={{
						position: 'relative',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						mt: 3,
						overflow: 'hidden',
					}}
				>
					<AppBar
						component="nav"
						position="absolute"
						elevation={0}
						sx={{ width: '100%', backgroundColor: 'transparent', p: 2, mt: 4 }}
					>
						<Toolbar>
							<Box sx={{ flexGrow: 1, width: '100%' }}>
								<Avatar alt="g logo" src={initial} sx={{ height: 60, width: 60 }} />
							</Box>
							<Box edge="end" sx={{ display: 'flex', flexDirection: 'row' }}>
								{navButtons.map((item, index) => (
									<Button
										key={index}
										className="font-link"
										color="secondary"
										variant="text"
										size="small"
										sx={{
											color: '#ffffff',
											margin: '5px',
											maxHeight: { md: '45px', sm: '35px', xs: '30px' },
											borderRadius: '10px',
											fontSize: { md: '30px', sm: '25px', xs: '20px' },
										}}
									>
										<Link to={item.route} spy={true} offset={50} duration={500} smooth={true}>
											{item.name}
										</Link>
									</Button>
								))}
							</Box>
						</Toolbar>
					</AppBar>
					<Box className="bird-box bird-box-one">
						<Box className="bird bird-one"></Box>
					</Box>
					<Box className="bird-box bird-box-two">
						<Box className="bird bird-two"></Box>
					</Box>
					<Box className="bird-box bird-box-three">
						<Box className="bird bird-three"></Box>
					</Box>
					<Box className="bird-box bird-box-four">
						<Box className="bird bird-four"></Box>
					</Box>
					<Box
						className="mainlogo"
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100%',
							width: '100%',
						}}
					>
						<Box className="firstname" sx={{ display: 'flex', flexDirection: 'row' }}>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								G
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								I
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								A
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								N
							</Typography>
						</Box>
						<Box className="lastname" sx={{ display: 'flex', flexDirection: 'row' }}>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								Z
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								A
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								M
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								O
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								R
							</Typography>
							<Typography id="letter" sx={{ userSelect: 'none', fontSize: { md: '110px', sm: '90px', xs: '55px' } }}>
								A
							</Typography>
						</Box>
						<Typography
							className="mainlogo-2"
							variant="h5"
							sx={{ userSelect: 'none', fontSize: { md: '50px', sm: '40px', xs: '25px' }, textAlign: 'center' }}
						>
							Front End Web Developer
						</Typography>
						<Box sx={{ position: 'absolute', bottom: '1px' }}>
							<IntroPointer />
						</Box>
					</Box>
				</Container>
			</Box>

			<Box className="about-me-plot" sx={{}}>
				<AboutMe />
			</Box>

			<Box
				className="projects-plot"
				sx={{
					backgroundColor: 'var(--white)',
				}}
			>
				<Projects />
			</Box>

			<Box className="contact-me-plot" sx={{ backgrounndColor: 'var(--white)' }}>
				<Contact />
			</Box>
		</ThemeProvider>
	);
}
