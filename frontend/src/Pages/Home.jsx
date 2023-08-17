import { Box} from "@chakra-ui/react"
import { useEffect } from "react"
import "../App.css"

import { useNavigate } from "react-router-dom"


export const Home=()=>{
    const naviagte=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            naviagte("/converter")
        },3000)
        
    },[])
    return <Box h={'100vh'} backgroundColor={'#17202A'} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'55px'} >
      <h1 >Welcome to CodeConverter</h1> 
    </Box>
}