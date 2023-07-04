/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import themes from 'libs/dsl/src/theme';
export interface DropdownProps {
  dropdownList: Array<{
    label: string;
    value: string;
  }>;
  multipleSelection?: boolean;
  enableCheckbox?: boolean;
  fullWidth?: boolean;
  onChangeFunc?: (e: SelectChangeEvent<string[]>) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;

export function Dropdown(props: DropdownProps) {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string[]>([]);
  const dslTheme =themes.default;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 300,
        marginTop: '-8px',
        backgroundColor: dslTheme.palette.background.bacopWhite,
      },
    },
  };
  const handleChange = (event: SelectChangeEvent<typeof selectedValue>) => {
    const {
      target: { value },
    } = event;
    setSelectedValue(typeof value === 'string' ? value.split(',') : value);
    props.onChangeFunc(event);

  };
   
  return (
<FormControl sx={{ width: !props.fullWidth ? 300 : '100%' }}>
  <Select
    multiple={props.multipleSelection}
    value={selectedValue}
    onChange={handleChange}
    displayEmpty
    input={<OutlinedInput sx={{ height: '36px', pt: 1, pb: 1, pl: 0, pr: 0 }} />}
    renderValue={(selected) => {
      if (selected.length === 0) {
        return <em>Select</em>; // Placeholder text when no option is selected
      } else {
        return selected.join(', ');
      }
    }}
    MenuProps={MenuProps}
  >
    {props.dropdownList.map((name, index) => (
      <MenuItem key={index} value={name.label}>
        {props.enableCheckbox ? (
          <Checkbox checked={selectedValue.indexOf(name.label) > -1} />
        ) : null}
        <ListItemText primary={name.label} />
      </MenuItem>
    ))}
  </Select>
</FormControl>

    );
}

export default Dropdown;
