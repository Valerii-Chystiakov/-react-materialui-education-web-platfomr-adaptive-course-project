import React, { } from 'react'
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import TeacherImg1 from './img/Teachers/Teacher1.jpg'
import TeacherImg2 from './img/Teachers/Teacher2.jpg'
import TeacherImg3 from './img/Teachers/Teacher3.jpg'
import TeacherImg4 from './img/Teachers/Teacher4.jpg'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




export default function Teachers() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  let cols = 2;

  if (isSmallScreen) {
    cols = 1;
  } else if (isMediumScreen) {
    cols = 2;
  } else if (isLargeScreen) {
    cols = 4;
  }
  return (
    <Container maxWidth="1046px" sx={{ mt: 15, backgroundColor: "#FAFAFA" }}>
      <Container>
        <Typography variant="h2" sx={{ textAlign: "center", color: "text_color.main" }}>Our Teachers</Typography>
        <Divider width="246px" sx={{ mt: 1, mx: "auto", height: "1px", backgroundColor: "primary.main" }} />
        <Stack direction={{ md: "row", sm: "column" }}>
          <Typography sx={{ my: { md: 12, xs: 4 } }} variant="h4" width={{ md: "50%", sm: "100%" }} mx="15px" color="text_color2.main">Our Teachers - a key component of success on our educational web platform for courses. We take pride in our team of dedicated and experienced teachers who have one common goal - to provide you with the highest quality of education and an unforgettable learning experience.</Typography>
          <Typography sx={{ my: { md: 12, xs: 4 } }} variant="h4" width={{ md: "50%", sm: "100%" }} mx="15px" color="text_color2.main">Each of our teachers is chosen based on their expertise, professionalism, and ability to engage students in learning. They not only possess high qualifications but also engage in continuous self-improvement to stay ahead in their field.</Typography>
        </Stack>
        <ImageList variant='masonry' cols={cols} gap={24} sx={{ width: "100%", height: "100%" }}>

          <ImageListItem>
            <img
              style={{ borderRadius: "25px" }}
              src={`${TeacherImg1}`}
              srcSet={`${TeacherImg1}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={'John Doe'}
              loading="lazy"
            />
            <Stack><Typography sx={{ margin: "auto", mt: "20px", mb: "5px" }} variant="h5" color="text_color.main">John Doe</Typography>
              <Typography sx={{ margin: "auto", textAlign: "center" }} variant="h6" color="text_color2.main">Harvard University graduate</Typography></Stack>
          </ImageListItem>
          <ImageListItem>
            <img
              style={{ borderRadius: "25px" }}
              src={`${TeacherImg2}`}
              srcSet={`${TeacherImg2}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={'Rubel Miah'}
              loading="lazy"
            />
            <Stack><Typography sx={{ margin: "auto", mt: "20px", mb: "5px" }} variant="h5" color="text_color.main">Rubel Miah</Typography>
              <Typography sx={{ margin: "auto", textAlign: "center" }} variant="h6" color="text_color2.main">Oxford University graduate</Typography></Stack>
          </ImageListItem>
          <ImageListItem>
            <img
              style={{ borderRadius: "25px" }}
              src={`${TeacherImg3}?w=248&fit=crop&auto=format`}
              srcSet={`${TeacherImg3}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={'Khalil Uddin'}
              loading="lazy"
            />
            <Stack> <Typography sx={{ margin: "auto", mt: "20px", mb: "5px" }} variant="h5" color="text_color.main">John Doe</Typography>
              <Typography sx={{ margin: "auto", textAlign: "center" }} variant="h6" color="text_color2.main">Cambridge University graduate</Typography></Stack>
          </ImageListItem>
          <ImageListItem >
            <img
              style={{ borderRadius: "25px" }}
              src={`${TeacherImg4}?w=248&fit=crop&auto=format`}
              srcSet={`${TeacherImg4}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={'John Doe'}
              loading="lazy"
            />
            <Stack><Typography sx={{ margin: "auto", mt: "20px", mb: "5px" }} variant="h5" color="text_color.main">Shamim Mia</Typography>
              <Typography sx={{ margin: "auto", textAlign: "center" }} variant="h6" color="text_color2.main">Stanford University graduate</Typography></Stack>
          </ImageListItem>
        </ImageList >
      </Container>
    </Container>
  )
}
