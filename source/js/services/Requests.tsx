import axios from "axios";

export function get(url: string, headers?: string[][]) {
    return request(url, "get", undefined, headers);
}

export function post(url: string, body?: any, headers?: string[][]) {
    return request(url, "post", body, headers);
}

export function remove(url: string, body?: any, headers?: string[][]) {
    return request(url, "delete", body, headers);
}

export function put(url: string, body?: any, headers?: string[][]) {
    return request(url, "put", body, headers);
}

type HttpMethod = "get" | "post" | "delete" | "put";

const request = (
    url: string,
    method: HttpMethod,
    data?: any,
    headers?: string[][]
): Promise<any> => {
    const bearer = localStorage.token ? "Bearer " + localStorage.token : "";

    const req = axios(url, {
        headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
        },
        method,
        data: data !== undefined ? JSON.stringify(data) : undefined,
    })
        .then<any>(r => {
            console.log("r status", r.status);
            if (r.status >= 200 && r.status < 400) {
                return Promise.resolve(r);
            } else {
                return Promise.reject({
                    status: r.status,
                });
            }
        })
        .catch(error => {
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                return Promise.reject(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                return Promise.reject(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
                return Promise.reject(error.request);
            }
        });

    return req;
};
