/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Avatar, Box, Typography } from '@mui/material';
import CustomChip from '../../Atoms/chip/chip';
import { IOptions } from '../table-header-cell/table-header-cell';
import './table-cell.css';
import { useTheme } from '@mui/system';
import styled from '@mui/system/styled';
import SquareChip, {
  ISquareChipProps,
} from '../../Atoms/square-chip/SquareChip';
import UserInfo, { UserInfoProps } from '../user-info/user-info';
import themes from 'libs/dsl/src/theme';

export interface IAvatar {
  value: string;
  path: string;
}
export interface IStatus {
  color: string;
  value?: string;
}
export interface IText {
  value: string;
  variant?: any;
}
interface IColorProps {
  [key: string]: string | number | any;
}
/* eslint-disable-next-line */
export interface ITableCellComponentV2Props {
  text?: IText;
  userInfo?: UserInfoProps;
  primaryAvatar?: IAvatar;
  leftAvatar?: IAvatar;
  rightAvatar?: IAvatar;
  status?: IStatus;
  tags?: IOptions[];
  sqchip?: ISquareChipProps[];
  chartProps?: IColorProps;

  cellClicked?: (event: any) => void;
}

export function TableCellComponentV2(props: ITableCellComponentV2Props) {
  const theme: any = useTheme();
  const themesChart = themes.default;
  const StyledTableCellComponentV2 = styled(Box)(({ theme }) => {
    return {
      '&': {
        backgroundColor:
          props?.chartProps?.backgroundColor ||
          themesChart?.palette?.background?.bacopWhite,
        color: themesChart?.palette?.text?.tex300Main,
      },
      '.status-wrap': {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      '.other-wrap': {
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        color: themesChart?.palette?.text?.tex300Main,
      },
    };
  });

  return (
    <StyledTableCellComponentV2>
      <Box
        className="table-cell-container"
        onClick={(e) => props.cellClicked(props)}
        style={{
          backgroundColor:
            props?.chartProps?.backgroundColor ||
            themesChart?.palette?.background?.bacopWhite,
        }}
      >
        {props.primaryAvatar && (
          <>
            <Avatar
              alt={props?.primaryAvatar?.value}
              src={props?.primaryAvatar?.path}
              sx={{ height: 24, width: 24, fontSize: 16 }}
            />
            <Typography variant={'body2'}>
              {props?.primaryAvatar?.value || ''}
            </Typography>
          </>
        )}
        {props.text && (
          <Typography
            variant={props.text.variant || 'body2'}
            color={themesChart?.palette?.text?.tex300Main}
            style={{
              backgroundColor:
                props?.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            }}
          >
            {props?.text?.value}
          </Typography>
        )}
        {props.sqchip &&
          props.sqchip.length &&
          props.sqchip.map((element, index) => {
            return (
              <SquareChip
                key={index}
                chipColor={element.chipColor}
                textData={element.textData}
                icon={element.icon}
              />
            );
          })}

        {props.tags &&
          props.tags.length &&
          props.tags.map((element, index) => {
            return (
              <CustomChip key={index} label={element.label} color="primary" />
            );
          })}

        {props && props.userInfo && (
          <UserInfo
            userAvatar={props.userInfo.userAvatar}
            subTitle={props.userInfo.subTitle || ''}
            chipData={props.userInfo.chipData || []}
          />
        )}
      </Box>
    </StyledTableCellComponentV2>
  );
}

export default TableCellComponentV2;
