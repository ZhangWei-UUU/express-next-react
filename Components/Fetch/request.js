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
      return "没有发现当前文章";
      default:
      return "系统出现未知错误"
  }
}
const request = (method,url,body) => {
    console.log(method);
  switch(method){
    
      case "GET":
      get(url).then(data=>{
        return data;
      })
      default:
      return "HTTP 网络请求方法错误";
  }
}

export default request;