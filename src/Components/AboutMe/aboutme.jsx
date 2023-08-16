import React from 'react';
import { ThemeProvider, Box, Typography, Avatar, Grid } from '@mui/material';
import { ReactLogo, NodeJSLogo, PostgreSQLLogo, PythonLogo, JavascriptLogo } from '../SVGComponents/svgcomponents';
import PicofMe from './me_pic.jpeg';
import './aboutme.css';
import { theme } from '../../App';

export function AboutMe() {
	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					color: 'var(--darkblue)',
					textAlign: 'justify',
					lineHeight: { xs: '1.1' },
					margin: '0 auto',
				}}
			>
				<Box
					sx={{
						maxWidth: '1000px',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						flexDirection: { md: 'row', sm: 'column', xs: 'column' },
						margin: '0 auto',
					}}
				>
					<Box
						className="avatar-and-skills"
						sx={{ width: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
					>
						<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
							<Avatar
								alt="Gian Zamora"
								src={PicofMe}
								sx={{
									height: { sm: '270px', xs: '250px' },
									width: { sm: '270px', xs: '250px' },
									mb: { sm: 2, xs: 4 },
								}}
							/>
						</Box>

						<Grid
							container
							justifyContent="center"
							columnSpacing={1}
							columns={5}
							wrap="no-wrap"
							sx={{ width: '100%', mb: { sm: 0, xs: 2 } }}
						>
							<Grid item sx={2}>
								<Box
									sx={{
										height: '50px',
										width: '50px',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Box className="logo">
										<ReactLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item sx={2}>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo">
										<NodeJSLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item sx={2}>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo">
										<PostgreSQLLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item sx={2}>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo">
										<JavascriptLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item sx={2}>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo">
										<PythonLogo />
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Box>

					<Box sx={{ maxWidth: '400px', minWidth: '250px', m: { sm: 0, xs: 2 } }}>
						<Typography variant="body" sx={{ fontSize: { md: '27px', sm: '22px', xs: '18px' } }}>
							Hello there!
						</Typography>
						<Typography
							variant="body"
							paragraph="true"
							sx={{ textIndent: { md: '50px', xs: '25px' }, fontSize: { md: '27px', sm: '22px', xs: '18px' } }}
						>
							I am a Full Stack Software Engineer with a degree in Applied Mathematics and a Certificate in Web Development from
							the University of California, Riverside. With extensive experience in management, advanced mathematics, and
							participation in various open-source projects, I am determined to employ skills like problem solving, being a self
							starter, and being a team player. My current expertise focuses around React, Node, SQL and Python, rounding me out
							to be a perfect inclusion to any company.
						</Typography>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
