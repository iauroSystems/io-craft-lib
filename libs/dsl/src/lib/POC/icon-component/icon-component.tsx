import {styled} from '@mui/system';
import {useEffect, useState} from 'react';
import './icon-component.css';

// import '../../../static/assets/icons/icomoon/style.css';

/* eslint-disable-next-line */
export interface IconComponentProps {
  name: string;
  size: number;
  color?: string;
  label?: string;
  showToolTip?: any;
  style?: IconType;

  handleClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleDoubleClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

export type IconType = 'regular' | 'boxed';

const StyledIconComponent = styled('div')(({theme}) => {
  return {
    icon_class: {
      span: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      },
    },
  };
});

export function IconComponent(props: IconComponentProps) {
  const [showTooltip, setShowTooltip] = useState<boolean>(
    props?.showToolTip !== undefined && props?.showToolTip === false
      ? false
      : true
  );

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
    setShowTooltip(showTooltip)
  }, [showTooltip]);
  return (
    <StyledIconComponent
      onClick={props.handleClick}
      onDoubleClick={props.handleDoubleClick}
    >
      <div
        className="gessa-icon"
        style={{
          backgroundColor:
            props.style === 'boxed' ? props.color + '50' : 'transparent',
          height: props.size + 'px',
          width: props.size + 'px',
          color: props.color,
          borderRadius: props.style === 'boxed' ? '4px' : '0px',
        }}
        title={showTooltip ? (props.label ? props.label : props.name) : ''}
      >
        <span
          className={
            'flex flex-row justify-center items-center icon-' + props.name
          }
          style={{
            height: +props.size + 'px',
            width: props.size + 'px',
            fontSize: props.size - 8 + 'px',
            display: 'grid',
            placeItems: 'center',
          }}
        ></span>
      </div>
    </StyledIconComponent>
  );
}

export default IconComponent;
