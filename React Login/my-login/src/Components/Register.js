import React from "react";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card } from "@mui/material";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

const MyComponent = styled('div')({
    minWidth: '100%',
    minHeight: '100vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
});
const MyButton = styled('div')({
    paddingLeft:'90px',
    paddingRight:'90px',
})
class Register extends React.Component {
  constructor(props){
    super(props);
    this.state={
    
    }
  }


  render() {
    return (
      <MyComponent>
        <Container>
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid lg={3} md={3} sm={1} xs={1}></Grid>
        <Grid lg={6} md={6} sm={11} xs={11} align="center" justify="center">
        <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <Card>
        <div>
            <h1>Register</h1>
        </div>
        <div>
      </div>
      <form>
      <div>
        <TextField
          id="Name"
          label="Enter Name"
          type="text"
          variant="standard"
          required
        />
      </div>
      <div>
        <TextField
          id="Email"
          label="Enter Email"
          type="email"
          variant="standard"
          required
        />
      </div>
      <div>
        <TextField
          id="Password"
          label="Enter Password"
          type="password"
          variant="standard"
          required
        />
      </div>
      <MyButton>
         <br/>
      <Button type="submit" variant={"contained"} color={"secondary"} fullWidth onClick={this.handleSubmit}>SignUp</Button>
      </MyButton><br/>
      <div>
     <span>If user already exiting ? &nbsp;&nbsp;</span>
     {''}
      <span><a href="/">
       Login
      </a></span>
      </div>
      <br/>
      </form>
        </Card>
    </Box>
        </Grid>
        <Grid lg={3} md={3} sm={1} xs={1}></Grid>
      </Grid>
    </Box>
    </Container>
      </MyComponent>
    );
  }
}
export default Register;
