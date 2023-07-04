/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/system';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import themes from 'libs/dsl/src/theme';


/* eslint-disable-next-line */
export interface SegmentedControlProps {
  multiple?: boolean;
  active?: Array<string>;
  value?: Array<string>;
  disabled?: boolean;
  position?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  color?:
    | 'primary'
    | 'secondary'
    | 'standard'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  /**
   * both for single and multiple selection
   * values will be in string array
   */
  onChange?: (selectedValues: string[]) => void;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  togglebtnstyle: any;
  // eslint-disable-next-line @typescript-eslint/ban-types
  containerstyle: any;
}

const StyledSegmentedControl: any = styled('div')(
  ({ theme, color, togglebtnstyle, containerstyle = {} }: any) => {
    return {
      '.toggleContainer': {
        background: themes.default.palette.background.bacopWhite,
        color: color || '#000',
        fontFamily: theme?.typography?.caption?.fontFamily,
        fontStyle: 'normal',
        fontWeight: theme?.typography?.caption?.fontWeight,
        fontSize: theme?.typography?.caption?.fontSize,
        lineHeight: theme?.typography?.caption?.lineHeight,
        border: 'none',
        ...containerstyle,
      },
      '& .MuiToggleButton-root.Mui-selected': {
        ...(togglebtnstyle ? togglebtnstyle : {}),
        '&:hover': {
          background: togglebtnstyle.background,
          color: togglebtnstyle.color,
        },
      },
      '& .MuiButtonBase-root': {
        background: themes.light.palette.light.c100,
        '&:hover': {
          color: themes.default.palette.text.tex300Main,
        },
      },
      '& .css-1opsinb-MuiButtonBase-root-MuiToggleButton-root': {
        background: themes.default.palette.text.tex100,
      },
    };
  }
);
const StyledButtonGroup: any = styled(ToggleButtonGroup)(
  ({ theme, color, togglebtnstyle, containerstyle = {} }: any) => {
    return {
      '.toggleItem': {
        borderRadius: '4px !important',
        padding: '15px 10px',
        border: 0,
        margin: '5px',
        '&:lastChild': {
          marginBottom: '0px',
        },
      },
    };
  }
);

export function SegmentedControl(props: SegmentedControlProps) {
  const [values, setValues] = React.useState(() => props.active);
  const handleChangeValue = (
    event: React.MouseEvent<HTMLElement>,
    values: string[]
  ) => {
    if (typeof values !== 'object') {
      values = [values];
    }
    setValues(values);
    props.onChange?.(values);
  };

  return (
    <StyledSegmentedControl
      color={props.color || '#000'}
      togglebtnstyle={props.togglebtnstyle}
      containerstyle={props.containerstyle}
    >
      <StyledButtonGroup
        className="toggleContainer"
        value={values}
        onChange={handleChangeValue}
        exclusive={!props.multiple}
        disabled={props.disabled}
        orientation={props?.position}
        size={props?.size}
        color={props?.color}
      >
        {props?.value?.map((element: any, index: number) => {
          return (
            <ToggleButton
              onClick={props.onClick}
              key={index}
              className="toggleItem"
              value={element}
            >
              {element}
            </ToggleButton>
          );
        })}
      </StyledButtonGroup>
    </StyledSegmentedControl>
  );
}

export default SegmentedControl;