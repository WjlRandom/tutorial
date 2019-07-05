import axios from "axios";
const baseUrl = "http://127.0.0.1:3333";
axios.defaults.withCredentials = true;
window.axios = axios;
export function login(params) {
    return axios.post(`${baseUrl}/loginSystem`, params);
}

export function uploadByAjax(params) {
    return axios.post(`${baseUrl}/uploadByAjax`, params);
}

export function uploadMulti(params) {
    return axios.post(`${baseUrl}/uploadMulti`, params);
}

export function uploadBase(params) {
    return axios.post(`${baseUrl}/uploadByBase`, params);
}
export function logout() {
    return axios.post(`${baseUrl}/logout`);
}
export function deleteImg(params) {
    return axios.post(`${baseUrl}/deleteFileFromDir`, params);
}

export function upload(params) {
    return axios.post(`${baseUrl}/upload`, params);
}