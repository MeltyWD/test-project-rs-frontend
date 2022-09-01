import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
// import { leadsTableSetting } from "../../utils/constants";

function getCurrentPipeline(pipeline, targetId) {
  console.log(pipeline);
}

function getStatus(pipeline, pipelineId, statusId) {
  // const currentPipeline = getCurrentPipeline(pipelines, pipelineId);
  console.log(pipeline);
}

export default function TableSection({ leadsList, pipeline, usersList }) {
  const leadsTableSetting = [
    {
      field: "name",
      headerName: "Название",
      width: 150,
      editable: true,
    },
    {
      field: "status_id",
      headerName: "Статус сделки",
      width: 150,
      valueGetter: (params) => {
        console.log(params);
        getStatus(pipeline, params.row.pipeline_id, params.value);
        return params;
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: () => `${""} ${""}`,
    },
  ];

  return (
    <Box sx={{ mt: 4, flexGrow: 1, width: "100%" }}>
      <DataGrid
        autoHeight
        rows={leadsList}
        columns={leadsTableSetting}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
