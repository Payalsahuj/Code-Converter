import { Box, Button, Heading } from "@chakra-ui/react"
import Editor from "@monaco-editor/react"
import { useRef } from "react"
import { useState } from "react"
import axios from "axios"
const files={
    "script.py":{
        name:"script.py",
        language:'python',
        defaultValue:"Here is some python code"
    },

    "index.html":{
        name:"index.html",
        language:"html",
        defaultValue:"<div></div>"
    },
    "javascript":{
        name:"javascript",
        language:"javascript",
        defaultValue:"Here is some javascript code"
    },
    "java":{
        name:"java",
        language:"java",
        defaultValue:"Here is some java code"
    },
    "C++":{
        name:"C++",
        language:"C++",
        defaultValue:"Here is some C++ code"
    }
}

export const CodeConverter=()=>{
    const [filename,setfilename]=useState("script.py")
    const [load,setload]=useState(false)
    const [getans,setans]=useState("")
    const [select,setselect]=useState("")
    const editorref=useRef(null)
    const file=files[filename]
    function handleeditor(editor,monaco){
        editorref.current=editor
    }
    function getvalue(){
        if(editorref.current.getValue()=='' || select==""){
            alert("Please select any Language to convert")
        }
        else{
            let obj={
                language:select,
                value:editorref.current.getValue()
            }
            console.log(obj)
            setload(true)
            axios.post("https://code-converter-5cfk.onrender.com/convert",obj)
            .then((res)=>{
                setans(res.data)
                setload(false)})
            .catch((err)=>console.log(err))
        }
    }

    function handleoutput(){
        let obj={
            value:editorref.current.getValue()
        }
        setload(true)
        axios.post("https://code-converter-5cfk.onrender.com/output",obj)
            .then((res)=>{
                setans(res.data)
                setload(false)})
            .catch((err)=>console.log(err))
    }
    function handledebug(){
        let obj={
            value:editorref.current.getValue()
        }
        setload(true)
        axios.post("https://code-converter-5cfk.onrender.com/debug",obj)
            .then((res)=>{
                setans(res.data)
                setload(false)})
            .catch((err)=>console.log(err))
    }

    function handlequality(){
        let obj={
            value:editorref.current.getValue()
        }
        setload(true)
        axios.post("https://code-converter-5cfk.onrender.com/quality",obj)
            .then((res)=>{
                setans(res.data)
                setload(false)})
            .catch((err)=>console.log(err))
    }
    return <Box background={'linear-gradient(315deg, #063465 44%, rgba(9,30,73,1) 100%)'} textAlign={'center'} color={'white'}>
        <Heading as={'h1'} padding={'1%'} fontFamily={'serif'}>Code Converter</Heading>
        
        <Box display={'flex'} justifyContent={'space-evenly'} >
            <Box w={'48%'} background={'#242323'} height={'100vh'}>
                <Box display={'flex'} >
                <button onClick={()=>setfilename("script.py")} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Switch to python</button>
                <button onClick={()=>setfilename("javascript")} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Switch to JavaScript</button>
                <button onClick={()=>setfilename("java")} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Switch to Java</button>
                <button onClick={()=>setfilename("index.html")} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Switch to HTML</button>
                <button onClick={()=>setfilename("C++")} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Switch to C++</button>

                </Box>
              

                <Editor 
                height={'90%'}
                width={'100%'}
                theme="vs-dark"
                path={file.name}
                onMount={handleeditor}
                defaultLanguage={file.language}
                defaultValue={file.defaultValue}
                />
            </Box>
            <Box  w={'48%'} height={'100vh'} overflow={'scroll'} background={'#242323'} overflowX={'hidden'}>
            <Box display={'flex'} >
                <button onClick={handleoutput} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Get Output</button>
                <button onClick={getvalue} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Convert</button>
                <select onChange={(e)=>setselect(e.target.value)}  style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>
                    <option value="">Set language to convert</option>
                    <option value="Python">Python</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Java">Java</option>
                    <option value="C">C</option>
                    <option value="C++">C++</option>
                </select>
                <button onClick={handledebug} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Debug</button>
                
                <button onClick={handlequality} style={{backgroundColor:'grey',padding:'0px 5px',border:'1px solid black'}}>Quality check</button>
                </Box>
                <h1 style={{textAlign:'left',padding:'1%',fontSize:'20px'}}>Output :</h1>
                {load?<h1 style={{textAlign:'left',padding:'2%'}}>Loading...</h1>:  <Editor
                            height={'100%'}
                            width={'100%'}
                            theme="vs-dark"
                            language="plaintext"
                            value={getans}
                            options={{
                                readOnly: true
                            }}
                        />}
               
            </Box>
        </Box>
    </Box>
}