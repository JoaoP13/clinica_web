import React from "react";
import { TextField, Button, CircularProgress, Grid, Box } from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import login from "../../services/login";
import backgroundImage from "../../assets/img/meio-inferior.jpg";
import backgroundImageOverlap from "../../assets/img/meio-superior.jpg";
import { isMobile } from "react-device-detect";

function Login() {
  let [user, setUser] = React.useState({});
  let [loading, setLoading] = React.useState(false);
  let [wrongCredentials, setWrongCredentials] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleSubmit } = useForm();

  let navigate = useNavigate();

  async function onSubmit() {
    if (!email || !password) {
      return;
    }

    setLoading(true);
    setWrongCredentials(false);

    try {
    //   user = await login(email, password);

      navigate("/home");
    //   setUser(user);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      
      setLoading(false);
      setWrongCredentials(true);
    }
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100vh",
        }}
      ></Box>
      <Box
        width={isMobile ? "70%" : "35%"}
        height={"80%"}
        sx={{
          boxShadow: 20,
          borderRadius: "25px",
          position: "absolute",
          top: "10%",
          left: isMobile ? "17%" : "32%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            height: "50%",
          }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                position: "relative",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                height: "100%",
                background: `url(${backgroundImageOverlap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          sx={{
            height: "50%",
          }}
        >
          <Grid item xs={12}>
            <Box
              sx={{
                position: "relative",
                backgroundColor: "white",
                height: "112%",
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
              }}
            >
              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    sx={{
                      width: "80%",
                      height: "100%",
                    }}
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            className="input"
                            label="Email"
                            error={wrongCredentials}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="standard"
                            sx={{
                              width: "100%",
                              marginBottom: "3vh",
                              marginTop: "4vh",
                            }}
                            color="success"
                            helperText={
                              wrongCredentials
                                ? "Usuário ou senha incorretos!"
                                : ""
                            }
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            required
                            className="input"
                            label="Senha"
                            value={password}
                            error={wrongCredentials}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            variant="standard"
                            color="success"
                            sx={{
                              width: "100%",
                              marginBottom: "10vh",
                            }}
                            helperText={
                              wrongCredentials
                                ? "Usuário ou senha incorretos!"
                                : ""
                            }
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        {loading ? (
                          <CircularProgress
                            className="spinner"
                            color="inherit"
                            sx={{ position: "relative", left: "50%" }}
                          />
                        ) : (
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={onSubmit}
                            sx={{
                              width: "100%",
                              marginBottom: "40px",
                              borderRadius: 28,
                              marginLeft: "16px",
                              padding: "10px 26px",
                              fontSize: "14px",
                              backgroundColor: "#03C988",
                              ":hover": {
                                backgroundColor: "#03C988",
                              },
                            }}
                          >
                            Entrar
                          </Button>
                        )}
                      </Grid>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Login;
