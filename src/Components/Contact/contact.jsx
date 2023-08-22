import React, { useEffect } from 'react';
import { Container, Box, ThemeProvider, Typography, Button, TextField, InputBase } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { GithubLogo, LinkedInLogo, ResumeLogo } from '../SVGComponents/svgcomponents';
import { theme } from '../../App';
import './contact.css';

export function Contact() {
	// const { ref: contactme, inView: isContactTitleVisible } = useInView();

	return (
		<ThemeProvider theme={theme}>
			<Container
				className="contact-me-section"
				id="contact"
				maxWidth="false"
				disableGutters
				sx={{
					position: 'relative',
					backgroundColor: 'var(--white)',
					height: '100vh',
				}}
			>
				<Typography
					className="section-title"
					sx={{ userSelect: 'none', fontSize: { xs: '25px', sm: '25px', md: '30px' }, pl: '20px', zIndex: 0 }}
				>
					Contact Me
				</Typography>
				{/* <Box sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
				<Box
					className="contact-info-form"
					sx={{
						height: '100%',
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						zIndex: 2,
					}}
				>
					<Box className="contact-form" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Box
							component="form"
							action="https://formsubmit.co/e791774e6d0e5034a0811b324b9a8348"
							method="POST"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								p: 5,
								mb: 5,
								width: '400px',
								height: '55vh',
							}}
						>
							<TextField
								variant="outlined"
								label="Name"
								size="small"
								name="name"
								fullWidth
								sx={{ mb: 5, input: { color: 'var(--darkblue)' } }}
							/>
							<TextField
								variant="outlined"
								label="Email"
								size="small"
								name="email"
								fullWidth
								sx={{ mb: 5, input: { color: 'var(--darkblue)' } }}
							/>
							<TextField
								variant="outlined"
								label="Message"
								size="small"
								name="message"
								multiline
								rows={3}
								fullWidth
								inputProps={{ style: { color: 'var(--darkblue)' } }}
								sx={{ mb: 5 }}
							/>
							<Button type="submit" variant="text" color="secondary" size="small" sx={{}}>
								Submit
							</Button>
						</Box>
					</Box>

					<Box
						className="links"
						sx={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							justifyContent: 'space-evenly',
							alignContent: 'center',
							maxWidth: '480px',
							mb: 2,
						}}
					>
						<Button
							className="icon-logo"
							href="https://github.com/seddboi"
							target="_blank"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignSelf: 'center',
								justifyContent: 'center',
								width: { xs: '13vw', sm: '10vw', md: '5vw' },
								position: 'relative',
								background: 'transparent',
								p: 0,
								border: 'none',
							}}
						>
							<Box className="link-logo">
								<GithubLogo />
							</Box>
						</Button>

						<Button
							className="icon-logo"
							href="https://www.linkedin.com/in/gian-zamora/"
							target="_blank"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignSelf: 'center',
								justifyContent: 'center',
								width: { xs: '13vw', sm: '10vw', md: '5vw' },
								position: 'relative',
								background: 'transparent',
								p: 0,
								border: 'none',
							}}
						>
							<Box className="link-logo">
								<LinkedInLogo />
							</Box>
						</Button>

						<Button
							className="icon-logo"
							href="https://docs.google.com/document/d/1hdytmMskYmSvmlLCi7IIPyM2keAfKw_lDbU9Xa83mWs/edit?usp=sharing"
							target="_blank"
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignSelf: 'center',
								justifyContent: 'center',
								width: { xs: '13vw', sm: '10vw', md: '5vw' },
								position: 'relative',
								background: 'transparent',
								p: 0,
								border: 'none',
							}}
						>
							<Box className="link-logo">
								<ResumeLogo />
							</Box>
						</Button>
					</Box>
				</Box>
				{/* </Box> */}
			</Container>
		</ThemeProvider>
	);
}
