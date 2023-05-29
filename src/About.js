import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import OfficeImg from './img/About/office.png'
import AboutImg1 from './img/About/AboutImg1.png'
import AboutImg2 from './img/About/AboutImg2.png';
import Divider from '@mui/material/Divider';





export default class About extends Component {
  render() {
    return (
        <Container maxWidth="1046px" sx={{mt: 15, backgroundColor: "#FAFAFA" }}>
        <Container>
        <Typography variant="h2" sx={{textAlign: "center",color: "text_color.main"}}>Who We Are</Typography>
        <Divider width="246px" sx={{mt:1,mx:"auto", height:"1px",backgroundColor:"primary.main"}} />
            <Stack sx={{my: {md:12, xs:4}}} direction={{md:"row", sm:"column"}}>
              <Stack px={"0px"} sx={{mx:"auto"}} width={{xs:"100%", sm:"500px", md:"600px"}}>
              <img
              width={"100%"}
                                          style={{margin: 'auto'}}
                                              src={`${OfficeImg}`}
                                              alt={"AboutImg1"}
                                              loading="lazy"
                                          />
              </Stack>
              <Stack width={{xs:"100%", md:"600px"}} sx={{ml: {sm: 0, md: "60px", lg: "120px"}}}> 
                <Typography variant="h2" sx={{color: "text_color.main", textAlign:{md:"left", xs:"center",lg:"left"}}}>Best <span style={{ color: '#929DC9' }}>education</span> WEB platform</Typography>
                <Typography variant="paragraph" sx={{mt:"10px",maxWidth:"500px", mx:"auto",textAlign:{md:"left", xs:"center",lg:"left"},color: "text_color2.main"}}>We provide best courses from our teachers that will improve your skills and easily increase your knowledge.</Typography>

                <Stack  alignItems="flex-start" justifyContent={{md:"flex-start",xs:"center"}} spacing={2.5} direction="row" mt={"50px"} >
                            <Stack>
                            <img width={"32px"}
                                    height={"32px"}
                                          style={{margin: 'auto'}}
                                              src={`${AboutImg1}`}
                                              alt={"AboutImg1"}
                                              loading="lazy"
                                          />
                            </Stack>
                            <Stack>
                              <Typography variant="h5" sx={{color: "text_color.main"}}>Smart teachers</Typography>
                                            <Typography variant="h6" sx={{color: "text_color2.main"}}>Our teachers have ended most popular universities</Typography>
                            </Stack>
                  </Stack>

                  <Stack  alignItems="flex-start" justifyContent={{md:"flex-start",xs:"center"}} spacing={2.5} direction="row" mt={"30px"} >
                            <Stack>
                            <img width={"32px"}
                                    height={"32px"}
                                          style={{margin: 'auto'}}
                                              src={`${AboutImg2}`}
                                              alt={"AboutImg1"}
                                              loading="lazy"
                                          />
                            </Stack>
                            <Stack>
                              <Typography variant="h5" sx={{color: "text_color.main"}}>Actual courses</Typography>
                                            <Typography variant="h6" sx={{color: "text_color2.main"}}>Only the courses that will improve needed skills</Typography>
                            </Stack>
                  </Stack>
              </Stack>
                
            </Stack>
        </Container>
        </Container>
        )
  }
}
