import React from 'react';
import { Box, Dialog, ThemeProvider, Divider, Typography, Button, DialogContent, DialogActions } from '@mui/material';
import { theme } from '../../App';
import { ReactSVG } from 'react-svg';
import './popup.css';

export function Popup({ open, handleClose, project }) {
	return (
		<ThemeProvider theme={theme}>
			<Dialog maxWidth="sm" fullWidth open={open} keepMounted onClose={handleClose} aria-describedby="project popup description">
				<DialogContent>
					<Typography variant="h4" sx={{ fontSize: { xs: '12vw', sm: '9vw', md: '6vw', lg: '4vw', xl: '3vw' } }}>
						{project.name}
					</Typography>
					<Typography variant="h6">Tech Used:</Typography>
					<Box className="skills-box" sx={{ display: 'flex', justifyContent: 'space-around' }}>
						{project.skillsUsed.map((link, i) => (
							<Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
								<ReactSVG className="small-logo" src={link} />
							</Box>
						))}
					</Box>
					<Divider orientation="horizontal" />
					<Typography variant="h6">Building Process:</Typography>
					<Typography variant="body2" sx={{ fontFamily: 'Sharetech' }}>
						{project.builtDesc.map((paragraph, i) => (
							<p key={i}>&emsp;{paragraph}</p>
						))}
					</Typography>
					<Divider orientation="horizontal" />
					<DialogActions sx={{ mt: 2 }}>
						<Button color="secondary" variant="contained" href={project.github} target="_blank">
							Github
						</Button>
						<Button color="secondary" variant="contained" href={project.live} target="_blank">
							Live Link
						</Button>
					</DialogActions>
				</DialogContent>
			</Dialog>
		</ThemeProvider>
	);
}
