import React from 'react';
import './legend-text.css';

export interface ILegendProps {
  value: string;
  size?: number;
  color?: string;
}

const LegendText = (props: ILegendProps) => {
  return (
    <div className="legend-text">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'start',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <div
          className="legend-box"
          style={{
            backgroundColor: props.color,
            height: props.size + 'px',
            width: props.size + 'px',
            minWidth: props.size + 'px',
            minHeight: props.size + 'px',
          }}
        ></div>
        <div className="legend-wrapper">
          <p className="legend-data">{props.value}</p>
        </div>
      </div>
    </div>
  );
};

export default LegendText;
