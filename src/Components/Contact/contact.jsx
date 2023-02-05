import React from 'react';
import { Container, Box, ThemeProvider, Typography, Stack, Card, CardContent, Divider, Button } from '@mui/material';
import './contact.css';

export function Contact() {
	return (
		<ThemeProvider>
			<Container
				className="contact-me-section"
				maxWidth="false"
				sx={{ position: 'relative', backgroundColor: 'var(--white)', height: '100vh' }}
			>
				<Box
					className="contact-me-title"
					sx={{ display: 'flex', flexDirection: 'row', position: 'sticky', top: '20px', mb: 22, zIndex: 2 }}
				>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						C
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						o
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						n
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						t
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						a
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						c
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						t
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					></Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						M
					</Typography>
					<Typography
						variant="p"
						className="title-letter"
						sx={{ userSelect: 'none', fontSize: { xs: '11vw', sm: '9vw', md: '8vw' } }}
					>
						e
					</Typography>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
