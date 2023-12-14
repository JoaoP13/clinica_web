import React, { useEffect } from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Backdrop,
  Typography
} from "@mui/material";
import { listarConsultas } from "../../services/consulta";
import ResponsiveAppBar from "../../components/appBar/appBar";
import Swal from "sweetalert2";
import GenericTable from "../../components/genericTable/genericTable";
import "dayjs/locale/pt-br";

import { isMobile } from "react-device-detect";

export default function ListarConsultas() {
  const [consultas, setconsultas] = React.useState<Array<Object>>([]);
  const [backDropOpen, setBackDropOpen] = React.useState<boolean>(false);

  useEffect(() => {
    async function listar() {
      setBackDropOpen(true);
  
      try {
        const result = await listarConsultas();
  
        setconsultas(result);
        setBackDropOpen(false);
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
  
        setBackDropOpen(false);
      }
    }
    listar();
  }, []);

  function getConsultasHeader() {
    return [
      {
        width: 20,
        label: "ID paciente",
        dataKey: "idPaciente",
      },
      {
        width: 20,
        label: "ID Médico",
        dataKey: "idMedico",
      },
      {
        width: 20,
        label: "ID Clinica",
        dataKey: "idClinica",
      },
      {
        width: 20,
        label: "ID Especialidade",
        dataKey: "idEspecialidade",
      },
      {
        width: 20,
        label: "Data / hora",
        dataKey: "dataConsulta",
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
          width={"98%"}
          sx={{
            marginLeft: "1vw",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12} sm={12}>
              <Box
                sx={{
                  marginTop: "3vh",
                  width: "95%",
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
                  Relatório de consultas
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sm={12}
              sx={{ height: isMobile ? "73vh" : "65vh" }}
            >
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
                  canViewData={false}
                  rows={consultas}
                  columns={getConsultasHeader()}
                ></GenericTable>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
