/**
 * 
 * @param { String } method 
 * @param { String } body 
 * @param { Object } body 
 */
const request = (method,url,body) => {
  switch(method){
      case "GET":
      fetch(url).then(res=>{
          console.log(res.status)
      })
      return null;
      default:
      return "HTTP 网络请求方法错误";
  }
}

export default request;