import service from "@/axios/index";
import {LoginFormData} from "@/types/login";

// 登录接口
export function login(data: LoginFormData) {
    return service({
        url: `/login?username=${data.username}&password=${data.password}`,
        method: "GET"
    })
}

// 商品列表接口
export function getGoodsList(){
    return service({
        url: "/list",
        method: "POST"
    })
}

// 用户列表接口
export function getUserList(){
    return service({
        url: "/getUserList",
        method: "GET"
    })
}

// 角色列表接口
export function getRoleList(){
    return service({
        url: "/getRoleList",
        method: "GET"
    })
}

// 权限列表接口
export function getAuthorityList(){
    return service({
        url: "/getAuthorityList",
        method: "GET"
    })
}