import React, { useState } from 'react';
import { Container, Box, ThemeProvider, Typography, Button, InputBase, ButtonBase } from '@mui/material';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { BiSolidFolderOpen } from 'react-icons/bi';
import { theme } from '../../App';
import './contact.css';

export function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

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
					minHeight: '100vh',
				}}
			>
				<Typography
					className="section-title"
					sx={{
						userSelect: 'none',
						fontSize: { xs: '25px', sm: '25px', md: '30px' },
						pl: '20px',
						zIndex: 0,
						color: 'var(--mediumblue)',
					}}
				>
					Contact Me
				</Typography>
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
							<InputBase
								className="form-text-field"
								placeholder="Name"
								autoComplete="name"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								sx={{
									input: { color: 'var(--mediumblue)' },
								}}
							/>
							<InputBase
								className="form-text-field"
								placeholder="Email"
								autoComplete="email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								sx={{
									input: { color: 'var(--mediumblue)' },
								}}
							/>
							<InputBase
								className="form-text-field"
								placeholder="Message"
								multiline
								rows={3}
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
								inputProps={{ style: { color: 'var(--mediumblue)', padding: '5px 16px' } }}
							/>
							<Button
								type="submit"
								variant="text"
								color="secondary"
								size="small"
								disabled={name !== '' && email !== '' && message !== '' ? false : true}
								sx={{ width: '100%', color: 'var(--lightgrey)', ':hover': { color: 'var(--mediumblue)' } }}
							>
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
						<ButtonBase className="icon-logo" href="https://github.com/seddboi" target="_blank">
							<BsGithub />
							<Typography className="social-links" variant="p">
								Github
							</Typography>
						</ButtonBase>

						<ButtonBase className="icon-logo" href="https://www.linkedin.com/in/gian-zamora/" target="_blank">
							<BsLinkedin />
							<Typography className="social-links" variant="p">
								LinkedIn
							</Typography>
						</ButtonBase>

						<ButtonBase
							className="icon-logo"
							href="https://docs.google.com/document/d/1LkyLpSDd_s-eI2z-rLsB3EuKWc7DE9Oc/edit?usp=sharing&ouid=112215666415015145695&rtpof=true&sd=true"
							target="_blank"
						>
							<BiSolidFolderOpen />
							<Typography className="social-links" variant="p">
								Resume
							</Typography>
						</ButtonBase>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
