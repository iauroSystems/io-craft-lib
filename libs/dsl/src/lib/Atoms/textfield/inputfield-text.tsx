import * as React from 'react';
import {useEffect, useRef} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl, {useFormControl} from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

export interface TextfieldProps {
  variant: 'outlined' | 'filled' | 'standard';
  label: string;
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  autoFocus?: boolean;
  placeholder?: string;
}

export default function TextInputField(props: TextfieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (props.autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.autoFocus]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        id="text-field"
        label={props.label}
        variant={props.variant}
        fullWidth
        color={props.color}
        inputRef={inputRef}
        placeholder={props.placeholder}
      />
    </Box>
  );
}


function MyFormHelperText() {
  const {focused} = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'This field is being focused';
    }

    return 'Helper text';
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export function UseFormControl(props: TextfieldProps) {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl sx={{width: '25ch'}}>
        <InputLabel>{props.label}</InputLabel>
        <OutlinedInput
          placeholder={props.placeholder}
          // label={props.label}
          // variant={props.variant}
          fullWidth
          color={props.color}
        />
        <MyFormHelperText/>
      </FormControl>
    </Box>
  );
}
