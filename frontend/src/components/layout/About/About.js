import React from 'react';
import './About.css';
import { Button, Typography, Avatar } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  const visitInstagram = () => {
    window.location = 'https://instagram.com/amit_patel_303/';
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: '10vmax', height: '10vmax', margin: '2vmax 0' }}
              src="https://res.cloudinary.com/amitinstagramclone/image/upload/v1670433355/avatars/IMG_20200223_132015_563_vakmun.jpg"
              alt="Founder"
            />
            <Typography>Amit Patel</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @AmitPatel. Only with the purpose
              to learn MERN Stack
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>

            <a href="https://instagram.com/amit_patel_303/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-patel-755a95178/"
              target="blank"
            >
              <LinkedInIcon className="LinkedInSvgIcon" />
            </a>
            <a href="https://github.com/apatel6152" target="blank">
              <GitHubIcon className="GitHubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
