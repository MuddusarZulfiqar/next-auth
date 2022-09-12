import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React,{useContext} from "react";
import { AuthContext } from "@/context/AuthContext";
export default function UserProfile() {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" component={"th"}>
                First Name
              </TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">User Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{user?.first_name}</TableCell>
              <TableCell align="center">{user?.last_name}</TableCell>
              <TableCell align="center">{user?.username}</TableCell>
              <TableCell align="center">{user?.email}</TableCell>
              <TableCell align="center">{user?.role}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
