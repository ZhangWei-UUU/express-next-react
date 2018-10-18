
import request from "./request";

test("测试远程服务器A邀请码PI接口", async () => {
    try{
        const data = await request("GET","https://staging.umarkcloud.com/api/auth/otp");
        expect(data.success).toBe(true);
    }catch(e){
        expect(e).toMatch("HTTP 网络请求方法错误");
    }
});

test("获取当前用户信息",async () => {
    try{
        const data = await request("GET","https://staging.umarkcloud.com/api/auth/otp");
    }catch(e){
        console.log(e);
    }
});