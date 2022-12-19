import axios from "axios";

export interface NetWorkUtilProps {
   method: "get" | "put" | "post",
   url: string,
   dataToPass?: any,
   headers?: any 
}
async function getCall(url:string, headers: any ){
    let resp = await axios.get(url, headers).then((resp: any)=> resp).catch((error: any) => error)
    return resp
}
async function postCall(url:string, headers: any, dataToPass:any){
    let resp = await axios.post(url, dataToPass, headers).then((resp: any)=> resp).catch((error: any) => error)
    return resp
}
async function putCall(url:string, headers: any, dataToPass:any){
    let resp = await axios.post(url, dataToPass, headers).then((resp: any)=> resp).catch((error: any) => error)
    return resp
}

export default function NetworkUtil(props:NetWorkUtilProps){
    const {method, url, dataToPass, headers} = props
    switch(method){
        case "get":{
            if(url){
                return getCall(url, headers ? headers : {})
            }
            break
        }
        case "post" :{
            if(url){
                return postCall(url, headers ? headers : {}, dataToPass ? dataToPass : {})
            }
            break
        }
        case "put" :{
            if(url){
                return putCall(url, headers ? headers : {}, dataToPass ? dataToPass : {})
            }
            break
        }
        default:{
            if(method)
            return 
        }
        }
    }