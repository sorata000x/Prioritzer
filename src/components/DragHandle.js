import React from "react";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import './DragHandle.css'

export const DragHandle = (props) => {
  return (
    <div className="handle-wrapper" {...props}>
      <DragIndicatorIcon />
    </div>
  );
};
