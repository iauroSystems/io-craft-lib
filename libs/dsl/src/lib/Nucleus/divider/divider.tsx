import { Typography } from '@mui/material';
import { Divider as MuiDivider } from '@mui/material';
import Chip from '@mui/material/Chip';
import './divider.css';

export function Divider(props: any) {
  return (
    <>
      <Typography variant="h6" className="divider-heading">
        Default Divider
      </Typography>
      <MuiDivider />
      <Typography variant="h6" className="divider-heading">
        Divider with title
      </Typography>

      <MuiDivider
        style={{
          marginTop: '10px',
        }}
      >
        CENTER
      </MuiDivider>

      <MuiDivider
        style={{
          marginTop: '10px',
        }}
        textAlign="left"
      >
        LEFT
      </MuiDivider>

      <MuiDivider
        style={{
          marginTop: '10px',
        }}
        textAlign="right"
      >
        RIGHT
      </MuiDivider>

      <MuiDivider
        style={{
          marginTop: '10px',
        }}
      >
        <Chip label="CHIP" />
      </MuiDivider>

      <Typography variant="h6" className="divider-heading">
        Dash Default Driver
      </Typography>
      <MuiDivider
        style={{
          border: '1px dashed #EDE6E6',
        }}
      />
      <Typography variant="h6" className="divider-heading">
        Section Driver
      </Typography>
      <Typography variant="h6" className="divider-heading">
        4px
      </Typography>
      <MuiDivider
        style={{
          padding: '4px',
          borderTop: '1px solid #EDE6E6',
          borderBottom: '1px solid #EDE6E6',
          backgroundColor: '#FCFAFA',
        }}
      >
        {''}
      </MuiDivider>
      <Typography variant="h6" className="divider-heading">
        8px
      </Typography>
      <MuiDivider
        style={{
          padding: '8px',
          borderTop: '1px solid #EDE6E6',
          borderBottom: '1px solid #EDE6E6',
          backgroundColor: '#FCFAFA',
        }}
      >
        {''}
      </MuiDivider>
      <Typography variant="h6" className="divider-heading">
        16px
      </Typography>
      <MuiDivider
        style={{
          padding: '16px',
          borderTop: '1px solid #EDE6E6',
          borderBottom: '1px solid #EDE6E6',
          backgroundColor: '#FCFAFA',
        }}
      >
        {''}
      </MuiDivider>
      <Typography variant="h6" className="divider-heading">
        24px
      </Typography>
      <MuiDivider
        style={{
          padding: '24px',
          borderTop: '1px solid #EDE6E6',
          borderBottom: '1px solid #EDE6E6',
          backgroundColor: '#FCFAFA',
        }}
      >
        {''}
      </MuiDivider>
      <Typography variant="h6" className="divider-heading">
        32px
      </Typography>
      <MuiDivider
        style={{
          padding: '32px',
          borderTop: '1px solid #EDE6E6',
          borderBottom: '1px solid #EDE6E6',
          backgroundColor: '#FCFAFA',
        }}
      >
        {''}
      </MuiDivider>
      <Typography variant="h6" className="divider-heading">
        48px
      </Typography>
      <MuiDivider
        style={{
          padding: '48px',
          borderTop: '1px solid #EDE6E6',
          borderBottom: '1px solid #EDE6E6',
          backgroundColor: '#FCFAFA',
        }}
      >
        {''}
      </MuiDivider>
    </>
  );
}

export default Divider;
