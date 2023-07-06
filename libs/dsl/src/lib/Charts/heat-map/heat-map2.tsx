import {useEffect, useRef, useState} from 'react';
import './heat-map.css';

/* eslint-disable-next-line */
export interface IHeatMapProps {
  labels: String[];
  data: any;
  colLabel?: any;
  rowLabel?: any;
  rowAxisLabel?: any;
  rowAxisSubLabel?: any;
  columnAxisLabel?: any;
  threshold?: any;
}

export const HeatMap = (props: IHeatMapProps) => {
  let rows: any = [];
  let columns: any = [];
  let padding = 48;
  let cellSize: any = null;
  let fontSize = 14;
  const baseFontSize = 14;
  const spacing = 3;
  const colorLabel = '#969696';
  const foregroundcolor = '#FFFFFF';
  const backgroundcolor = '#FFFFFF';
  const colorLine = '#FFFFFF';
  const label = true;
  let wrapper: any = {};
  let canvas: any = {};
  let instanceId: any = {};
  let canvasContext: any = {};
  const ref: any = useRef();
  const canvasRef = useRef(null);

  let c: any = {};
  const [chartData, setChartData] = useState();

  const init = () => {
    resize();
    plotData();
  };

  const resize = () => {
    if (!label) padding = 0;
    // Defne maxheight to restrict when columns are more than rows
    const maxHeight = wrapper
      ? ((wrapper.clientHeight - padding * 2) / rows) * columns +
      padding * 2 +
      100 * props.rowAxisLabel.length
      : padding * 2 + 100 * props.rowAxisLabel.length;

    if (canvas) {
      canvas.width = wrapper
        ? Math.min(wrapper.clientWidth, maxHeight)
        : maxHeight;
    }
    const w = wrapper
      ? Math.min(wrapper.clientWidth - padding * 2, maxHeight - padding * 2)
      : maxHeight;
    const cellSize = w / columns - spacing || 5;

    if (canvas) {
      canvas.height = (cellSize + spacing) * rows + padding * 2 - spacing;
    }
    const h = (cellSize + spacing) * rows;
    if (wrapper) {
      wrapper.style.minHeight = h + 'px';
    }

    const fontSize = Math.min(baseFontSize, cellSize / 2);
  };

  const getIntermediateColor = (percent: any) => {
    const requiredThreshold: any = [];
    if (props.threshold) {
      props.threshold.forEach((thres: any) => {
        if (thres.value_min <= percent && thres.value_max >= percent) {
          requiredThreshold.push(thres.color);
        }
      });
    }
    const val = requiredThreshold.length > 0 ? requiredThreshold[0] : '#595959';
    return val;
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

  const onResize = () => {
    resize();
    init();
  };

  useEffect(() => {
    instanceId = Math.round(Math.random() * 10000000);
    if (instanceId) {
      wrapper = document.querySelector(`#heat-map-wrapper-${instanceId}`);
      canvas = canvasRef.current;
      const canvasContext = canvas.getContext('2d');
      c = canvasContext;
      // canvasContext = canvasContext ? canvas.getContext('2d') : null;
      rows = props.data ? props.data.length : 0;
      columns = props.data ? (props.data[0] ? props.data[0].length : 0) : 0;
      if (canvasContext) {
        init();
      }
    }
  });

  return (
    <div>
      <div className="heat-map2-component">
        <div id={`heat-map-wrapper-${instanceId}`}>
          <canvas ref={canvasRef}/>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
