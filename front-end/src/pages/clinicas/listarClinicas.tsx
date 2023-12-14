import React from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Backdrop,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import ResponsiveAppBar from "../../components/appBar/appBar";
import Swal from "sweetalert2";
import GenericTable from "../../components/genericTable/genericTable";
import CustomModal from "../../components/modal/modal";
import { Buffer } from "buffer";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { isMobile } from "react-device-detect";

export default function ListarClinicas() {
  const [checkIns, setCheckIns] = React.useState<Array<Object>>([]);
  const [filters, setFilters] = React.useState<any>({});
  const [base64, setBase64] = React.useState<string>("");
  const [backDropOpen, setBackDropOpen] = React.useState<boolean>(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const handleChangeSearchValue = (event: any) => {
    setFilters({
      ...filters,
      invoice: event.target.value,
    });
  };

  function handleOpenModal() {
    setModalOpen(!modalOpen);
  }

  function setPeriod(value: any) {
    setFilters({
      ...filters,
      initDate: value[0] ? value[0].$d : null,
      finalDate: value[1] ? value[1].$d : null,
    });
  }

  async function searchCheckIn() {
    setBackDropOpen(true);

    try {
    //   const result = await getCheckInByFilters({
    //     invoice: filters.invoice,
    //     initDate: filters.initDate,
    //     finalDate: filters.finalDate,
    //   });

      setCheckIns([]);
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

  function getCheckInsHeader() {
    return [
      {
        width: 25,
        label: "Nome",
        dataKey: "nomeClinica",
      },
      {
        width: 25,
        label: "Telefone",
        dataKey: "telefone",
      },
      {
        width: 25,
        label: "Endereço",
        dataKey: "endereco",
      },
      {
        width: 25,
        label: "Especialidade",
        dataKey: "especialidade",
      },
    ];
  }

  function Wrapper() {
    return (
      <Box>
        <Box display="flex" justifyContent="center">
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} sm={12}>
              <img
                src={`data:'image/jpeg';base64, ${base64.slice(20)}`}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{
                  borderRadius: "10px",
                  boxShadow: "10px 10px 5px #ccc",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
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
                  canViewData={true}
                  rows={checkIns}
                  columns={getCheckInsHeader()}
                ></GenericTable>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CustomModal
        open={modalOpen}
        children={Wrapper()}
        onClose={() => handleOpenModal()}
      ></CustomModal>
    </div>
  );
}
