import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { mdiSlack } from '@mdi/js';
import { mdiSkypeBusiness } from '@mdi/js';
import { mdiDiscord } from '@mdi/js';
import Icon from '@mdi/react';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  div: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  item: {
    marginTop: "1rem",
    color: "lightcoral",
    borderColor: "tan",
  }
}));

const contacts = [
  {
    icon: <EmailIcon/>,
    detail : "top.star0527@gmail.com",
  },
  {
    icon: <Icon path={mdiSkypeBusiness} size={1} title="Skype"/>,
    detail : "forpeacefulworld0527",
  },
  {
    icon: <Icon path={mdiSlack} size={1} title="Slack"/>,
    detail : "U020BGFMQLS (top.star0527@gmail.com)",
  },
  {
    icon: <Icon path={mdiDiscord} size={1} title="Discord"/>  ,
    detail : "topstar0527",
  },
  {
    icon: <LinkedInIcon/>,
    detail : "https://www.linkedin.com/in/kirill-jin-802584216/"
  },
  {
    icon: <WhatsAppIcon/>,
    detail : "+7 706 663 9926"
  },
  {
    icon: <GitHubIcon/>,
    detail : "https://github.com/topstar0527"
  },

]


const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="div" className={classes.div}>
          <Typography variant="h5" className={classes.heading}>
            You Can Find Me Online ...
          </Typography>
          {contacts.map((contact, i) =>{
            return(
              <Grid container justify="center" key={i} className={classes.item}>
                <Grid item sm={3} md={3} xs={3}>
                  {contact.icon}
                </Grid>
                <Grid item sm={9} md={9} xs={9}>
                  {contact.detail}
                </Grid>

              </Grid>
            );
          })}
          
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
