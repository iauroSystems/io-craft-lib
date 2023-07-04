/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { useEffect } from 'react';
import './footer.css';
import { Box, Link } from '@mui/material';
import themes from 'libs/dsl/src/theme';

export interface FooterProps {
  footerActions: Array<{ label: string; link: string }>;
  copyRightText: string;
  versionText: string;
  icon: string;
  actionsColor?: string;
  actionsVariant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  footerBackgroundColor?: string;
}

interface RectProps {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}
function Footer(props: FooterProps) {
  const dslTheme = themes.default;
  let actionsWidth = '';
  useEffect(() => {
    window.onresize = resizeHandler;
  });

  const resizeHandler = () => {
    const content = document.getElementById('footer-content');
    const bounds: RectProps = content?.getBoundingClientRect() || {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    };
    actionsWidth = bounds?.left - 32 + 'px';
    document.getElementById('left').style.width = bounds.left - 40 + 'px';
  };
  return (
    <>
      <Box
        component="div"
        className="flex-footer align-items flex-row footer-wrapper"
        sx={{
          fontFamily: dslTheme.typography?.['caption'].fontFamily,
          backgroundColor: props.footerBackgroundColor,
        }}
      >
        <Box
          component="div"
          sx={{ minWidth: '200px', overflowX: 'auto' }}
          className="pos-left pos-abs flex-footer align-items flex-row footer-actions-wrapper"
          id="left"
        >
          {props.footerActions.map((actionArray, index) => {
            return (
              <Link
                key={index}
                variant={props.actionsVariant}
                color={props.actionsColor || dslTheme.palette?.text?.tex300Main}
                href={actionArray.link}
                sx={{ marginRight: 5, minWidth: 'fit-content' }}
                underline="hover"
              >
                {actionArray.label}
              </Link>
            );
          })}
        </Box>
        <Box
          sx={{
            bgcolor:
              props.footerBackgroundColor ||
              dslTheme.palette?.background?.bacmain,
            zIndex: 100,
          }}
          component="div"
          className="flex-footer align-items flex-column"
          id="footer-content"
        >
          <Box
            component="div"
            sx={{
              fontSize: dslTheme.typography?.['caption'].fontSize,
              lineHeight: dslTheme.typography?.['caption'].lineHeight,
              marginBottom: '4px',
            }}
          >
            {props.copyRightText}
          </Box>
          <Box
            component="div"
            sx={{
              fontSize: dslTheme.typography?.['overline'].fontSize,
              lineHeight: dslTheme.typography?.['caption'].lineHeight,
            }}
          >
            {props.versionText}
          </Box>
        </Box>
        <div className="pos-right pos-abs mt-5">
          <img src={props.icon} alt="company-logo" />
        </div>
      </Box>
    </>
  );
}

export default Footer;
