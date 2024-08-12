import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 20,
  },
  '&.MuiTableCell-body': {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, Age, Relation, Phoneno) {
  return { name, Age, Relation, Phoneno };
}

const rows = [
  createData('A.Siva Sankar', 59, 'Father', 1223456789),
  createData('A.Swarupa', 47, 'Mother', 123456789),
];

export default function Parent() {
  return (
 
    <TableContainer component={Paper} sx={{ maxWidth: '50%', margin: 'auto', marginTop: '20px' }}>
      <Table sx={{ minWidth: 700, border: '3px solid black',marginTop: '170px'  }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Relation&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Phoneno&nbsp;</StyledTableCell>
            {/* Protein column removed */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Age}</StyledTableCell>
              <StyledTableCell align="right">{row.Relation}</StyledTableCell>
              <StyledTableCell align="right">{row.Phoneno}</StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  
  );
}