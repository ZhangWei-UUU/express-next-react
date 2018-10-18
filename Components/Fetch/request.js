// import {message} from 'antd';

/**
 * 
 * @param { String } method 
 * @param { String } body 
 * @param { Object } body 
 */

const get = async (url) =>{
    var response = await fetch(url);
    switch(response.status){
    case 200:
        return await response.json();
    case 404:
        return 404;
    default:
        return "系统出现未知错误";
    }
};

const post = async (url,body) =>{
    var response;
    try{
        response = await fetch(url,
            {
                method:"POST",
                credentials:"include",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify(body) 
            }
        );
        return response.json();
    }catch(e){
        throw Error("请求URL错误");
    }
    
};

const request = (method,url,body) => {
    switch(method){
    case "GET":
        return get(url).then(data=>{
            return data;
        });
    case "POST":
        return post(url,body).then(data=>{
            return data;
        });
    default:
        throw Error("网络请求方法错误");
    }
};

export default request;