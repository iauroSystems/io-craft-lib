import { useEffect, useState } from 'react';
import './gaugechart.css';

export interface GaugeChartProps {
  needleValue: number;
  needleColor?: string;
  needleLength?: number;
  needleArc?: number;
  colors?: Array<string>;
  barColor?: string;
  barThickness?: number;
  gaugeWidth?: string;
  gaugeheight?: string;
}

function GaugeChart({
  needleValue,
  needleColor,
  needleLength,
  needleArc = 5,
  barColor = 'gray',
  colors = ['green', 'orange', 'red'],
  barThickness = 1,
  gaugeWidth = '400',
  gaugeheight = '400',
}: GaugeChartProps) {
  const drawNiddle = async () => {
    const gauge = document.querySelector('#gauge-niddle');
    const gb = gauge.getBoundingClientRect();
    const ctx = gauge.getContext('2d');

    let cw = gb.width;
    let ch = gb.height;

    /**
     * validated if percentage greater than 100 set max to 100
     */
    if (needleValue > 100) {
      needleValue = 100;
    }

    /**
     * gauge arc values min to max
     * min 134
     * max 405
     */
    let minDegrees = 134;
    let maxDegrees = 405;
    let difference = 270;
    let disToCover = (needleValue / 100) * difference;
    maxDegrees = minDegrees + disToCover;

    function drawNeedle(cx, cy, radius, radianAngle) {
      ctx.clearRect(0, 0, cw, ch);
      ctx.translate(cx, cy);
      ctx.rotate(radianAngle);
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.lineTo(radius - needleLength, 0);
      ctx.lineTo(0, 5);
      ctx.fillStyle = needleColor;
      ctx.fill();
      ctx.rotate(-radianAngle);
      ctx.translate(-cx, -cy);
      ctx.beginPath();
      ctx.arc(cx, cy, needleArc, 0, Math.PI * 2);
      ctx.fill();
    }

    const wait = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    for (; minDegrees <= maxDegrees; minDegrees++) {
      await wait(20);
      let radians = (minDegrees * Math.PI) / 180;
      drawNeedle(cw / 2, ch / 2, 150, radians);
    }
  };

  const drawGauge = async () => {
    const gauge = document.querySelector('#gauge');
    const gb = gauge.getBoundingClientRect();
    const ctx = gauge.getContext('2d');

    const circleX = gb.width / 2;
    const circleY = gb.height / 2;
    const circleR = Math.min(gb.width, gb.height) / 2 - 0.05 * gb.width;
    const barWidth = barThickness;
    const barSeparatorInterval = 3;
    const bars = 100;
    // drawNeedle(cw / 2, ch / 2, circleR - 50, radians);

    ctx.lineWidth = 20;
    // Green Arc
    ctx.strokeStyle = colors[0];
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleR, (6 * Math.PI) / 8, (10 * Math.PI) / 8);
    ctx.stroke();

    // Orange Arc
    ctx.strokeStyle = colors[1];
    // ctx.strokeStyle = 'orange';
    ctx.beginPath();
    ctx.arc(
      circleX,
      circleY,
      circleR,
      (10.1 * Math.PI) / 8,
      (14 * Math.PI) / 8
    );
    ctx.stroke();

    // Red Arc
    ctx.strokeStyle = colors[2];
    ctx.beginPath();
    ctx.arc(
      circleX,
      circleY,
      circleR,
      (14.1 * Math.PI) / 8,
      (18 * Math.PI) / 8
    );
    ctx.stroke();

    // Draw lines
    let count = 0;
    ctx.fillStyle = barColor;
    for (
      let i = (2 * Math.PI) / 8;
      i < (14 * Math.PI) / 8;
      i += (Math.PI * 2) / bars
    ) {
      length = count % barSeparatorInterval === 0 ? 24 : 10;
      draw_rectangle(i, length);
      count++;
    }

    function draw_rectangle(rad, barHeight) {
      // reset and move to the center of our circle
      ctx.setTransform(1, 0, 0, 1, circleX, circleY);
      // rotate the context so we face the correct angle
      ctx.rotate(rad);
      // move along y axis to reach the inner radius
      ctx.translate(0, circleR - 0.08 * circleX);
      // draw the bar
      ctx.fillRect(
        -barWidth / 2, // centered on x
        0, // from the inner radius
        barWidth,
        -barHeight // until its own height
      );
    }
  };

  useEffect(() => {
    drawGauge();
    drawNiddle();
  }, [
    needleValue,
    needleLength,
    needleColor,
    needleArc,
    barColor,
    barThickness,
    colors,
  ]);

  const canvasProps: any = {
    width: gaugeWidth,
    height: gaugeheight,
    style: { position: 'absolute', left: 0, top: 0 },
  };

  const screenSize = document.documentElement.clientWidth;

  return (
    <div>
      <canvas id="gauge" {...canvasProps}></canvas>
      <canvas id="gauge-niddle" {...canvasProps}></canvas>
    </div>
  );
}

export default GaugeChart;
