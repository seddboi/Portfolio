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
					mb: '300px',
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
									mb: 4,
								}}
							/>
						</Box>

						<Grid container justifyContent="center" columnSpacing={1} columns={5} sx={{ width: '100%', mb: 2 }}>
							<Grid item>
								<Box
									sx={{
										height: '50px',
										width: '50px',
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Box className="logo" data-tooltip="React.js">
										<ReactLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo" data-tooltip="Node.js">
										<NodeJSLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo" data-tooltip="PostgreSQL">
										<PostgreSQLLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo" data-tooltip="Javascript">
										<JavascriptLogo />
									</Box>
								</Box>
							</Grid>

							<Grid item>
								<Box sx={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Box className="logo" data-tooltip="Python">
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
							paragraph={true}
							sx={{ textIndent: { md: '50px', xs: '25px' }, fontSize: { md: '27px', sm: '22px', xs: '18px' } }}
						>
							I am Gian (gee•AHH•n) Zamora, a skilled Full Stack Web Developer holding a Bachelor's degree in Applied Mathematics
							and a Certificate in Full Stack Web Development from the University of California, Riverside. Leveraging my
							proficiency in advanced mathematics, statistics, and active participation in open-source projects, I am adept at
							problem-solving, self-initiation, and collaborative teamwork. My current expertise encompasses React, Node, SQL,
							Javascript, and Python, making me a valuable asset for any organization seeking a versatile and accomplished
							professional to drive impactful solutions.
						</Typography>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
