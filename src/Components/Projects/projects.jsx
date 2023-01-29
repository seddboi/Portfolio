import React, { useState, useEffect } from 'react';
import { Container, Box, ThemeProvider, Typography, Stack, Card, CardContent, Divider, Button } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../App';
import Carousel from 'react-material-ui-carousel';
import { Popup } from '../Popup/popup';
import './projects.css';

const pwdntr = {
	name: 'Passwordinator',
	skillsUsed: [
		'src/images/react.svg',
		'src/images/nodejs.svg',
		'src/images/mysql.svg',
		'src/images/express-small.svg',
		'src/images/react-router.svg',
	],
	builtDesc: [
		'This application started from the base of the old password generator that I created a while ago. It started off as just the password generation page, which I then just turned into a password generation component. From here, I established some new pages, such as the home page, saved passwords page, login page, signup page, and just a basic password generation page for generating passwords.',
		'I then set up React Router, for navigation, as this was intended to be an single page application. For the login and sign up pages, I utilized JSON web tokens for user authentication (also for protection of proteted routes/pages). I then established different express routes that would allow me to provide CRUD funtionality to my app. After providing the ability to save/delete generated passwords, save/delete custom passwords, and the ability to update passwords, I then began to connect decorate everything for production.',
		'I hosted my back end, and database all on Railway, as they were one of the few sites who made it very simple. The front end is hosted on Netlify, as their fees for hosting are practically free.',
	],
	github: 'https://github.com/seddboi/passwordinator',
	live: 'https://graceful-dango-eb28ce.netlify.app',
	images: [
		{ path: 'src/images/passwordinator/pic1.png', alt: 'passwordinator landing page' },
		{ path: 'src/images/passwordinator/pic2.png', alt: 'passwordinator home page (post-login)' },
		{ path: 'src/images/passwordinator/pic3.png', alt: 'password save popup' },
		{ path: 'src/images/passwordinator/pic4.png', alt: 'saved passwords page' },
	],
};

const weathered = {
	name: 'Weathered',
	skillsUsed: ['src/images/react.svg', 'src/images/nodejs.svg', 'src/images/javascript.svg', 'src/images/css-3.svg'],
	builtDesc: [
		'I began by creating a saved searches bar, to make it easier to track what cities you have searched. This was built using a react state to contain the collection of searches.',
		'I then established a custom react hook to fetch the information from the FreeWeather API, meanwhile hiding the user keys on a small backend server. Once my data was collected, I then displayed it to the page, to provide all of the readouts you see after each search.',
		'To host the project, I created a small backend server using node and express which allowed me to successfully hide the API key used to create fetches under my FreeWeather account, but allows anyone to utilize my application without having to enter in their own API key for functionality. To finalize my project, I then created a static copy of the React/Javascript portion of the front end and hosted it on the server. This was then updated to Netlify.',
	],
	github: 'https://github.com/seddboi/Weathered',
	live: 'https://clinquant-dieffenbachia-128d9b.netlify.app/',
};

const thtMchne = {
	name: 'Thought Machine',
	skillsUsed: ['src/images/react.svg', 'src/images/nodejs.svg', 'src/images/javascript.svg', 'src/images/css-3.svg'],
	builtDesc: [
		'I started with the idea of creating more efficient custom react hooks. To build on that skill, I began with the idea of "shower thoughts" and how they pass right through your mind and disappear forever. So thats what I got started on. I began creating the simple interface that was the search bar, and planned where the thoughts would be displayed after submission. I created a hook that would essentially take in the message being submitted, create a new object with a time key 15 seconds into the future, and an id key. This would allow me to establish a deletion button as well as allow me to set a timeout feature that would automatically delete the messages.',
		'Along with some simple state declarations, my project was complete; all of the project was done from my own javascript interpretation of native methods and practices I have learned.',
	],
	github: 'https://github.com/seddboi/Thought-Machine',
	live: 'https://seddboi.github.io/Thought-Machine/',
};

export function Projects() {
	const { ref: secondRef, inView: isTitleVisible } = useInView();
	const [open, setOpen] = useState(false);
	const [project, setProject] = useState(pwdntr);

	const handleOpen = (project) => {
		setProject(project);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
				disableGutters
				maxWidth="false"
				sx={{ height: { xs: '300vh', sm: '380vh', md: '200vw' } }}
			>
				<Box
					className="section-title"
					ref={secondRef}
					sx={{ display: 'flex', flexDirection: 'row', position: 'sticky', top: '20px', ml: 2, mb: 22, zIndex: 2 }}
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

				<Box className="project-cards" sx={{ position: 'relative', zIndex: 1 }}>
					<Stack alignItems="center" spacing={30}>
						<Card
							className="project-card"
							elevation={3}
							sx={{
								width: { xs: '85vw', sm: '80vw', md: '70vw' },
								height: 'auto',
								backgroundColor: 'var(--lightgrey)',
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'column', md: 'row' },
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								className="carousel-container"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									width: { xs: '100%', sm: '100%', md: '60%' },
									height: 'auto',
									m: { sm: 0, md: 2 },
								}}
							>
								<Carousel>
									{pwdntr.images.map((item, i) => (
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
							<CardContent
								className="project-message"
								sx={{
									width: { xs: '60vw', sm: '60vw', md: '40%' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<Typography variant="h4" sx={{ fontSize: { xs: '9vw', sm: '7vw', md: '4vw' } }}>
									Passwordinator
								</Typography>
								<Typography
									variant="p"
									sx={{ fontSize: { xs: '5vw', sm: '3vw', md: '2.5vw' }, fontFamily: 'Sharetech', lineHeight: '1em' }}
								>
									A simple password "keychain" for all of your password needs! This is a custom interpretation of Google's
									passwords page.
								</Typography>
								<Box sx={{ mt: 3 }}>
									<Button
										size="small"
										variant="contained"
										color="secondary"
										onClick={() => {
											handleOpen(pwdntr);
										}}
									>
										Learn More ...
									</Button>
								</Box>
							</CardContent>
						</Card>

						<Card
							className="project-card"
							elevation={3}
							sx={{
								width: { xs: '85vw', sm: '80vw', md: '70vw' },
								height: 'auto',
								backgroundColor: 'var(--lightgrey)',
								display: 'flex',
								flexDirection: { xs: 'column-reverse', sm: 'column-reverse', md: 'row' },
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<CardContent
								className="project-message"
								sx={{
									width: { xs: '60vw', sm: '60vw', md: '40%' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<Typography variant="h4" sx={{ fontSize: { xs: '9vw', sm: '7vw', md: '4vw' } }}>
									Weathered
								</Typography>
								<Typography
									variant="p"
									sx={{ fontSize: { xs: '5vw', sm: '3vw', md: '2.5vw' }, fontFamily: 'Sharetech', lineHeight: '1em' }}
								>
									A basic React Weather Dashboard. Collects and displays all of the necessary forecast information, for hourly and
									daily weather.
								</Typography>
								<Box sx={{ mt: 3 }}>
									<Button
										size="small"
										variant="contained"
										color="secondary"
										onClick={() => {
											handleOpen(weathered);
										}}
									>
										Learn More ...
									</Button>
								</Box>
							</CardContent>
							<Box
								className="carousel-container"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									width: { xs: '100%', sm: '100%', md: '60%' },
									height: 'auto',
									m: { sm: 0, md: 2 },
								}}
							>
								<Carousel>
									{pwdntr.images.map((item, i) => (
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
						</Card>

						<Card
							className="project-card"
							elevation={3}
							sx={{
								width: { xs: '85vw', sm: '80vw', md: '70vw' },
								height: 'auto',
								backgroundColor: 'var(--lightgrey)',
								display: 'flex',
								flexDirection: { xs: 'column', sm: 'column', md: 'row' },
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Box
								className="carousel-container"
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									width: { xs: '100%', sm: '100%', md: '60%' },
									height: 'auto',
									m: { sm: 0, md: 2 },
								}}
							>
								<Carousel>
									{pwdntr.images.map((item, i) => (
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
							<CardContent
								className="project-message"
								sx={{
									width: { xs: '60vw', sm: '60vw', md: '40%' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<Typography variant="h4" sx={{ fontSize: { xs: '9vw', sm: '6vw', md: '4vw' } }}>
									Thought Machine
								</Typography>
								<Typography
									variant="p"
									sx={{ fontSize: { xs: '5vw', sm: '3vw', md: '2.5vw' }, fontFamily: 'Sharetech', lineHeight: '1em' }}
								>
									A place for all of your "shower thoughts"! Just 15 seconds and they are gone.
								</Typography>
								<Box sx={{ mt: 3 }}>
									<Button
										size="small"
										variant="contained"
										color="secondary"
										open={open}
										onClick={() => {
											handleOpen(thtMchne);
										}}
									>
										Learn More ...
									</Button>
								</Box>
							</CardContent>
						</Card>
					</Stack>
				</Box>
			</Container>
			<Popup open={open} handleClose={handleClose} project={project} />
		</ThemeProvider>
	);
}
