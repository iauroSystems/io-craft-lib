import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeatmapchartcardProps {
}

const StyledHeatmapchartcard = styled.div`
  color: pink;
`;

export function Heatmapchartcard(props: HeatmapchartcardProps) {
  return (
    <StyledHeatmapchartcard>
      <h1>Welcome to Heatmapchartcard!</h1>
    </StyledHeatmapchartcard>
  );
}

export default Heatmapchartcard;
