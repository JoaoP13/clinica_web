import * as React from "react";
import { Dayjs } from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import {
  DateTimePickerTabs,
  DateTimePickerTabsProps,
} from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import "./dateTimePicker.css";

interface DatePickerProps {
  valueProp: Date | string | Dayjs;
  onChange: (date?: any) => void;
  disabled: boolean;
  label?: string;
  display?: string;
}

function CustomTabs(props: DateTimePickerTabsProps) {
  return (
    <React.Fragment>
      <DateTimePickerTabs {...props} />
      <Box sx={{ backgroundColor: "blueviolet", height: 5 }} />
    </React.Fragment>
  );
}

const datePickerTheme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "white",
          "&.Mui-selected": {
            backgroundColor: "white",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "white",
          color: "black",
          "&.Mui-selected": {
            backgroundColor: "white",
          },
        },
      },
    },
  },
});

export default function CustomDateTimePicker(props: DatePickerProps) {
  const { onChange, valueProp, disabled, label, display } = props;

  const [value, setValue] = React.useState<Dayjs | null>();

  return (
    <div
      style={{
        display,
      }}
    >
      <ThemeProvider theme={datePickerTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
          <DesktopDateTimePicker
            label={label ? label : "Data e hora"}
            minutesStep={1}
            ampm={false}
            value={valueProp}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            sx={{ width: '100%' }}
            onClose={() => onChange(value)}
            disabled={disabled}
            slotProps={{ textField: { color: "success" } }}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}
