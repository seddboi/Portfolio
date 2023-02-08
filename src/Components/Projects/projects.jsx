import React, { useState, useEffect } from 'react';
import { Container, Box, ThemeProvider, Typography, Drawer, Stack, Paper, Divider, Grid, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../App';
import Carousel from 'react-material-ui-carousel';
import './projects.css';
import {
	CSS3Logo,
	MySQLLogo,
	NodeJSLogo,
	ReactLogo,
	ReactRouterLogo,
	JavascriptLogo,
	ExpressLogoBlack,
} from '../SVGComponents/svgcomponents';

const pwdntr = {
	name: 'Passwordinator',
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <MySQLLogo />, <ExpressLogoBlack />, <ReactRouterLogo />],
	builtDesc: [
		'This application started from the base of the old password generator that I created a while ago. It started off as just the password generation page, which I then just turned into a password generation component. From here, I established some new pages, such as the home page, saved passwords page, login page, signup page, and just a basic password generation page for generating passwords.',
		'I then set up React Router, for navigation, as this was intended to be an single page application. For the login and sign up pages, I utilized JSON web tokens for user authentication (also for protection of protected routes/pages). I then established different express routes that would allow me to provide CRUD funtionality to my app. After providing the ability to save/delete generated passwords, save/delete custom passwords, and the ability to update passwords.',
		'I then began to connect everything for production. I hosted my back end and database on Railway, as they were one of the few sites who made it very simple. The front end is hosted on Netlify, as their fees for hosting are practically free.',
	],
	github: 'https://github.com/seddboi/passwordinator',
	live: 'https://graceful-dango-eb28ce.netlify.app',
	images: [
		{ path: '/images/passwordinator/pwdtr1.jpeg', alt: 'passwordinator landing page' },
		{ path: '/images/passwordinator/pwdtr2.jpeg', alt: 'passwordinator home page (post-login)' },
		{ path: '/images/passwordinator/pwdtr3.jpeg', alt: 'password save popup' },
		{ path: '/images/passwordinator/pwdtr4.jpeg', alt: 'saved passwords page' },
	],
};

const weathered = {
	name: 'Weathered',
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <JavascriptLogo />, <CSS3Logo />],
	builtDesc: [
		'I began by creating a saved searches bar, to make it easier to track what cities you have searched. This was built using a react state to contain the collection of searches.',
		'I then established a custom react hook to fetch the information from the FreeWeather API, meanwhile hiding the user keys on a small backend server. Once my data was collected, I then displayed it to the page, to provide all of the readouts you see after each search.',
		'To host the project, I created a small backend server using node and express which allowed me to successfully hide the API key used to create fetches under my FreeWeather account, but allows anyone to utilize my application without having to enter in their own API key for functionality. To finalize my project, I then created a static copy of the React/Javascript portion of the front end and hosted it on the server. This was then updated to Netlify.',
	],
	github: 'https://github.com/seddboi/Weathered',
	live: 'https://clinquant-dieffenbachia-128d9b.netlify.app/',
	images: [
		{ path: '/images/weathered/pic1.jpeg', alt: 'weathered landing page' },
		{ path: '/images/weathered/pic2.jpeg', alt: 'weathered weather forecast page' },
		{ path: '/images/weathered/pic3.jpeg', alt: 'bottom of forecast page (scroll)' },
	],
};

const thtMchne = {
	name: 'Thought Machine',
	skillsUsed: [<ReactLogo />, <NodeJSLogo />, <JavascriptLogo />, <CSS3Logo />],
	builtDesc: [
		'I started with the idea of creating more efficient custom react hooks. To build on that skill, I began with the idea of "shower thoughts" and how they pass right through your mind and disappear forever. So thats what I got started on. I began creating the simple interface that was the search bar, and planned where the thoughts would be displayed after submission. I created a hook that would essentially take in the message being submitted, create a new object with a time key 15 seconds into the future, and an id key. This would allow me to establish a deletion button as well as allow me to set a timeout feature that would automatically delete the messages.',
		'Along with some simple state declarations, my project was complete; all of the project was done from my own javascript interpretation of native methods and practices I have learned.',
	],
	github: 'https://github.com/seddboi/Thought-Machine',
	live: 'https://seddboi.github.io/Thought-Machine/',
	images: [
		{ path: '/images/thoughtMachine/pic1.jpeg', alt: 'thought machine landing page' },
		{ path: '/images/thoughtMachine/pic2.jpeg', alt: 'thought machine with new submissions' },
	],
};

export function Projects() {
	const { ref: secondRef, inView: isTitleVisible } = useInView();

	const [project, setProject] = useState(pwdntr);
	const [pwdtrClick, setPwdtrClick] = useState(true);
	const [tmClick, setTMClick] = useState(false);
	const [wClick, setWClick] = useState(false);

	useEffect(() => {
		if (isTitleVisible) {
			document.querySelectorAll('.title-letter').forEach((entry) => {
				entry.classList.add('title-animation');
			});
		}
	}, [isTitleVisible]);

	return (
		<ThemeProvider theme={theme}>
			<Container
				className="projects-section"
				id="projects"
				disableGutters
				maxWidth="false"
				sx={{
					height: { xs: '240vh', sm: '220vh', md: '190vw' },
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box
					className="section-title"
					ref={secondRef}
					sx={{
						display: 'flex',
						flexDirection: 'row',
						ml: 2,
						mb: 2,
						zIndex: 2,
					}}
				>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						P
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						r
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						o
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						j
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						e
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						c
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						t
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '12.5vw', sm: '11vw', md: '9vw' } }}
					>
						s
					</Typography>
				</Box>

				<Box
					className="sticky-projects"
					sx={{
						top: { xs: '15vh', sm: '15vh', md: '20vh' },
						zIndex: 1,
						height: { xs: '70vh', sm: '70vh', md: '70vh' },
						width: { xs: '83vw', sm: '83vw', md: '85vw' },
						alignSelf: 'center',
						mb: { xs: '50vh', sm: '45vh', md: '40vh' },
						display: 'flex',
						flexDirection: { xs: 'column', sm: 'column', md: 'row' },
					}}
				>
					<Container
						className="sidebar"
						maxWidth={false}
						disableGutters
						sx={{
							height: { xs: '50px', sm: '50px', md: '100%' },
							width: { xs: '100%', sm: '100%', md: '150px' },
							position: 'relative',
							display: 'flex',
							flexDirection: { sm: 'row', md: 'column' },
						}}
					>
						<Box
							className="project-selector"
							tabIndex={1}
							onClick={() => {
								setProject(pwdntr);
								setPwdtrClick(true);
								setTMClick(false);
								setWClick(false);
							}}
							sx={{
								height: { xs: 'auto', sm: 'auto', md: '100%' },
								width: { xs: '100%', sm: '100%', md: 'auto' },
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: pwdtrClick ? 'rgb(40, 55, 71)' : 'rgb(48, 71, 94)',
								fontFamily: 'Sharetech',
								userSelect: 'none',
							}}
						>
							Passwordinator
						</Box>

						<Box
							className="project-selector"
							tabIndex={1}
							onClick={() => {
								setProject(weathered);
								setPwdtrClick(false);
								setTMClick(false);
								setWClick(true);
							}}
							sx={{
								height: { xs: 'auto', sm: 'auto', md: '100%' },
								width: { xs: '100%', sm: '100%', md: 'auto' },
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: wClick ? 'rgb(40, 55, 71)' : 'rgb(48, 71, 94)',
								fontFamily: 'Sharetech',
								userSelect: 'none',
							}}
						>
							Weathered
						</Box>

						<Box
							className="project-selector"
							tabIndex={1}
							onClick={() => {
								setProject(thtMchne);
								setPwdtrClick(false);
								setTMClick(true);
								setWClick(false);
							}}
							sx={{
								height: { xs: 'auto', sm: 'auto', md: '100%' },
								width: { xs: '100%', sm: '100%', md: 'auto' },
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: tmClick ? 'rgb(40, 55, 71)' : 'rgb(48, 71, 94)',
								fontFamily: 'Sharetech',
								userSelect: 'none',
							}}
						>
							Thought Machine
						</Box>
					</Container>

					<Container
						className="project-content"
						maxWidth={false}
						disableGutters
						sx={{
							p: { xs: 0, sm: 0, md: 1 },
							width: '100%',
							height: '100%',
							pl: { xs: 3, sm: 3, md: 10 },
							pr: { xs: 3, sm: 3, md: 10 },
							backgroundColor: '#F8F9F9',
							overflowY: 'scroll',
						}}
					>
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography
								variant="h4"
								sx={{
									color: 'var(--darkblue)',
									fontSize: { xs: '6vw', sm: '6vw', md: '5vw' },
									mt: { xs: 2, sm: 2, md: 4 },
									mb: { xs: 2, sm: 2, md: 4 },
									userSelect: 'none',
									fontFamily: 'Bronson',
								}}
							>
								{project.name}
							</Typography>

							<Box
								className="carousel-and-skills"
								sx={{
									display: 'flex',
									flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
									justifyContent: 'space-around',
									alignItems: 'center',
									width: '100%',
									height: 'auto',
								}}
							>
								<Box
									className="carousel"
									sx={{ width: { xs: '290px', sm: '400px', md: '450px', lg: '500px' }, height: 'auto', mb: 4 }}
								>
									<Carousel>
										{project.images.map((item, i) => (
											<Box
												key={i}
												component="img"
												sx={{ width: '100%', height: 'auto', borderRadius: '4px' }}
												alt={item.alt}
												src={item.path}
											></Box>
										))}
									</Carousel>
								</Box>

								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										width: { xs: '100%', sm: '100%', md: '55vw', lg: '40%' },
										height: '100%',
										ml: { xs: 0, sm: 0, md: 0, lg: 3 },
									}}
								>
									<Typography
										variant="body1"
										sx={{ display: 'flex', color: 'rgb(48, 71, 94)', alignSelf: 'start', userSelect: 'none' }}
									>
										Tech Used:
									</Typography>
									<Grid container columnSpacing={2} rowSpacing={3} className="skill-svgs">
										{project.skillsUsed.map((svg, i) => (
											<Grid key={i} item lg={6} md={3} sm={4} xs={6} display="flex" justifyContent="center" alignItems="center">
												<Box
													className="skill-logo"
													sx={{
														display: 'flex',
														flexDirection: 'column',
														alignSelf: 'center',
														justifyContent: 'center',
														position: 'relative',
														width: { xs: '17vw', sm: '14vw', md: '9vw', lg: '6vw' },
													}}
												>
													<Box>{svg}</Box>
												</Box>
											</Grid>
										))}
									</Grid>
								</Box>
							</Box>

							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									width: { xs: '100%', sm: '100%', md: '55vw' },
									mt: 4,
									mb: 4,
								}}
							>
								<Typography variant="body1" sx={{ color: 'rgb(48, 71, 94)', alignSelf: 'start', userSelect: 'none' }}>
									Building Process:
								</Typography>

								<Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '90%' }}>
									{project.builtDesc.map((paragraph, i) => (
										<Typography
											key={i}
											variant="p"
											sx={{
												color: 'rgb(40, 55, 71)',
												fontFamily: 'Sharetech',
												textIndent: '20px',
												textAlign: 'justify',
												userSelect: 'none',
											}}
										>
											{paragraph}
										</Typography>
									))}
								</Box>
							</Box>

							<Box
								className="button-links"
								sx={{ width: { xs: '100%', sm: '60%', md: '40%' }, display: 'flex', justifyContent: 'space-around', mb: 3 }}
							>
								<Button variant="contained" size="small" color="secondary" href={project.github} target="_blank">
									Github
								</Button>
								<Button variant="contained" size="small" color="secondary" href={project.live} target="_blank">
									Live Site
								</Button>
							</Box>
						</Box>
					</Container>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
