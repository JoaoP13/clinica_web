import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Grid,
  Box,
  Backdrop,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import CustomDateTimePicker from "../../components/dateTimePicker/dateTimePicker";
import ResponsiveAppBar from "../../components/appBar/appBar";
import { criarConsulta } from "../../services/consulta";
import { useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Swal from "sweetalert2";

export default function AddConsulta() {
  const [backDropOpen, setBackDropOpen] = React.useState<boolean>(false);
  const [cpf_paciente, setName] = React.useState<string | null>(null);
  const [cpf_medico, setEmail] = React.useState<string | null>(null);
  const [data, setData] = useState("");
  const [idClinica, setIdClinica] = useState("");
  const [idEspecialidade, setIdEspecialidade] = useState("");

  let navigate = useNavigate();

  function handleChangeCPFPaciente(event: any) {
    setName(event.target.value);
  }

  function handleChangeCPFMedico(event: any) {
    setEmail(event.target.value);
  }

  function handleChangeIdEspecialidade(event: any) {
    setIdEspecialidade(event.target.value);
  }

  const handleChangeIdClinica = (event: any) => {
    setIdClinica(event.target.value);
  };

  const handleChangeDate = (event: any) => {
    setData(event);
  };

  async function saveUser() {
    setBackDropOpen(true);

    try {
      await criarConsulta({
        idPaciente: cpf_paciente,
        idMedico: cpf_medico,
        idClinica: cpf_medico,
        idEspecialidade: cpf_medico,
        dataConsulta: data
      });

      setBackDropOpen(false);

      Swal.fire({
        title: "Sucesso!",
        text: "Consulta criada com sucesso!",
        icon: "success",
        showConfirmButton: false,
        position: "center",
        timer: 3000,
        width: 400,
      });

      navigate("/home");
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });

      setBackDropOpen(false);
    }
  }

  function cancel() {
    Swal.fire({
      title: "Tem certeza que deseja cancelar?",
      confirmButtonText: "Sim",
      cancelButtonText: "Não",
      confirmButtonColor: "#990000",
      showCancelButton: true,
    }).then(async (result) => {
      if (result.value) {
        navigate("/home");
      } else if (result.dismiss) {
        return;
      }
    });
  }

  useEffect(() => {}, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
        open={backDropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ height: "98vh" }}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Box
          height={isMobile ? "10vh" : "5vh"}
          width={"98%"}
          sx={{
            marginLeft: "1%",
          }}
        >
          <Grid
            container
            sx={{
              height: "100%",
              marginTop: "3vh",
            }}
          >
            <Grid item xs={12} md={12} sm={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography sx={{ marginBottom: 2, fontSize: 40 }}>
                  Agendar consulta
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="ID Paciente"
                    type="number"
                    variant="outlined"
                    color="success"
                    value={cpf_paciente}
                    onChange={handleChangeCPFPaciente}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6} md={6} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="ID Médico"
                    type="number"
                    variant="outlined"
                    color="success"
                    value={cpf_medico}
                    onChange={handleChangeCPFMedico}
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "1vh" }}>
                <Grid item xs={6} md={6} sm={6}>
                  <CustomDateTimePicker valueProp={data} disabled={false} onChange={(el: any) => handleChangeDate(el)
                  }></CustomDateTimePicker>
                </Grid>
                <Grid item xs={6} md={6} sm={6}>
                  <TextField
                    id="idClinica"
                    label="ID Clínica"
                    type={"number"}
                    color="success"
                    required
                    value={idClinica}
                    onChange={handleChangeIdClinica}
                    sx={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sm={12} sx={{ marginTop: '3vh' }}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6} sm={6}>
                  <TextField
                    id="standard-basic"
                    label="ID Especialidade"
                    variant="outlined"
                    color="success"
                    value={idEspecialidade}
                    onChange={handleChangeIdEspecialidade}
                    sx={{
                      width: "100%"
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ marginTop: "1vh" }}>
                <Grid
                  item
                  xs={6}
                  md={6}
                  sm={6}
                  display="flex"
                  justifyContent="end"
                >
                  <Button
                    // disabled={elements.length === 0}
                    variant="contained"
                    color="primary"
                    sx={{
                      background: "#990000",
                      ":hover": {
                        background: "#990000",
                      },
                      width: isMobile ? "15vw" : "9vw",
                    }}
                    onClick={() => cancel()}
                  >
                    Cancelar
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  sm={6}
                  display="flex"
                  justifyContent="flex-start"
                >
                  <Button
                    disabled={!cpf_paciente || !cpf_medico || !data || !idClinica}
                    variant="contained"
                    color="primary"
                    sx={{
                      backgroundColor: "#146356",
                      ":hover": {
                        backgroundColor: "#146356",
                      },
                      width: isMobile ? "13.5vw" : "9vw",
                    }}
                    onClick={() => saveUser()}
                  >
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
