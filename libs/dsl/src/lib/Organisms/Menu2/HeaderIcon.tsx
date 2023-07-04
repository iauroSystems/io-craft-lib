import React from 'react';
import IconComponent from '../../POC/icon-component/icon-component';
import './Menu2.css';
export interface IHeaderIconProps {
  compressedIcon: boolean;
}

const HeaderIcon = (props: IHeaderIconProps) => {
  return (
    <div
      className="header-icon-container"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {!props.compressedIcon && (
        <div className="header-icon-box">
          <div className="full-icon" />
        </div>
      )}
      {props.compressedIcon && (
        <div className="header-icon-box">
          <div className="compressed-icon" />
        </div>
      )}
    </div>
  );
};

export default HeaderIcon;
