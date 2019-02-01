import jwtDecode from "jwt-decode";

export const setAuthToken = idToken => {
    localStorage.setItem("token", idToken);
};

export const getAuthToken = () => {
    return localStorage.getItem("token");
};

export const removeAuthToken = () => {
    localStorage.removeItem("token");
};

export const setUserPno = pno => {
    localStorage.setItem("pno", pno);
};

export const getUserPno = () => {
    return localStorage.getItem("pno");
};

export const removeUserPno = () => {
    localStorage.removeItem("pno");
};

export const validateToken = (token: string): boolean => {
    const tokenExpiration = jwtDecode(token).exp;

    if (tokenExpiration && checkIfTokenExpired(tokenExpiration) === false) {
        return true;
    }

    // if token is invalid it is removed.
    removeAuthToken();
    return false;
};

const checkIfTokenExpired = (tokenExpiration: number) => {
    let isExpiredToken = false;
    const seconds = 1000;
    const d = new Date();
    const t = d.getTime();

    if (tokenExpiration < Math.round(t / seconds)) {
        isExpiredToken = true;
    }

    return isExpiredToken;
};
