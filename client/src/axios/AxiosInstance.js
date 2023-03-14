import axios from "axios"

function getLocalAccessToken() {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) return accessToken
    return process.env.REACT_APP_ACCESS_TOKEN
}

function accessToken() {
    return "" // todo get access token request
}

const axiosInstance = axios.create({
    baseURL: "envs.API_BASE_URL",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getLocalAccessToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                try {
                    const rs = await accessToken();
                    const { access_token, refresh_token } = rs.data;
                    localStorage.setItem("accessToken", access_token);
                    localStorage.setItem("refreshToken", refresh_token);
                    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
                    return axiosInstance(originalConfig);
                } catch (_error) {
                    if (_error.response && _error.response.data) {
                        return Promise.reject(_error.response.data);
                    }
                    return Promise.reject(_error);
                }
            }

            if (err.response.status === 403 && err.response.data) {
                return Promise.reject(err.response.data);
            }
        }

        return Promise.reject(err);
    }
);

export default axiosInstance
