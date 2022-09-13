import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const PaginationComponent = styled("div")({
  justifyContent: "center",
  margin: "2% 20% 20% 35%",
});
function Practice() {
  
  return (
    <div>
        <div>
        <Typography variant="h4" gutterBottom component="div">
          Pagination
        </Typography>
        </div>
      <PaginationComponent>
        <Stack spacing={3}>
          <Pagination count={10} />
          <Pagination count={10} color="primary" />
          <Pagination count={20} color="secondary" />
        </Stack>
      </PaginationComponent>
    </div>
  );
}
export default Practice;
