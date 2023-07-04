import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface IconsMaterialProps {}

const StyledIconsMaterial = styled.div`
  color: pink;
`;

export function IconsMaterial(props: IconsMaterialProps) {
  return (
    <StyledIconsMaterial>
      <h1>Welcome to IconsMaterial!</h1>
    </StyledIconsMaterial>
  );
}

export default IconsMaterial;
