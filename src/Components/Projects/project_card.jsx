import React from 'react';
import { ThemeProvider, Box, CardMedia, Typography, Grid, Button } from '@mui/material';
import { theme } from '../../App';
import './projects.css';

export function ProjectCard({ project }) {
	return (
		<ThemeProvider theme={theme}>
			<Box
				className="project-container"
				sx={{
					width: { sm: '75vw', xs: '90vw' },
					maxWidth: { md: '1100px' },
					minWidth: { md: '1000px', sm: '550px' },
					height: '70vh',
					minHeight: '660px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly',
					flexDirection: 'column',
					color: 'var(--darkblue)',
					backgroundColor: 'white',
					boxShadow: '0 20px 30px -18px #222',
				}}
			>
				<Box className="project-title">
					<Typography variant="body2" sx={{ fontSize: { md: '50px', sm: '42px', xs: '28px' }, fontFamily: 'Bronson' }}>
						{project.name}
					</Typography>
				</Box>

				<Box
					className="everything-but-title"
					sx={{
						display: 'flex',
						flexDirection: { md: 'row-reverse', xs: 'column' },
						alignItems: 'center',
						justifyContent: 'center',
						perspective: '900px',
					}}
				>
					<Box
						className="project-right"
						sx={{
							width: { md: '500px', sm: '400px', xs: '300px' },
							height: { md: '450px', sm: '350px', xs: '300px' },
							mb: { xs: 3 },
						}}
					>
						<CardMedia
							component="video"
							image={project.video.path}
							autoPlay
							loop
							muted
							playsInline
							sx={{ width: '100%', height: '100%', objectFit: 'fill' }}
						/>
						<Box
							className="button-box-container"
							sx={{
								width: '100%',
								position: 'absolute',
								bottom: '0px',
								display: 'flex',
								justifyContent: 'end',
							}}
						>
							<Button
								className="button_box"
								variant="contained"
								color="secondary"
								size="small"
								disableElevation
								href={project.github}
								target="_blank"
								sx={{ m: 1, opacity: { md: '0.5', xs: '1' } }}
							>
								Github
							</Button>
						</Box>
					</Box>

					<Box
						className="description-and-skills"
						sx={{
							height: { md: '100%' },
							maxWidth: { md: '350px' },
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: { md: 'space-around' },
							zIndex: 1,
						}}
					>
						<Typography
							variant="p"
							paragraph={true}
							sx={{ fontSize: { md: '27px', sm: '22px', xs: '18px' }, textAlign: 'center', ml: 2, mr: 2, mb: 2 }}
						>
							{project.description}
						</Typography>
						<Box sx={{ width: { xs: '200px', sm: '300px', md: '300px' } }}>
							<Grid container columnSpacing={4} justifyContent="center" alignItems="center" sx={{ flexGrow: 1, mb: 2 }}>
								{project.skillsUsed.map((icon, i) => (
									<Grid item key={i} className="logo-outer-box" justifyContent="center" xs={4} sm={4} md={4}>
										<Box className="logo-inner-box" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											<Box className="logo">{icon}</Box>
										</Box>
									</Grid>
								))}
							</Grid>
						</Box>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
}
