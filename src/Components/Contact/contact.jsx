import React, { useEffect } from 'react';
import { Container, Box, ThemeProvider, Typography, Button, TextField, InputBase } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { GithubLogo, LinkedInLogo, ResumeLogo } from '../SVGComponents/svgcomponents';
import { theme } from '../../App';
import './contact.css';

export function Contact() {
	const { ref: contactme, inView: isContactTitleVisible } = useInView();

	useEffect(() => {
		if (isContactTitleVisible) {
			document.querySelectorAll('.title-element').forEach((entry) => {
				entry.classList.add('title-animation');
			});
		}
	}, [isContactTitleVisible]);
	return (
		<ThemeProvider theme={theme}>
			<Container
				className="contact-me-section"
				id="contact"
				maxWidth="false"
				disableGutters
				sx={{ position: 'relative', backgroundColor: 'var(--white)', height: '100vh' }}
			>
				<Box
					className="contact-me-title"
					ref={contactme}
					sx={{ display: 'flex', flexDirection: 'row', mb: 10, zIndex: 1, ml: 2 }}
				>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						C
					</Typography>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						o
					</Typography>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						n
					</Typography>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						t
					</Typography>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						a
					</Typography>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						c
					</Typography>
					<Typography
						variant="p"
						className="title-element"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						t
					</Typography>
				</Box>
				<Box
					className="contact-info-form"
					sx={{
						position: 'relative',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						zIndex: 2,
					}}
				>
					<Box className="contact-form">
						<Box
							component="form"
							action="https://formsubmit.co/e791774e6d0e5034a0811b324b9a8348"
							method="POST"
							sx={{
								backgroundColor: 'rgb(33, 47, 60, 0.3)',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								p: 5,
								mb: 5,
								width: '60vw',
								height: '55vh',
							}}
						>
							<TextField
								variant="outlined"
								label="Name"
								size="small"
								name="name"
								fullWidth
								sx={{ mb: 5, input: { color: 'var(--white)' } }}
							/>
							<TextField
								variant="outlined"
								label="Email"
								size="small"
								name="email"
								fullWidth
								sx={{ mb: 5, input: { color: 'var(--white)' } }}
							/>
							<TextField
								variant="outlined"
								label="Message"
								size="small"
								name="message"
								multiline
								rows={3}
								fullWidth
								inputProps={{ style: { color: 'var(--white)' } }}
								sx={{ mb: 5 }}
							/>
							<Button type="submit" variant="contained" color="secondary" size="small" sx={{ width: '13vw' }}>
								Submit
							</Button>
						</Box>
					</Box>
					<Box
						className="links"
						sx={{
							display: 'flex',
							flexDirection: 'row',
							width: { xs: '100%', sm: '50%', md: '50%' },
							justifyContent: 'space-around',
							alignContent: 'center',
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
								width: { xs: '15vw', sm: '13vw', md: '7vw' },
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
			</Container>
		</ThemeProvider>
	);
}
