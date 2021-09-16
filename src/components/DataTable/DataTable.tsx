import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'model',
      headerName: 'Model',
      width: 150,
      editable: true,
    },
    {
      field: 'make',
      headerName: 'Make',
      width: 150,
      editable: true,
    },
    {
      field: 'year',
      headerName: 'Year',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'color',
      headerName: 'Color',
      width: 160,
      editable: true,
    },
  ];
  const rows = [
    { id: 1, model: 'civic', make: 'honda', year: 2035, color: 'yellow' },
    { id: 2, model: 'wrangler', make: 'jeep', year: 2030, color: 'black'},
    { id: 3, model: 'camry', make: 'toyota', year: 2025, color: 'red' },
    { id: 4, model: 'corolla', make: 'toyota', year: 2020, color: 'silver'},
    { id: 5, model: 'mustang', make: 'ford', year: 2015, color: 'green'},
    { id: 6, model: 'enclave', make: 'buick', year: 2010, color: 'white'},
  ];
export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Car Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}