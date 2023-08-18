import { Box} from "@chakra-ui/react"
import { useEffect } from "react"
import "../App.css"
import logo from "../Image/free-convert-icon-3215-thumb.png"
import { useNavigate } from "react-router-dom"


export const Home=()=>{
    const naviagte=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            naviagte("/converter")
        },3000)
        
    },[])
    return <Box h={'100vh'} backgroundColor={'#17202A'} color={'white'} display={'flex'} flexDirection={{base:'column',md:'row'}} alignItems={'center'} justifyContent={'center'} fontSize={{base:'20px',sm:'25px',md:'55px'}} >
      <h1 >Welcome to CodeConverter</h1> 
      <img style={{width:'90px',marginLeft:'1%'}} src={logo} alt="" />
    </Box>
}