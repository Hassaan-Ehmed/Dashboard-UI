import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import logo from '../images/logo.png';
import { useThemeContext } from '../theme/ThemeContextProvider';


const SideList=({text,Icon,select}:any)=>{
      
    return <div style={{width:"90%",height:"20%",backgroundColor:`${select ? "#FFD9AE" : ""}` ,borderRadius:"5px",display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"4vh",cursor:"pointer"}}>  
     <Icon sx={{fontSize:"3vh",marginLeft:"1.5vw",color:`${select ? "#A61B30" : "white"}`}}/>
     <p style={{fontSize:"1.6vh",color:`${select ? "#A61B30" : "white"}`}}>{text}</p>
       </div>
   }
export default function Sidebar(props: any) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  
  const { mode } = useThemeContext();  

  const SideListPacket=[

    {text:"My Profile",Icon:PersonOutlineOutlinedIcon,select:true},
    {text:"Requested Resources",Icon:PostAddOutlinedIcon, select:false},
    {text:"My Ressources",Icon:ArticleOutlinedIcon ,select:false}
    
    ]
    
     
    
  return (
    
    <Box sx={{ display: 'flex'}}>

      <CssBaseline />

      <Box
        component="nav"
        sx={{ width:"auto" , flexShrink: { sm: 0 }, bgcolor:"red" }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          variant="permanent"
          sx={{
           
           // display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "16%" ,backgroundColor:(mode === "light" ? "#A61B30"  : "#700010"),height:"181.5vh",display:"flex",justifyContent:"flex-start", flexDirection:"column",alignItems:"center"},
          }}
          open
        >
     <div style={{width:"100%",height:"20vh"}}>

<img src={logo} alt=""  style={{width:"100%",height:"100%",objectFit:"cover"}} />
      </div>

      <div style={{width:"100%",height:"20vh",marginTop:"100px",display:"flex",justifyContent:"space-around",flexDirection:"column",alignItems:"center"}}>

      {SideListPacket.map((packet:any)=>(<SideList text={packet.text} Icon={packet.Icon} select={packet.select}/>))}

      </div>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${"auto"})` } }}
      >
        <Toolbar />
       
      </Box>
    </Box>
  );
}