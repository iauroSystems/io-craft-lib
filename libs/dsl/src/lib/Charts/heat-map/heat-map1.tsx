import { Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import React, { useEffect, useRef } from 'react';
import LegendText from '../../Atoms/legend-text/legend-text';

export interface IHeatMapProps {
  colLabel?: string;
  rowLabel?: string;
  rowAxisLabel: Array<Array<string>>;
  columnAxisLabel: Array<string>;
  data: Array<Array<number>>;
  threshold: Array<{
    name: string;
    value_min: number;
    value_max: number;
    color: string;
  }>;
}

export const HeatMap = (props: IHeatMapProps) => {
  const theme = useTheme();

  let rows = 0;
  let columns = 0;
  let padding = 48;
  let cellSize = 0;
  let fontSize = 14;
  let baseFontSize = 14;
  let spacing = 3;
  let colorLabel = '#969696';
  let foregroundcolor = theme.palette?.background?.default;
  let backgroundcolor = theme.palette?.light?.c50;
  let colorLine = theme.palette?.light?.c50;
  let label = true;
  let instanceId;
  let wrapper: any = null;
  let canvas: any = {};
  let c: any = useRef(null);
  let canvasRef = useRef(null);

  const getIntermediateColor = (percent: any) => {
    const requiredThreshold: any = [];
    if (props && props.threshold) {
      props.threshold.forEach((thres) => {
        if (thres.value_min <= percent && thres.value_max >= percent) {
          requiredThreshold.push(thres.color);
        }
      });
    }
    const val = requiredThreshold.length > 0 ? requiredThreshold[0] : '#595959';
    return val;
  };

  const resize = () => {
    if (!label) padding = 0;
    // Defne maxheight to restrict when columns are more than rows
    const maxHeight = wrapper
      ? ((wrapper.clientHeight - padding * 2) / rows) * columns +
        padding * 2 +
        800 * props.rowAxisLabel.length
      : padding * 2 + 800 * props.rowAxisLabel.length;

    if (canvas) {
      // canvas.width = wrapper
      //   ? Math.min(wrapper.clientWidth, maxHeight)
      //   : maxHeight;
      canvas.width = maxHeight + 100;
    }
    const w = wrapper
      ? Math.min(wrapper.clientWidth - padding * 2, maxHeight - padding * 2)
      : maxHeight;
    cellSize = w / columns - spacing;

    if (canvas) {
      canvas.height = (cellSize + spacing) * rows + padding * 2 - spacing;
    }
    const h = (cellSize + spacing) * rows;
    if (wrapper) {
      wrapper.style.minHeight = h + 'px';
    }

    fontSize = Math.min(baseFontSize, cellSize / 2);
  };

  const plotData = () => {
    if (label) {
      c.font = fontSize + 'px Poppins';
      c.fillStyle = colorLabel;
      c.fillText(
        props.rowLabel ? props.rowLabel : '',
        padding / 1.8,
        padding / 1.8
      );

      c.fillText(
        props.colLabel ? props.colLabel : '',
        padding / 1.8,
        canvas.clientHeight - padding / 1.8
      );
    }

    // Create background
    c.fillStyle = backgroundcolor;
    c.fillRect(padding, padding, canvas.clientWidth, canvas.clientHeight);

    for (let i = 0; i < props.data.length; i++) {
      if (i < props.data.length - 1) {
        // Row line
        c.fillStyle = colorLine;
        c.fillRect(
          padding + 50,
          padding + cellSize + i * (cellSize + spacing),
          canvas.clientWidth - 2 * padding,
          spacing
        );
      }

      // Row label
      if (label) {
        c.font = fontSize + 'px';
        c.fillStyle = colorLabel;
        c.textAlign = 'end';
        c.fillText(
          props.columnAxisLabel
            ? props.columnAxisLabel[i]
              ? props.columnAxisLabel[i]
              : (i + 1).toString()
            : (i + 1).toString(),
          padding - 8 + 50,
          padding + (cellSize + fontSize) / 2 + i * (cellSize + spacing)
        );
      }

      for (let j = 0; j < props.data[i].length; j++) {
        if (i === 0) {
          if (j < props.data[i].length - 1) {
            // Column line
            c.fillStyle = colorLine;
            c.fillRect(
              padding + cellSize + j * (cellSize + spacing) + 50,
              padding + 0,
              spacing,
              canvas.clientHeight - padding
            );
          }

          // Column label
          if (label) {
            c.font = fontSize + 'px';
            c.fillStyle = colorLabel;
            c.textAlign = 'end';
            const lineheight = canvas.clientHeight - padding + fontSize + 8;

            for (let k = 0; k < props.rowAxisLabel.length; k++) {
              c.fillText(
                props.rowAxisLabel
                  ? props.rowAxisLabel[k][j]
                    ? props.rowAxisLabel[k][j]
                    : (j + 1).toString()
                  : (j + 1).toString(),
                padding +
                  (cellSize + fontSize) / 2 +
                  j * (cellSize + spacing) +
                  50,
                lineheight + k * 15
              );
            }
          }
        }

        c.fillStyle = foregroundcolor + props.data[i][j] + ')';
        c.fillStyle = getIntermediateColor(props.data[i][j]);

        // Cell

        c.fillRect(
          padding + j * (cellSize + spacing) + 50,
          padding + i * (cellSize + spacing),
          cellSize,
          cellSize
        );
      }
    }
  };

  const init = () => {
    resize();
    plotData();
  };

  useEffect(() => {
    instanceId = Math.round(Math.random() * 10000000);

    wrapper = document.querySelector('#heat-map-wrapper-' + instanceId);
    canvas = canvasRef.current;

    const canvasContext = canvas.getContext('2d');
    c = canvasContext;

    // canvas = document.querySelector('#heat-map-' + instanceId);

    // c = canvas ? canvas.getContext('2d') : null;
    rows = props.data ? props.data.length : 0;
    columns = props.data ? (props.data[0] ? props.data[0].length : 0) : 0;
    // data = [];
    // generateData();
    if (c) {
      init();
    }
  });

  return (
    <div
      className="heat-map2-component"
      style={{ backgroundColor: theme.palette?.light?.c50 }}
    >
      <div
        id={`heat-map-wrapper-${instanceId}`}
        style={{ backgroundColor: theme.palette?.light?.c50 }}
      >
        <canvas ref={canvasRef} id={`heat-map-${instanceId}`}></canvas>
        <div
          style={{
            width: `${canvas.width}px`,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          {props.threshold &&
            props.threshold.length > 0 &&
            props.threshold.map((field: any) => {
              return (
                <div key={generateRandomString()}>
                  <LegendText
                    value={`${field.name} (${field.value_min} < value < ${field.value_max})`}
                    color={field.color}
                    size={10}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
