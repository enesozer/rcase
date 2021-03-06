import {ResponseBody} from '../models/response-body'
import {errorHandler} from '../utils/error-handle'
export class ApiBase{
    constructor(){
        
    }
    get(root,url,params){
        
        if(params){

        }else{
            params={}
        }
        
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
            }
        };
        return fetch(root+url,requestOptions).then(res=>{
            
            return res.json();

        })
        .catch(err=>{
            errorHandler(err);
        })
    }
    post(root,url,params,body){
        
        if(params){

        }else{
            params={}
        }
        
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        };
        return fetch(root+url,requestOptions).then(res=>{
            
            return res.json();

        })
        .catch(err=>{
            errorHandler(err);
        })
    }
}