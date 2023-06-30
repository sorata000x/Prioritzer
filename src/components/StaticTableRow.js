import React from "react";
import { DragHandle } from "./DragHandle";
import './StaticTableRow.css';

export const StaticTableRow = ({ row }) => {
  return (
    <tr className="static-table-row" {...row.getRowProps()}>
      {row.cells.map((cell, i) => {
        if (i === 0) {
          return (
            <td className="static-data" {...cell.getCellProps()}>
              <DragHandle isDragging />
              <span>{cell.render("Cell")}</span>
            </td>
          );
        }
        return (
          <td className="static-data" {...cell.getCellProps()}>
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
};
