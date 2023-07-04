// import {
//   Box,
//   Divider,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import React from 'react';
// import ListItemButton from '@mui/material/ListItemButton';
// import StarBorder from '@mui/icons-material/StarBorder';
// import Collapse from '@mui/material/Collapse';
// import { IMenuData } from './Menu2';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

// export interface IMenulistProps {
//   compressedIcon: boolean;
//   data: IMenuData[];
// }

// const Menulist = (props: IMenulistProps) => {
//   const [open, setOpen] = React.useState({ '': false });
//   const handleClick = (item: string, status: boolean) => {
//     setOpen({ ...open, [item]: status });
//   };
//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   const handleListItemClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     index: number
//   ) => {
//     setSelectedIndex(index);
//   };
//   return (
//     <Box
//       sx={{ width: props.compressedIcon ? 70 : 250 }}
//       role="presentation"
//       //   onClick={toggleDrawer(anchor, false)}
//       //   onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {props.data.map((item, index) => (
//           <>
//             <ListItemButton
//               key={item.id}
//               selected={selectedIndex === index}
//               onClick={(event) => handleListItemClick(event, index)}
//             >
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               {!props.compressedIcon && (
//                 <>
//                   <ListItemText primary={item.label} />
//                   {item.children && item.children.length ? (
//                     open[item.id] ? (
//                         <ExpandLess />
//                     ) : (
//                         <ExpandMore />
//                     )
//                   ) : (
//                     <></>
//                   )}
//                 </>
//               )}
//             </ListItemButton>

//             {item.children && item.children.length && (
//               <Collapse in={open[item.id]} timeout="auto" unmountOnExit>
//                 <Menulist
//                   compressedIcon={props.compressedIcon}
//                   data={item.children}
//                 />
//               </Collapse>
//             )}
//           </>
//         ))}
//         {/*
//          <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItemButton sx={{ pl: 4 }}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Starred" />
//             </ListItemButton>
//           </List>
//         </Collapse>
//          */}
//       </List>
//     </Box>
//   );
// };

// export default Menulist;
