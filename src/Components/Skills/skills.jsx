import React, { useEffect } from 'react';
import { Container, Box, Typography, ThemeProvider, Grid } from '@mui/material';
import { theme } from '../../App';
import { useInView } from 'react-intersection-observer';
import {
	SecondTransSkills,
	HTML5Logo,
	CSS3Logo,
	ReactLogo,
	NodeJSLogo,
	MySQLLogo,
	ExpressLogo,
	ReactRouterLogo,
	PostgreSQLLogo,
	GithubLogo,
	GitLogo,
	ViteLogo,
	FigmaLogo,
} from '../SVGComponents/svgcomponents';
import './skills.css';

export function Skills() {
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	useEffect(() => {
		if (myElementIsVisible) {
			document.querySelectorAll('.title').forEach((entry) => {
				entry.classList.add('title-animation');
			});
		}
	}, [myElementIsVisible]);

	return (
		<ThemeProvider theme={theme}>
			<Box className="skills-main-box" sx={{ position: 'relative', top: 0, backgroundColor: '#30475E' }}>
				<Container className="skills-container" maxWidth="false" disableGutters sx={{ ml: 0, mr: 0 }}>
					<Box className="peaks" sx={{ position: 'absolute', zIndex: 0 }}>
						<SecondTransSkills />
					</Box>
					<Container
						disableGutters
						className="skills-scroll"
						maxWidth="false"
						sx={{
							height: { xs: '250vh', sm: '180vh', md: '150vh' },
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
						}}
					>
						<Box className="title-wrapper" ref={myRef} sx={{ display: 'flex', flexDirection: 'row', ml: 2, zIndex: 2 }}>
							<Typography
								className="title"
								variant="p"
								sx={{ userSelect: 'none', fontSize: { xs: '13vw', sm: '11vw', md: '9vw' } }}
							>
								S
							</Typography>
							<Typography
								className="title"
								variant="p"
								sx={{ userSelect: 'none', fontSize: { xs: '13vw', sm: '11vw', md: '9vw' } }}
							>
								k
							</Typography>
							<Typography
								className="title"
								variant="p"
								sx={{ userSelect: 'none', fontSize: { xs: '13vw', sm: '11vw', md: '9vw' } }}
							>
								i
							</Typography>
							<Typography
								className="title"
								variant="p"
								sx={{ userSelect: 'none', fontSize: { xs: '13vw', sm: '11vw', md: '9vw' } }}
							>
								l
							</Typography>
							<Typography
								className="title"
								variant="p"
								sx={{ userSelect: 'none', fontSize: { xs: '13vw', sm: '11vw', md: '9vw' } }}
							>
								l
							</Typography>
							<Typography
								className="title"
								variant="p"
								sx={{ userSelect: 'none', fontSize: { xs: '13vw', sm: '11vw', md: '9vw' } }}
							>
								s
							</Typography>
						</Box>

						<Grid
							container
							direction="row"
							justifyContent="center"
							alignItems="center"
							rowSpacing={8}
							columnSpacing={6}
							sx={{ mt: 10, zIndex: 1 }}
						>
							<Grid className="logo-card" alignItems="center" justifyContent="center" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<HTML5Logo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										HTML5
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<CSS3Logo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										CSS3
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<ReactLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										React
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<NodeJSLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										NodeJS
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<MySQLLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										MySQL
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo" id="size-upgrade">
											<ExpressLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										ExpressJS
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<ReactRouterLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{
											pl: 1,
											pr: 1,
											userSelect: 'none',
											fontSize: { xs: '35px', md: '40px' },
										}}
									>
										React Router
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<PostgreSQLLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										PostgreSQL
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<GithubLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										Github
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<GitLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										Git(bash)
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo">
											<ViteLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										Vite
									</Typography>
								</Box>
							</Grid>

							<Grid className="logo-card" item md={3} sm={4} xs={6}>
								<Box
									sx={{
										height: '25vh',
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
										<Box className="logo" id="figma-downgrade">
											<FigmaLogo />
										</Box>
									</Box>
									<Typography
										variant="h4"
										className="logo-titles"
										sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { xs: '35px', md: '40px' } }}
									>
										Figma
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
