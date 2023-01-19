import React, { useEffect } from 'react';
import { Container, Box, Typography, ThemeProvider } from '@mui/material';
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

			document.querySelector('.skills-main-box').classList.add('skills-main-box-animation');
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
					<Container disableGutters className="skills-scroll" maxWidth="false" sx={{ height: '200vh' }}>
						<Box
							className="title-wrapper"
							ref={myRef}
							sx={{ display: 'flex', flexDirection: 'row', zIndex: 9999, position: 'sticky', top: 0, ml: 2, mb: 10 }}
						>
							<Typography className="title" sx={{ fontSize: { md: '130px', sm: '100px', xs: '65px' } }}>
								S
							</Typography>
							<Typography className="title" sx={{ fontSize: { md: '130px', sm: '100px', xs: '65px' } }}>
								k
							</Typography>
							<Typography className="title" sx={{ fontSize: { md: '130px', sm: '100px', xs: '65px' } }}>
								i
							</Typography>
							<Typography className="title" sx={{ fontSize: { md: '130px', sm: '100px', xs: '65px' } }}>
								l
							</Typography>
							<Typography className="title" sx={{ fontSize: { md: '130px', sm: '100px', xs: '65px' } }}>
								l
							</Typography>
							<Typography className="title" sx={{ fontSize: { md: '130px', sm: '100px', xs: '65px' } }}>
								s
							</Typography>
						</Box>
						<Box
							className="skills-wrapper"
							sx={{
								position: 'relative',
								zIndex: 9998,
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'stretch',
								justifyContent: 'center',
								flexWrap: 'wrap',
								m: 2,
							}}
						>
							<Box
								className="logo-card"
								sx={{
									width: { md: '20vw', sm: '30vw' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: 'center',
									m: 3,
									pt: 1,
									pb: 1,
									backgroundColor: 'rgba(66, 73, 73, .5)',
									borderRadius: '15px',
								}}
							>
								<ReactSVG className="logo react-animate" src="src/images/react.svg" />
								<Typography
									variant="h4"
									className="logo-titles"
									sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { lg: '75px', md: '60px', sm: '40px' } }}
								>
									React
								</Typography>
							</Box>

							<Box
								className="logo-card"
								sx={{
									width: { md: '20vw', sm: '30vw' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: 'center',
									m: 3,
									pt: 1,
									pb: 1,
									backgroundColor: 'rgba(66, 73, 73, .5)',
									borderRadius: '15px',
								}}
							>
								<Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
									<ReactSVG className="logo nodejs-animate" src="src/images/nodejs.svg" />
								</Box>
								<Typography
									variant="h4"
									className="logo-titles"
									sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { lg: '75px', md: '60px', sm: '40px' } }}
								>
									NodeJS
								</Typography>
							</Box>

							<Box
								className="logo-card"
								sx={{
									width: { md: '20vw', sm: '30vw' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: 'center',
									m: 3,
									pt: 1,
									pb: 1,
									backgroundColor: 'rgba(66, 73, 73, .5)',
									borderRadius: '15px',
								}}
							>
								<Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
									<ReactSVG className="logo mysql-animate" src="src/images/mysql.svg" />
								</Box>
								<Typography
									variant="h4"
									className="logo-titles"
									sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { lg: '75px', md: '60px', sm: '40px' } }}
								>
									MySQL
								</Typography>
							</Box>

							<Box
								className="logo-card"
								sx={{
									width: { md: '20vw', sm: '30vw' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: 'center',
									m: 3,
									pt: 1,
									pb: 1,
									backgroundColor: 'rgba(66, 73, 73, .5)',
									borderRadius: '15px',
								}}
							>
								<Box sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
									<ReactSVG className="logo express-animate" id="size-upgrade" src="src/images/express.svg" />
								</Box>
								<Typography
									variant="h4"
									className="logo-titles"
									sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { lg: '70px', md: '55px', sm: '35px' } }}
								>
									ExpressJS
								</Typography>
							</Box>

							<Box
								className="logo-card"
								sx={{
									width: { md: '20vw', sm: '30vw' },
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'space-between',
									alignItems: 'center',
									m: 3,
									pt: 1,
									pb: 1,
									backgroundColor: 'rgba(66, 73, 73, .5)',
									borderRadius: '15px',
								}}
							>
								<Box>
									<ReactSVG className="logo postgresql-animate" src="src/images/postgresql.svg" />
								</Box>
								<Typography
									variant="h4"
									className="logo-titles"
									sx={{ pl: 1, pr: 1, userSelect: 'none', fontSize: { lg: '70px', md: '55px', sm: '35px' } }}
								>
									PostgreSQL
								</Typography>
							</Box>

							{/*<Box
								className="logo-card"
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
									alignSelf: 'start',
								}}
							>
								<ReactSVG className="logo github-animate" src="src/images/github.svg" />
								<Typography variant="h4" className="logo-titles" sx={{ m: 1, userSelect: 'none' }}>
									Github
								</Typography>
							</Box> */}
						</Box>
					</Container>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
