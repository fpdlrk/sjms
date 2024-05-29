import { styled } from "styled-components";
import { theme } from "../../styled/theme";
import { AccessorKeyColumnDef, ColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

type TableIprops = {
  columns: ColumnDef<any, any>[];
  data: any;
};

type TablecolumnType = {
  accessor: string;
  Header: string;
};

type dataType = {
  name: string;
  phone: string;
  birth: string;
  register_date: string;
  last_edit_date: string;
};

const Table = ({ columns, data }: TableIprops) => {
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log("ssss", table, Object.keys(rowSelection));

  const toggleAllPageRowsSelectedHandler = (t: any, e: any) => {
    console.log("#########", t.getToggleAllPageRowsSelectedHandler(e));
    // return t.getToggleAllPageRowsSelectedHandler();
  };
  const isSelected = () => {};
  const toggleSelectedHandler = () => {};

  return (
    <TableContainer>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} style={{ width: header.getSize() }}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  );
};

const TableContainer = styled.table`
  width: 100%;
  thead {
    th {
      height: 50px;
      vertical-align: middle;
      border-bottom: 1px solid ${theme.color.superLightGray};
      font-weight: 700;
      font-size: 12px;
      color: ${theme.color.primary};
      + th {
        border-left: 1px solid ${theme.color.superLightGray};
      }
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: ${theme.color.superLightGray};
      }
    }
    td {
      height: 42px;
      padding: 0 10px;
      vertical-align: middle;
      font-size: 12px;
      color: ${theme.color.fcSecond};
      border-bottom: 1px solid ${theme.color.superLightGray};
      + td {
        border-left: 1px solid ${theme.color.superLightGray};
      }
    }
  }
  select {
    width: 100%;
    padding: 5px 10px;
    border: 1px solid ${theme.color.midLightGray};
    font-size: 12px;
    border-radius: 4px;
    appearance: auto;
  }
`;

export default Table;
