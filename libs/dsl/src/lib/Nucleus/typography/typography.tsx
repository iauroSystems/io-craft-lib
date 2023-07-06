import {Box, Typography as MuiTypography} from '@mui/material';

export function Typography(props: any) {
  return (
    <Box sx={{width: '100%', maxWidth: 500}}>
      <MuiTypography variant="h1" component="div" gutterBottom>
        h1. Heading
      </MuiTypography>
      <MuiTypography variant="h2" gutterBottom component="div">
        h2. Heading
      </MuiTypography>
      <MuiTypography variant="h3" gutterBottom component="div">
        h3. Heading
      </MuiTypography>
      <MuiTypography variant="h4" gutterBottom component="div">
        h4. Heading
      </MuiTypography>
      <MuiTypography variant="h5" gutterBottom component="div">
        h5. Heading
      </MuiTypography>
      <MuiTypography variant="h6" gutterBottom component="div">
        h6. Heading
      </MuiTypography>

      <MuiTypography variant="subtitle1" gutterBottom component="div">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </MuiTypography>
      <MuiTypography variant="subtitle2" gutterBottom component="div">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </MuiTypography>
      <MuiTypography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </MuiTypography>
      <MuiTypography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </MuiTypography>
      <MuiTypography variant="button" display="block" gutterBottom>
        button text
      </MuiTypography>
      <MuiTypography variant="caption" display="block" gutterBottom>
        caption text
      </MuiTypography>
      <MuiTypography variant="overline" display="block" gutterBottom>
        overline text
      </MuiTypography>
    </Box>
  );
}

export default Typography;
