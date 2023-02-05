import React from 'react';
import { Container, Box, ThemeProvider, Typography, Stack, Card, CardContent, Divider, Button } from '@mui/material';
import './contact.css';

export function Contact() {
	return (
		<ThemeProvider>
			<Container className="contact-me-section" maxWidth={false} sx={{ backgroundColor: 'var(--white)', height: '110vh' }}>
				<Box className="contact-me-title" sx={{}}></Box>
			</Container>
		</ThemeProvider>
	);
}
