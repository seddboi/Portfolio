import React, { useEffect } from 'react';
import { Container, Box, Typography, ThemeProvider, Grid } from '@mui/material';
import { theme } from '../../App';
import { useInView } from 'react-intersection-observer';
import { ReactSVG } from 'react-svg';
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
						<svg
							id="visual"
							viewBox="0 0 900 500"
							width="900"
							height="500"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							version="1.1"
						>
							<path
								d="M0 160L35 289L69 209L104 412L138 342L173 428L208 422L242 372L277 277L312 418L346 343L381 377L415 193L450 296L485 381L519 288L554 266L588 199L623 366L658 232L692 159L727 256L762 280L796 167L831 359L865 212L900 210L900 0L865 0L831 0L796 0L762 0L727 0L692 0L658 0L623 0L588 0L554 0L519 0L485 0L450 0L415 0L381 0L346 0L312 0L277 0L242 0L208 0L173 0L138 0L104 0L69 0L35 0L0 0Z"
								fill="#222831"
								strokeLinecap="square"
								strokeLinejoin="bevel"
							></path>
						</svg>
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
						<Box
							className="title-wrapper"
							ref={myRef}
							sx={{ display: 'flex', flexDirection: 'row', position: 'sticky', top: '20px', ml: 2, zIndex: 2 }}
						>
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
										<ReactSVG className="logo html5-animate" src="src/images/html.svg" />
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
										<ReactSVG className="logo css3-animate" src="src/images/css-3.svg" />
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
										<ReactSVG className="logo react-animate" src="src/images/react.svg" />
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
										<ReactSVG className="logo nodejs-animate" src="src/images/nodejs.svg" />
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
										<ReactSVG className="logo mysql-animate" src="src/images/mysql.svg" />
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
										<ReactSVG className="logo express-animate" id="size-upgrade" src="src/images/express.svg" />
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
										<ReactSVG className="logo react-router-animate" src="src/images/react-router.svg" />
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
										<ReactSVG className="logo postgresql-animate" src="src/images/postgresql.svg" />
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
										<ReactSVG className="logo github-animate" src="src/images/github.svg" />
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
										<ReactSVG className="logo git-animate" src="src/images/git.svg" />
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
										<ReactSVG className="logo vite-animate" src="src/images/vitejs.svg" />
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
										<ReactSVG className="logo figma-animate" id="figma-downgrade" src="src/images/figma.svg" />
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
