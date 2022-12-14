import React, { useState } from 'react';
import { NFTStorage, File } from 'nft.storage'
import "./Uploader.css"
import mime from 'mime';
import fs from 'fs';
import path from 'path';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Uploader = () => {

    const [filePath, setFilePath] = React.useState(null);
    const[name,setName]=useState('');
    const[url,setUrl]=useState(null);
    const[ipfsimage,setIpfsimage]=useState(null);
    const[description,setDescription]=useState('');
    const[trait,setTrait]=useState('');
    const[value,setValue]=useState('');
    const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGM0QThkRENiMGM1MjQwQTJDYjdBMzIwZGRGMDg5QUJhMERDNDVDZkYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MjE5NTgzMzEwMywibmFtZSI6InRwZyJ9.ncleHk0ziyvHC-8RSKo07nxdgJ9OidmguX_YzX-L0p4'

    const diffToast = () => {
        toast.success('🦄 Uploading to ipfs!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const storeNFT=async(filePath,name,description)=>{

        console.log(filePath instanceof File)
        const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

        var res = await nftstorage.store({
            image : filePath,
            name : name,
            description : description,
            atttributes : [{
                "trait_type" : trait,
                "value": value
            }]
        })

        console.log(res)
        setUrl(res.url)
        setIpfsimage("https://ipfs.io/ipfs/"+(res.data.image.href).slice(7))
    }

    return ( 
        <div className='box'>
        
            <div className='details'>
                <div className='inputBox custom-file-input file'>
                <input type={'file'} onChange={(e)=>setFilePath(e.target.files[0])} className='custom-file-input mt-2' />
                </div>
                <div className='inputBox custom-file-input'>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Enter NFT Name" className='custom-file-input mt-2' /> 
                </div>
                <div className='inputBox custom-file-input'>
                <input onChange={(e)=>setDescription(e.target.value)} placeholder="Enter description" className='custom-file-input mt-2' />
                </div>
                <div className='inputBox custom-file-input'>
                <input onChange={(e)=>setTrait(e.target.value)} placeholder="Enter Trait Type" className='custom-file-input mt-2' />
                </div>

                <div className='inputBox custom-file-input'>
                <input onChange={(e)=>setValue(e.target.value)} placeholder="Enter Value" className='custom-file-input mt-2' />
                </div>

                <div className='button'>
                <button onClick={(event)=>[storeNFT(filePath,name,description), diffToast()]} className='btn btn-primary btn-block mt-4' >Upload to IPFS</button>
                </div>

                <ToastContainer />
            </div>

            <div className='getdetails'>
                <label className='geturl'>Metadata : {url}</label>
                {<img src={ipfsimage} width='30%' />}
            </div>
        
    </div>

     );
}
 
export default Uploader;