import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Footer.css'

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != '') {
    footerComponent = <Grid className='container-footer' container direction="row" justifyContent="center" alignItems="center">
      <Grid className='container-footer' alignItems="center">
        <Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography >Me siga nas redes sociais </Typography>
          </Box>
          <Box className='icons-footer' display="flex" alignItems="center" justifyContent="center">
            <a href="https://www.instagram.com/lucaszri/" target="_blank">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/lucas-de-souza-benedito-343b85b6/" target="_blank">
              <LinkedInIcon  />
              <a target="_blank" href="https://github.com/lucaszri">
              <GitHubIcon  />
            </a>
            </a>
          </Box>
        </Box>
        <Box className='text-decoration' display="flex" alignItems="center" justifyContent="center">
          <Box>
            <Typography align="center" className='footer-copy'>Copyright © 2022 Lucaszri</Typography>
          </Box>
          <Box>
           
          </Box>
        </Box>
      </Grid>
    </Grid>
  }

  return (
    <>
    {footerComponent}
    </>
  )
}

export default Footer;