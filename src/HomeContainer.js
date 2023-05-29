import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HeadIcon1 from "./img/Head/HeadIcon1.svg"
import HeadIcon2 from "./img/Head/HeadIcon2.svg"
import HeadIcon3 from "./img/Head/HeadIcon3.svg"



export default class HomeContainer extends Component {
  render() {
    return (
        <Container sx={{px: "0px", py: {xs:10,sm:20},  maxWidth:"1046px"}} >
            <Typography maxWidth="509px" variant="h1" sx={{fontSize: {xs:"44px",sm:"58px"},color:"text_color.main"}}>Increase <Typography variant="span"
       sx={{fontFamily: "Montserrat",
       fontWeight: "800",
       lineHeight: "80px",
       letterSpacing: "0.2px",
       fontStyle: "normal",
       textTransform: "none",
       fontSize: {xs:"44px",sm:"58px"},
       color:"secondary.main"}}>
         your knowledge</Typography> with <Typography variant="span"
       sx={{fontFamily: "Montserrat",
       fontWeight: "800",
       lineHeight: "80px",
       letterSpacing: "0.2px",
       fontStyle: "normal",
       textTransform: "none",
       fontSize: {xs:"44px",sm:"58px"},color:"primary.main"}}>our education</Typography> platform</Typography>
            <Typography maxWidth="380px" variant="h4" sx={{pt: 4,color:"text_color2.main"}}>Improve your skills with a list of the best courses on our site.</Typography>
      <Stack direction={{xs:"column",sm:"row"}} spacing={2} sx={{mt: 4}}>
          <Button variant="contained" color="primary" sx={{borderRadius: "37px", py:1, px:4}}>
            <Typography variant="btn_text" sx={{color:"text_color_light.main"}}>Get Started Now</Typography>
          </Button>
          <Button variant="outlined" color="secondary" sx={{borderRadius: "37px", py:1, px:4}}>
            <Typography variant="btn_text" color="secondary">Learn More</Typography>
          </Button>
      </Stack>
        </Container>
    )
  }
}
