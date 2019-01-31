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

export function putJson(url: string, body?: any, headers?: string[][]) {
    return request(url, "put", body, headers).then(r => r.json());
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
        .catch(err => {
            return Promise.reject({
                status: err.response.status,
            });
        });

    return req;
};
