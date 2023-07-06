/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import {Box, Typography} from '@mui/material';
import IconComponent, {IconComponentProps,} from '../../POC/icon-component/icon-component';
import {useTheme} from '@mui/system';
import {ISquareChipProps,} from '../../Atoms/square-chip/SquareChip';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import themes from 'libs/dsl/src/theme';

interface IColorProps {
  [key: string]: string | number | any;
}

export interface StatCardProps {
  data: StatCardData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

export interface StatCardData {
  title?: string;
  chipData?: ISquareChipProps;
  stat?: any;
  icon?: IconComponentProps;
  link?: string;
}

export const StatCard = ({data, chartProps, onChartClick}: StatCardProps) => {
  const theme = useTheme();
  const themesChart = themes.default;
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        backgroundColor:
          chartProps?.background_color ||
          themesChart.palette?.background?.bacopWhite,
        borderRadius: '4px',
        maxHeight: '86px',
        padding: '16px 9px 16px 20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '37px',
          minWidth: '37px',

          height: '37px',
          width: '37px',
          borderRadius: '4px',
          backgroundColor:
            chartProps?.icon_bgcolor ||
            themesChart.palette?.background?.bacmain,
        }}
      >
        {data && data.icon && (
          <IconComponent
            name={data.icon?.name || 'alarm_black_24dp'}
            size={data.icon?.size || 20}
            color={data.icon?.color || themesChart.palette.neutral.neu400}
          />
        )}
      </div>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          my: 'auto',
          color: themesChart.palette?.text?.tex400,
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        <Typography variant={'body2'}>{data?.title || ''}</Typography>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <div style={{display: 'flex', flexDirection: 'row', flex: 50}}>
            <Typography
              sx={{
                display: 'flex',
                fontWeight: 700,
                color:
                  chartProps?.subtitle_color ||
                  themesChart.palette?.systemColor5?.sys400,
              }}
              variant="h5"
            >
              {data?.stat || ''}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 50,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {data.link && (
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  cursor: 'pointer',
                  color: themesChart.palette?.primary?.pri300Main,
                }}
                onClick={() => {
                  const payload: any = {
                    action: 'link clicked',
                  };
                  onChartClick && onChartClick(payload);
                }}
              >
                {data?.link || ''}
              </Typography>
            )}
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default StatCard;
