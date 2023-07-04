import React from 'react';
import { Tabs as MuiTabs, useTheme } from '@mui/material';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import themes from '../../../theme';
import { styled } from '@mui/system';

export interface TabsProps {
  tabsList: Array<{
    label: string;
    value: string;
  }>;
  tabsOrientation: 'vertical' | 'horizontal';
  verticalHeight?: string | number;
  horizontalWidth?: string | number;
  tabDisabled?: boolean;
  selectedTabColor?: 'primary' | 'secondary';
  onChangeFunc?: (e: React.SyntheticEvent<Element, Event>) => void;
}

function Tabs(props: TabsProps) {
  const StyledRangePicker = styled(Box)(({ theme }) => {
    return {
      '& .MuiTabs-scrollButtons': {
        color: dslTheme.palette.text.primary,
      },
      '.tab-container': {
        borderBottom:
          props.tabsOrientation === 'horizontal' && '1px solid #cecbcb',
        borderRight:
          props.tabsOrientation === 'vertical' && '1px solid #cecbcb',
        bgcolor: dslTheme.palette.background.paper,
        display: 'flex',
        height:
          props.tabsOrientation === 'vertical'
            ? props.verticalHeight
            : 'fit-content',
        width:
          props.tabsOrientation === 'vertical'
            ? 'fit-content'
            : props.horizontalWidth,
      },
    };
  });
  const [value, setValue] = React.useState(0);
  const dslTheme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    props.onChangeFunc?.(event);
  };

  return (
    <StyledRangePicker>
      <Box className="tab-container">
        <MuiTabs
          orientation={props.tabsOrientation}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{ backgroundColor: dslTheme.palette.background.paper }}
          scrollButtons="auto"
          indicatorColor={props.selectedTabColor}
          textColor={props.selectedTabColor}
        >
          {props.tabsList.map((listItem, index) => {
            return (
              <Tab
                sx={{ color: dslTheme.palette.text.primary }}
                label={listItem.label}
                key={index}
                disabled={props.tabDisabled}
              />
            );
          })}
        </MuiTabs>
      </Box>
    </StyledRangePicker>
  );
}

export default Tabs;
