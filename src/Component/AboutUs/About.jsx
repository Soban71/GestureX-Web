import React from "react";
import { Container, Box, Typography, Button, Grid, Card, CardContent, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import HeaderNavbar from '../Navbar/HeaderNavbar';
import Footer from '../Footer/Footer'
const AboutUs = () => {
  return (
    <>
    <HeaderNavbar/>
    <Box>
  {/* Hero Section */}
  <Box
    sx={{
      position: "relative",
      height: "70vh", // Full screen height
      backgroundImage: `url('https://cdn.pixabay.com/photo/2024/05/22/10/56/ai-generated-8780351_1280.png')`,
      backgroundSize: "cover",
      backgroundRepeat: "no repeat", // Prevent image repetition
      color: "white", 
      width:"Auto",
  
    }}
  >
    {/* Overlay Effect */}
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0, 0, 0, 0.7)", // Semi-transparent overlay
      }}
    />

    {/* Text Content */}
    <Container
      maxWidth="md"
      sx={{
        position: "relative", // Ensure it sits above the overlay
        zIndex: 1, // Ensure it's above the overlay
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", // Center the content vertically

      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6">
          Revolutionizing the way we interact with technology through cutting-edge gesture recognition solutions, designed to make life easier and more accessible for everyone.
        </Typography>
      </motion.div>
    </Container>
  </Box>


      {/* About Section */}
      <Box py={8}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                  Our Mission
                </Typography>
                <Box>
  <Typography
    variant="h6" 
    fontWeight="500"
    gutterBottom
    sx={{
      textAlign: "left", 
      mb: 2, 
      lineHeight: 2.7,
    }}
  >
    At GestureX, our mission is to bridge the gap between humans and technology. Using intuitive gesture recognition, we strive to empower individuals to seamlessly interact with devices, making technology inclusive and accessible for everyone.
  </Typography>
  <Typography
    variant="h6" 
    sx={{
      textAlign: "left", 
      lineHeight: 2.7, 
      color: "gray.300",
      maxWidth: "800px", 
      mx: "auto", 
    }}
  >
    We believe in a future where accessibility is a right, not a luxury. Our innovations pave the way for a world where technology is truly universal.
  </Typography>
</Box>

              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://cdn-ca.faceplusplus.com/mc-official/v2.1/images/banner.ccd698a.png"
                  alt="Our Mission"
                  style={{ marginTop: "90px",width: "100%", borderRadius: "8px" ,height:"40vh"}}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box py={10} bgcolor="#f3f4f6">
  <Container>
    <Typography
      variant="h2"
      fontWeight="bold"
      align="center"
      gutterBottom
      sx={{
        color: "#1f2937", // Darker gray for the heading
        mb: 4,
      }}
    >
      🌟 Our Core Values 🌟
    </Typography>
    <Grid container spacing={6} mt={4}>
      {[
        {
          title: "🚀 Innovation",
          desc: "We push the boundaries of technology to create revolutionary solutions that improve lives.",
        },
        {
          title: "🌍 Inclusivity",
          desc: "Our technology is designed to serve everyone, regardless of their abilities.",
        },
        {
          title: "💡 Empowerment",
          desc: "We empower individuals by making technology accessible and intuitive.",
        },
      ].map((value, index) => (
        <Grid item xs={12} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card
              elevation={6}
              sx={{
                borderRadius: "16px", // Rounded corners for a modern look
                bgcolor: "#ffffff", // White background for clean design
                textAlign: "center",
                p: 3, // Padding inside the card
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for a polished look
                ":hover": {
                  transform: "translateY(-10px)", // Slight lift effect on hover
                  transition: "0.3s ease-in-out",
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)", // Stronger shadow on hover
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  gutterBottom
                  sx={{
                    color: "#4f46e5", // Primary color for titles
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6b7280", // Neutral gray for descriptions
                    lineHeight: 1.8, // Increase line spacing for better readability
                  }}
                >
                  {value.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

{/* Team Section */}
<Box py={10} bgcolor="#f9fafb">
  <Container>
    <Typography
      variant="h3"
      fontWeight="bold"
      align="center"
      gutterBottom
      sx={{ color: "#1f2937", mb: 6 }}
    >
      👩‍💼 Meet Our Team 👨‍💻
    </Typography>
    <Grid container spacing={6} justifyContent="center">
      {[
        {
          name: "John Doe",
          role: "🚀 CEO",
          desc: "Leading the vision and strategy to shape the future of GestureX.",
          image: "/assets/images/team-1.jpg",
        },
        {
          name: "Jane Smith",
          role: "💻 CTO",
          desc: "Driving innovation with cutting-edge technology solutions.",
          image: "/assets/images/team-2.jpg",
        },
        {
          name: "Michael Lee",
          role: "🎨 Lead Designer",
          desc: "Crafting user-friendly and visually stunning experiences.",
          image: "/assets/images/team-3.jpg",
        },
      ].map((member, index) => (
        <Grid item xs={12} md={4} key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card
              elevation={6}
              sx={{
                textAlign: "center",
                p: 4,
                borderRadius: "16px",
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                ":hover": {
                  transform: "translateY(-10px)",
                  transition: "0.3s ease-in-out",
                  boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {/* Avatar */}
              <Avatar
                src={member.image}
                alt={member.name}
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  mb: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                }}
              />
              {/* Card Content */}
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#4f46e5" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight="500"
                  gutterBottom
                  sx={{ color: "#1f2937" }}
                >
                  {member.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6b7280",
                    mt: 1,
                    lineHeight: 1.6,
                  }}
                >
                  {member.desc}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: "linear-gradient(to right, #3b82f6, #14b8a6)",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Ready to Shape the Future with GestureX?
            </Typography>
            <Typography variant="h6" paragraph>
              Join us in making technology accessible, intuitive, and impactful. Together, we can transform the way the world interacts with technology.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2, px: 5, fontWeight: "bold" }}
            >
              Contact Us
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
<Footer/>
    </>
  );
};

export default AboutUs;
