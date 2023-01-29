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
					<Typography variant="h4">{project.name}</Typography>
					<Typography variant="h5">Tech Used:</Typography>
					<Box className="skills-box" sx={{ display: 'flex', justifyContent: 'space-around' }}>
						{project.skillsUsed.map((link, i) => (
							<Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
								<ReactSVG className="small-logo" src={link} />
							</Box>
						))}
					</Box>
					<Divider orientation="horizontal" />
					<Typography variant="h5">Building Process:</Typography>
					<Typography variant="p" sx={{ fontFamily: 'Sharetech' }}>
						{project.builtDesc}
					</Typography>
					<DialogActions>
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
