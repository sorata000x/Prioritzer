import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DragHandle } from "./DragHandle";
import './DraggableTableRow.css'

export const DraggableTableRow = ({ row }) => {
  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef,
    isDragging
  } = useSortable({
    id: row.original.id
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition
  };
  return (
    <tr ref={setNodeRef} style={style} {...row.getRowProps()}>
      {isDragging ? (
        <td className='dragging-row' colSpan={row.cells.length}>&nbsp;</td>
      ) : (
        row.cells.map((cell, i) => {
          if (i === 0) {
            return (
              <td className='table-data' {...cell.getCellProps()}>
                <DragHandle {...attributes} {...listeners} />
                <span>{cell.render("Cell")}</span>
              </td>
            );
          }
          return (
            <td className="table-data" {...cell.getCellProps()}>
              {cell.render("Cell")}
            </td>
          );
        })
      )}
    </tr>
  );
};
