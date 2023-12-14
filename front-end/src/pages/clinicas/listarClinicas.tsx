import React, { useEffect } from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Backdrop,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../../components/appBar/appBar";
import Swal from "sweetalert2";
import { listarClinicas } from "../../services/clinica";
import GenericTable from "../../components/genericTable/genericTable";
import "dayjs/locale/pt-br";

import { isMobile } from "react-device-detect";

export default function ListarClinicas() {
  const [checkIns, setCheckIns] = React.useState<Array<Object>>([]);
  const [backDropOpen, setBackDropOpen] = React.useState<boolean>(false);

  useEffect(() => {
    async function searchCheckIn() {
      setBackDropOpen(true);
  
      try {
        const result = await listarClinicas();
  
        setCheckIns(result);
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

    searchCheckIn();
  }, []);

  function getCheckInsHeader() {
    return [
      {
        width: 25,
        label: "Nome",
        dataKey: "nome",
      },
      {
        width: 25,
        label: "Telefone",
        dataKey: "telefone",
      },
      {
        width: 25,
        label: "CNPJ",
        dataKey: "cnpj",
      }
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
                  Relatório de clinicas
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
                  rows={checkIns}
                  columns={getCheckInsHeader()}
                ></GenericTable>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
