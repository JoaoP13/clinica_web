import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import PreviewIcon from "@mui/icons-material/Preview";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";

/**
 * Descrição da interface ColumnPorps
 *
 * @interface ColumnProps
 * @member {number} width
 * @member {string} label
 * @member {string} dataKey
 */
interface ColumnProps {
  width: number;
  label: string;
  dataKey: string;
}

interface GenericTableProps {
  rows: any[];
  columns: ColumnProps[];
  canDelet: boolean;
  canViewData?: boolean;
  onClickViewData?: (element: any) => void;
}

const VirtuosoTableComponents: TableComponents<any> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props: any) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }: any) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#03C988",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function fixedHeaderContent(
  columns: any,
  canDelet: boolean,
  canViewData: boolean | undefined
) {
  return (
    <React.Fragment>
      <TableRow>
        {columns.map((column: any) => (
          <StyledTableCell
            key={column.dataKey}
            variant="head"
            align={"left"}
            style={{ width: column.width }}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {column.label}
          </StyledTableCell>
        ))}
        {canDelet && (
          <StyledTableCell
            variant="head"
            align={"left"}
            style={{ width: 1 }}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            Excluir
          </StyledTableCell>
        )}
        {canViewData && (
          <StyledTableCell
            variant="head"
            align={"left"}
            style={{ width: 1 }}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            Ver foto
          </StyledTableCell>
        )}
      </TableRow>
    </React.Fragment>
  );
}

function rowContent(
  _index: number,
  row: any,
  columns: ColumnProps[],
  canDelet: boolean,
  canViewData: boolean | undefined,
  onClickViewData: any
) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey} align={"left"}>
          {row[column.dataKey]}
        </TableCell>
      ))}
      {canDelet && (
        <TableCell align="left">
          <Button onClick={() => console.log("apagou")}>
            <DeleteIcon
              sx={{
                color: "#990000",
              }}
            />
          </Button>
        </TableCell>
      )}
      {canViewData && (
        <TableCell align="left" onClick={() => onClickViewData(row)}>
          <Button>
            <PreviewIcon style={{ color: "black" }}></PreviewIcon>
          </Button>
        </TableCell>
      )}
    </React.Fragment>
  );
}

export default function GenericTable(props: GenericTableProps) {
  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <TableVirtuoso
        data={props.rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={() =>
          fixedHeaderContent(props.columns, props.canDelet, props.canViewData)
        }
        itemContent={(index: any, item: any) =>
          rowContent(
            index,
            item,
            props.columns,
            props.canDelet,
            props.canViewData,
            props.onClickViewData
          )
        }
      />
    </Paper>
  );
}
