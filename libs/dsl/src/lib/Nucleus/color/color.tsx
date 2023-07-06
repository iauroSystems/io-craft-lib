import {styled} from '@mui/system';
import {Box, Typography} from '@mui/material';
import themes from '../../../theme';
import './color.css';
import {useMemo} from 'react';

export const ColorBox = (props: any) => {
  return (
    <Box className="box">
      <Box
        style={{background: props.color}}
        className="color_container"
      ></Box>
      <Typography className="color_name"> {props.name}</Typography>
    </Box>
  );
};

const getSortedColor = (value: any) => {
  const head: any[] = [];
  const body: any[] = [];

  Object.entries(value).forEach(([subKey, subValue]) => {
    if (
      subKey === 'primary' ||
      subKey === 'secondary' ||
      subKey === 'disabled' ||
      subKey === 'dark' ||
      subKey === 'main' ||
      subKey === 'light' ||
      subKey === 'c100' ||
      subKey === 'c50' ||
      subKey === 'default'
    ) {
      head.push({key: subKey, value: subValue});
    } else {
      body.push({key: subKey, value: subValue});
    }
  });

  return [...head, ...body];
};

const StyledColor = styled(Box)(({theme}) => {
  return {
    '&': {},
    '.MuiTypography-root .color-box-text': {
      color: theme.palette?.text?.primary,
      fontSize: 'small',
      lineHeight: 1.2,
    },
  };
});

const ColorContainerSmall = ({color, colorkey}: any) => (
  <StyledColor>
    <Box className="color-small-container">
      <Typography className="color-box-text">{colorkey}</Typography>
      <Box className="color-box-small" style={{backgroundColor: color}}></Box>
      <Typography className="color-box-text">{color}</Typography>
    </Box>
  </StyledColor>
);

const ColorBoxContainers = ({colorData, header}: any) => {
  return (
    <>
      <Box className="color-flex">
        {colorData.map((colors: any) => {
          const main = colors.data.slice(0, colors.data.length);
          return (
            <Box className="color-box" key={main.value}>
              <Typography className="heading">
                {colors.key.replace(/([a-z])([A-Z])/g, '$1 $2')}
              </Typography>
              <Box className="color-flex" style={{marginTop: '10px'}}>
                <Box className="color-col-left">
                  <Box
                    className="color-col-main"
                    style={{backgroundColor: main.value}}
                  ></Box>
                </Box>
              </Box>

              <Box className="color-flex" style={{marginTop: '10px'}}>
                {main.map((data: any) => {
                  return (
                    <ColorContainerSmall
                      colorkey={data.key.toUpperCase()}
                      color={data.value}
                    />
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export function Colors(props: any) {
  const colorsCollection: any = useMemo(() => {
    const otherColors: any = [];
    const mainColor: any = [];
    Object.entries(themes.dark.palette).forEach(([key, value]) => {
      if (typeof value === 'object') {
        const data = getSortedColor(value);
        if (
          key.toLowerCase() === 'primary' ||
          key.toLowerCase() === 'secondary' ||
          key.toLowerCase() === 'text' ||
          key.toLowerCase() === 'background' ||
          key.toLowerCase() === 'dark' ||
          key.toLowerCase() === 'light' ||
          key.toLowerCase() === 'systemcolor1' ||
          key.toLowerCase() === 'systemcolor2' ||
          key.toLowerCase() === 'systemcolor3' ||
          key.toLowerCase() === 'systemcolor4' ||
          key.toLowerCase() === 'systemcolor5' ||
          key.toLowerCase() === 'systemcolor6'
        ) {
          mainColor.push({data, key});
        }
      }
    });
    return {mainColor};
  }, []);

  return (
    <Box className="main_container">
      <ColorBoxContainers colorData={colorsCollection.mainColor}/>
    </Box>
  );
}

export default Colors;
