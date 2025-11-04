import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#ffffff17',
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'left', // aligned text to left for a clean footer look
  color: 'white',
  boxShadow: 'none', // remove paper shadow for footer
}));

export default function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 5,
        backgroundColor: '#6a62f8ff',
        py: 4,
        px: { xs: 2, sm: 5, md: 10 },
      }}
    >
      <Grid container spacing={4}>
        {/* Description Section */}
        <Grid item xs={12} md={4}>
          <Item>
            <Box
              id="category-a"
              sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: 1 }}
            >
              Description
            </Box>
            <Box
              component="ul"
              aria-labelledby="category-a"
              sx={{ listStyleType: 'none', m: 0, p: 0, fontSize: '13px', lineHeight: 1.6 }}
            >
              <li>
                A simple and professional resume builder to create your perfect CV in minutes.
              </li>
            </Box>
          </Item>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Item>
            <Box
              id="category-a"
              sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: 1 }}
            >
              Contact Information
            </Box>
            <Box
              component="ul"
              aria-labelledby="category-a"
              sx={{ listStyleType: 'none', m: 0, p: 0, fontSize: '13px', lineHeight: 1.6 }}
            >
              <li>Email: info@resumebuilder.com</li>
              <li>Phone: +91 000000000</li>
              <li>Address: Kochi, Kerala, India</li>
            </Box>
          </Item>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Item>
            <Box
              id="category-b"
              sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: 1 }}
            >
              Quick Links
            </Box>
            <Box
              component="ul"
              aria-labelledby="category-b"
              sx={{ listStyleType: 'none', m: 0, p: 0, fontSize: '13px', lineHeight: 1.6 }}
            >
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </Box>
          </Item>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Item>
            <Box
              id="category-c"
              sx={{ fontSize: '14px', textTransform: 'uppercase', fontWeight: 'bold', mb: 1 }}
            >
              Social Media Links
            </Box>
            <Box
              component="ul"
              aria-labelledby="category-c"
              sx={{ listStyleType: 'none', m: 0, p: 0, fontSize: '13px', lineHeight: 1.6 }}
            >
              <li><a href="" style={{color:'white'}}>Instagram</a></li>
              <li><a href="" style={{color:'white'}}>Facebook</a></li>
              <li><a href="" style={{color:'white'}}>Twitter</a></li>
            </Box>
          </Item>
        </Grid>
      </Grid>

      {/* Bottom Bar */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          borderTop: '1px solid #ccc',
          pt: 2,
          fontSize: '13px',
          color: '#810707ff',
        }}
      >
        <div>© 2025 Resume Builder. All rights reserved.</div>
        <div>Designed and developed by <strong>Anusree P</strong>.</div>
      </Box>
    </Box>
  );
}
