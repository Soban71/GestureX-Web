import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";
import HeaderNavbar from "../Navbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const ContactUs = () => {
  return (
    <>
    <HeaderNavbar />
    <Box>
      {/* Hero Section */}
      <Box
    sx={{
      position: "relative",
      height: "70vh", // Full screen height
      backgroundImage: `url('https://cdn.pixabay.com/photo/2022/01/12/18/51/contact-us-6933645_1280.jpg')`,
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
        bgcolor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
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
        <Typography variant="h1" fontWeight="bold" gutterBottom>
        Contact Us
        </Typography>
        <Typography variant="h6">
        We're here to help! Reach out to us with any questions or feedback.
        </Typography>
      </motion.div>
    </Container>
  </Box>

      {/* Contact Information Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Feel free to contact us through any of the following channels. We're
              always happy to assist!
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Phone sx={{ color: "#4f46e5" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary="+1 123-456-7890"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email sx={{ color: "#9333ea" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Email"
                  secondary="support@gesturex.com"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn sx={{ color: "#ec4899" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary="Rawalpindi Pakistan"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccessTime sx={{ color: "#4f46e5" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Working Hours"
                  secondary="Mon-Fri: 9 AM - 6 PM"
                />
              </ListItem>
            </List>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Send Us a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Have questions? Fill out the form below, and we'll get back to
                  you as soon as possible.
                </Typography>
                <Box
                  component="form"
                  sx={{ mt: 2 }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          bgcolor: "#4f46e5",
                          ":hover": { bgcolor: "#9333ea" },
                        }}
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box
        sx={{
          mt: 6,
          height: 400,
          bgcolor: "#e5e7eb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
         <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.569373490154!2d73.0479!3d33.6261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95036115f8c3%3A0x7b7c578a3c21e89c!2sRawalpindi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691697961903!5m2!1sen!2s"
          width="100%"
          height="380"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>

    <Footer />
    </>
  );
};

export default ContactUs;
