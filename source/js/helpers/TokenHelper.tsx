export const setToken = idToken => {
    localStorage.setItem("token", idToken);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const removeToken = () => {
    localStorage.removeItem("token");
};
