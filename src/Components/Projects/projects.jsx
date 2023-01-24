import React, { useEffect } from 'react';
import { Container, Box, ThemeProvider, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../App';
import './projects.css';

export function Projects() {
	const { ref: secondRef, inView: isTitleVisible } = useInView();

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
				sx={{ height: { xs: '220vh', sm: '180vh', md: '150vh' } }}
			>
				<Box
					className="section-title"
					ref={secondRef}
					sx={{ display: 'flex', flexDirection: 'row', position: 'sticky', top: '20px', ml: 2, zIndex: 2 }}
				>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						P
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						r
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						o
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						j
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						e
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						c
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						t
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '15vw', sm: '12vw', md: '9vw' } }}
					>
						s
					</Typography>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
