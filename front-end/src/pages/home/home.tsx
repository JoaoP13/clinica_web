import React, { useEffect } from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Typography,
  Backdrop,
} from "@mui/material";
import CountUp from "react-countup";
import ResponsiveAppBar from "../../components/appBar/appBar";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { isMobile } from "react-device-detect";
import {
  getOrdersState,
  getVolumesCollected,
  getAverageCollectTimeDifference,
  getNumberOfCheckins,
} from "../../services/dashboard";
import GenericTable from "../../components/genericTable/genericTable";
import Swal from "sweetalert2";

function PreCollect() {
  const [backDropOpen, setBackDropOpen] = React.useState<boolean>(false);
  const [ordersStateToPopulateTable, setOrdersStateToPopulateTable] =
    React.useState<Array<Record<string, string>>>([]);
  const [volumesCollected, setVolumesCollected] = React.useState<number>(0);
  const [averageTimeComparsion, setAverageTimeComparsion] =
    React.useState<number>(0);
  const [numberOfCheckins, setNumberOfCheckins] = React.useState<number>(0);

  useEffect(() => {
    async function getOrdersStateForDashboard() {
      let result = [];

      try {
        setBackDropOpen(true);

        result = await getOrdersState();
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        setBackDropOpen(false);
      }

      setOrdersStateToPopulateTable(result);
      setBackDropOpen(false);
    }

    async function getVolumesCollectedForDashboard() {
      let result = [];

      try {
        setBackDropOpen(true);

        result = await getVolumesCollected();
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        setBackDropOpen(false);
      }

      setVolumesCollected(25);
      setBackDropOpen(false);
    }

    async function getAverageCollectTimeDifferenceForDashboard() {
      let result = [];

      try {
        setBackDropOpen(true);

        result = await getAverageCollectTimeDifference();
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        setBackDropOpen(false);
      }

      setAverageTimeComparsion(6);
      setBackDropOpen(false);
    }

    async function getNumberOfCheckinsForDashboard() {
      let result = [];

      try {
        setBackDropOpen(true);

        result = await getNumberOfCheckins();
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        setBackDropOpen(false);
      }

      setNumberOfCheckins(10);
      setBackDropOpen(false);
    }

    getOrdersStateForDashboard();
    getVolumesCollectedForDashboard();
    getAverageCollectTimeDifferenceForDashboard();
    getNumberOfCheckinsForDashboard();
  }, []);

  function getOrdersReleasedHeader() {
    return [
      {
        width: 5,
        label: "N° pedido",
        dataKey: "numero_pedido",
      },
      {
        width: 5,
        label: "Código cliente",
        dataKey: "cod_cliente",
      },
      {
        width: 80,
        label: "Cliente",
        dataKey: "cliente",
      },
      {
        width: 45,
        label: "Status",
        dataKey: "status",
      },
    ];
  }

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
        open={backDropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ height: "100vh" }}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box
          height={isMobile ? "85%" : "90%"}
          width={"98%"}
          sx={{
            marginLeft: "1%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4} md={4} sm={12} marginTop={isMobile ? 2 : 7}>
              <Box
                sx={{
                  background: "#03C988",
                  height: isMobile ? "14vh" : "24vh",
                  borderRadius: "15px",
                }}
              >
                <Grid
                  container
                  sx={{
                    height: "100%",
                  }}
                  spacing={0}
                >
                  <Grid item xs={4.2} md={4.2} sm={4.2}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: "100%" }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? "8vw" : "4.5vw",
                          letterSpacing: ".1rem",
                          color: "#F9F9E0",
                          textDecoration: "none",
                          transform: isMobile ? "scale(1)" : "scale(.55, 1.4)",
                        }}
                      >
                        <CountUp start={0} end={50} delay={0}>
                          {({ countUpRef }) => (
                            <div>
                              <span ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4.5} md={4.5} sm={4.5}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: "100%" }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? "4vw" : "2vw",
                          marginLeft: isMobile ? "0" : "1vw",
                          letterSpacing: ".1rem",
                          color: "#F9F9E0",
                          textDecoration: "none",
                        }}
                      >
                        Consultas realizadas no mês
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3} md={3} sm={3}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{ height: "100%" }}
                    >
                      <LocalHospitalIcon
                        sx={{
                            fontSize: '5em'
                        }}
                        ></LocalHospitalIcon>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4} md={4} sm={12} marginTop={isMobile ? 0 : 7}>
              <Box
                sx={{
                  background: "#C4DFAA",
                  height: isMobile ? "14vh" : "24vh",
                  borderRadius: "15px",
                }}
              >
                <Grid
                  container
                  sx={{
                    height: "100%",
                  }}
                  spacing={0}
                >
                  <Grid item xs={4.2} md={4.2} sm={4.2}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: "100%" }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? "8vw" : "4.5vw",
                          letterSpacing: ".1rem",
                          color: "#F9F9E0",
                          textDecoration: "none",
                          transform: isMobile ? "scale(1)" : "scale(.55, 1.4)",
                        }}
                      >
                        <CountUp
                          start={0}
                          end={6}
                          delay={0}
                        >
                          {({ countUpRef }) => (
                            <div>
                              {averageTimeComparsion > 0 ? "+" : ""}
                              <span ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4.5} md={4.5} sm={4.5}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: "100%" }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? "4vw" : "2vw",
                          letterSpacing: ".1rem",
                          color: "#F9F9E0",
                          textDecoration: "none",
                        }}
                      >
                        Consultas canceladas no mês
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3} md={3} sm={3}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{ height: "100%" }}
                    >
                      <MedicalInformationIcon
                        sx={{
                            fontSize: '5em'
                        }}
                      ></MedicalInformationIcon>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={4} md={4} sm={12} marginTop={isMobile ? 0 : 7}>
              <Box
                sx={{
                  background: "#FF6969",
                  height: isMobile ? "14vh" : "24vh",
                  borderRadius: "15px",
                }}
              >
                <Grid
                  container
                  sx={{
                    height: "100%",
                  }}
                  spacing={0}
                >
                  <Grid item xs={4.2} md={4.2} sm={4.2}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: "100%" }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? "8vw" : "4.5vw",
                          letterSpacing: ".1rem",
                          color: "#F9F9E0",
                          textDecoration: "none",
                          transform: isMobile ? "scale(1)" : "scale(.55, 1.4)",
                        }}
                      >
                        <CountUp start={0} end={20} delay={0}>
                          {({ countUpRef }) => (
                            <div>
                              <span ref={countUpRef} />
                            </div>
                          )}
                        </CountUp>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4.5} md={4.5} sm={4.5}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{ height: "100%" }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? "4vw" : "2vw",
                          letterSpacing: ".1rem",
                          color: "#F9F9E0",
                          textDecoration: "none",
                        }}
                      >
                        Pacientes em atendimento
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3} md={3} sm={3}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      sx={{ height: "100%" }}
                    >
                      <MonitorHeartIcon
                        sx={{
                            fontSize: '5em'
                        }}
                      ></MonitorHeartIcon>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              height: isMobile ? "50%" : "60%",
            }}
          >
            <Grid item xs={12} md={12} sm={12} marginTop={isMobile ? 2 : 7}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  borderRadius: "15px",
                }}
                display="flex"
                justifyContent="center"
              >
                <Grid container>
                  <Grid item xs={12} md={12} sm={12} sx={{ height: "10%" }}>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                      display="flex"
                      justifyContent="center"
                    >
                      <Typography
                        sx={{
                          fontWeight: "10vw",
                          letterSpacing: ".3rem",
                          color: "inherit",
                          fontSize: "2rem",
                          textDecoration: "none",
                        }}
                      >
                        Status das consultas
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} sm={12} sx={{ height: "80%" }}>
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                      }}
                      display="flex"
                      justifyContent="center"
                    >
                      <GenericTable
                        canDelet={false}
                        rows={ordersStateToPopulateTable}
                        columns={getOrdersReleasedHeader()}
                      ></GenericTable>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default PreCollect;
