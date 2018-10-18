import fetch from "isomorphic-fetch";

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

const request = (method,url,body)=> {
    switch(method){
    case "GET":
        return get(url).then(data=>{
            return data;
        });
    default:
        return "HTTP 网络请求方法错误";
    }
};

export default request;