import React from 'react';
import {alpha, styled} from '@mui/material/styles';
import IconComponent, {IconComponentProps,} from '../../POC/icon-component/icon-component';
import {TreeView as MuiTreeView} from '@mui/lab';
import TreeItem, {treeItemClasses} from '@mui/lab/TreeItem';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import {unstable_batchedUpdates} from 'react-dom';
import Box from '@mui/material/Box';

export type RenderTree = {
  _id: string;
  name: string;
  type?: string;
  icon?: IconComponentProps;
  children?: RenderTree[];
};

export interface TreeViewProps {
  addNewNode?: boolean;
  data: Array<RenderTree>;
  addContentTreeItem?: any; //function
  onClick?: (data: any) => void;
}

const isNodeExpanded = (node: any) => {
  return node
    .closest('.MuiTreeItem-content')
    .classList.contains('Mui-expanded');
};

const StyledTreeItem = styled((props: any) => (
  <TreeItem className="p-2" nodeId={props.nodeId} {...props} />
))(({theme}) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.9,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
  [`& .${treeItemClasses.content}`]: {
    height: 40,
  },
  '.input': {
    outline: 'none',
    background: 'transparent',
  },
  '.treeItem-container': {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  '.treeitem': {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
  },
  '.flex-grow-1': {
    flexGrow: 1,
  },
}));

const TreeView = (props: TreeViewProps) => {
  const [textValue, setTextValue] = React.useState('');
  const [showTextBoxNode, setShowTextBoxNode] = React.useState(-1);
  const [selectedData, setSelectedData]: any = React.useState({});
  const [clickedOutside, setClickedOutside] = React.useState(false);

  const onChange = (e: any) => {
    if (e.key === 'Enter') {
      setShowTextBoxNode(-1);
      props.addContentTreeItem(selectedData._id, textValue);
      setTextValue('');
    }
  };

  const handleOnBlur = (e: any) => {
    if (e.target.value === '') {
      setClickedOutside(true);
      setShowTextBoxNode(-1);
    } else {
      //addContentTreeItem(textValue, selectedData.type, selectedData.project_id);
      setTextValue('');
    }
  };

  const renderChilds = (data: any, level: number) => {
    return data?.children?.map?.((child: any) => (
      <StyledTreeItem
        nodeId={child._id}
        label={child.name}
        key={child._id}
        icon={
          child?.children.length ? (
            <IconComponent
              name={'expand_more_black_24dp'}
              color={'black'}
              size={30}
              label={'Expand_More_Black'}
            />
          ) : level > 1 ? (
            <IconComponent
              name={'Dot'}
              color={'black'}
              size={20}
              label={'dot'}
            />
          ) : (
            <IconComponent
              name={'DiamondSolid'}
              color={'black'}
              size={20}
              label={'Diamond-Solid'}
            />
          )
        }
        onClick={(e: any) => {
          props.onClick?.(child);
        }}
      >
        {renderChilds(child, level + 1)}
      </StyledTreeItem>
    ));
  };

  return (
    <Box>
      <MuiTreeView
        aria-label="customized"
        defaultCollapseIcon={
          <IconComponent
            name={'expand_more_black_24dp'}
            color={'black'}
            size={30}
            label={'Expand_More_Black'}
          />
        }
        defaultExpandIcon={
          <IconComponent
            name={'arrow_forward_ios_black_24dp'}
            color={'black'}
            size={20}
            label={'Arrow-Forward-IOS'}
          />
        }
        defaultEndIcon={
          <IconComponent
            name={'Assignment-Turned-In-Black'}
            color={'black'}
            size={20}
            label={'Diamond-Solid'}
          />
        }
        className="mt-6"
      >
        {props?.data.map((data: any, index: number) => {
          return (
            <Box className="treeItem-container" key={data._id}>
              <StyledTreeItem
                nodeId={data._id}
                label={
                  <Box className="treeitem">
                    <Box className="flex-grow-1">{data.type}</Box>
                    <Box
                      onClick={(e) =>
                        unstable_batchedUpdates(() => {
                          isNodeExpanded(e.target) && e.stopPropagation();
                          setShowTextBoxNode(index);
                          setClickedOutside(false);
                          setSelectedData(data);
                        })
                      }
                      className="cursor-pointer"
                    >
                      {props?.addNewNode && (
                        <IconComponent
                          name={'add'}
                          color={'black'}
                          size={23}
                          label={'Add'}
                        />
                      )}
                    </Box>
                  </Box>
                }
              >
                {index === showTextBoxNode && (
                  <ClickAwayListener onClickAway={() => setShowTextBoxNode(-1)}>
                    <Box className="treeitem">
                      {props?.addNewNode && (
                        <>
                          <Box>
                            <IconComponent
                              name={'DiamondSolid'}
                              color={'black'}
                              size={20}
                              label={'Diamond-Solid'}
                            />
                          </Box>
                          {!clickedOutside ? (
                            <input
                              className="input"
                              onKeyUp={onChange}
                              onBlur={(e) => handleOnBlur(e)}
                              value={textValue}
                              onChange={(e) => setTextValue(e.target.value)}
                              autoFocus
                            ></input>
                          ) : (
                            ''
                          )}
                        </>
                      )}
                    </Box>
                  </ClickAwayListener>
                )}
                {renderChilds(data, 1)}
              </StyledTreeItem>
            </Box>
          );
        })}
      </MuiTreeView>
    </Box>
  );
};

export default TreeView;
