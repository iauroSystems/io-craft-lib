import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, {useState} from 'react';
import IconComponent, {IconComponentProps,} from '../../POC/icon-component/icon-component';

export interface CustomDropdownProps {
  data: DropdownDataProps;
}

export interface DropdownDataProps {
  label: string;
  icon: IconComponentProps;
  selectedValue?: string;
  onClick: () => void;
  dropdownList: Array<{
    label: string;
    value: string;
  }>;

}

const CustomDropdown = ({data}: CustomDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState(data?.selectedValue || '');
  const [open, setOpen] = useState(true);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
    data?.onClick();
  };

  return (
    <FormControl sx={{m: 1, minWidth: 120, width: '100%'}} size="small">
      {!selectedValue && open && (
        <InputLabel
          id="demo-select-small"
          sx={{
            color: '#0458AE',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            display: 'flex',
            alignItems: 'center',
            top: data && data.icon && data?.icon?.name ? '-4px' : '-2px',
            left: data && data.icon && data?.icon?.name ? '-10px' : '-5px',
            gap: '4px',
            width: '100%',
          }}
        >
          {data && data.icon && data?.icon?.name && (
            <IconComponent
              name={data?.icon?.name || 'calendar_today_black_24dp'}
              size={data?.icon?.size || 20}
              color={data?.icon?.color || ''}
            />
          )}
          {data?.label}
        </InputLabel>
      )}
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={selectedValue}
        label={data?.label}
        onChange={handleChange}
        onFocus={() => setOpen(false)}
        onBlur={() => setOpen(true)}
        input={
          <OutlinedInput sx={{height: '35px', pt: 1, pb: 1, pl: 0, pr: 0}}/>
        }
        sx={{
          height: '35px',
          minWidth: 'none',
          '& .css-1vgla7z-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
            {
              padding: '5px 14px',
            },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#E2E7EF',
          },
        }}
      >
        {data?.dropdownList.map((name, index) => (
          <MenuItem key={index} value={name.label}>
            <ListItemText primary={name.label}/>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
