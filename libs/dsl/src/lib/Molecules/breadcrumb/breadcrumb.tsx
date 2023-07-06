/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {Breadcrumbs as MuiBreadCrumb} from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import IconComponent, {IconType,} from '../../POC/icon-component/icon-component';
import themes from 'libs/dsl/src/theme';

export interface BreadcrumbProps {
  linkDetails: Array<{
    label: string;
    url?: string;
  }>;
  itemBeforeCollapse?: number;
  itemAfterCollapse?: number;
  maxItems?: number;
  color?: 'primary' | 'secondary' | 'error' | string;
  underline?: 'always' | 'hover' | 'none';
  variant?:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  iconName: any;
  iconSize: number;
  iconLabel?: string;
  iconColor?: string;
  iconStyle?: IconType;
}

export function Breadcrumb(props: BreadcrumbProps) {
  const dslTheme = themes.default;

  const StyledBreadcrumb = styled('div')(({theme}) => {
    return {
      '& .MuiSvgIcon-root': {
        backgroundColor: dslTheme.palette.background.bacopWhite,
      },
    };
  });
  return (
    <StyledBreadcrumb>
      <MuiBreadCrumb
        separator={
          <IconComponent
            name={props?.iconName}
            size={props?.iconSize}
            color={props?.iconColor || dslTheme.palette.primary.pri300Main}
            label={props?.iconLabel}
            style={props?.iconStyle}
          />
        }
        maxItems={props.maxItems}
        aria-label="breadcrumb"
        itemsAfterCollapse={props.itemAfterCollapse}
        itemsBeforeCollapse={props.itemBeforeCollapse}
      >
        {props?.linkDetails?.map((breadcrumbItem, index) => {
          return index < props.linkDetails.length - 1 ? (
            <Link
              variant={props.variant}
              key={index}
              color={props.color}
              href={breadcrumbItem.url}
              underline={
                breadcrumbItem.url !== '' && breadcrumbItem.url !== undefined
                  ? props.underline
                  : 'none'
              }
            >
              {breadcrumbItem.label}
            </Link>
          ) : (
            <Typography
              key={props.linkDetails.length}
              variant={props.variant}
            >
              {breadcrumbItem.label}
            </Typography>
          );
        })}
      </MuiBreadCrumb>
    </StyledBreadcrumb>
  );
}

export default Breadcrumb;
