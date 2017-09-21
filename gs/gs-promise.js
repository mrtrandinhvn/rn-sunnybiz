require("es6-promise").polyfill();
import axios from "axios";

/**
 * A wrapper for https://github.com/mzabriskie/axios
 */
export const gsPromise = {
    /**
     * @param {object} config 
     * @return {Promise}
     */
    request: (config) => {
        return axios.request({ ...config, headers: { "__RequestVerificationToken": CSRFToken } });
    },

    /**
     * @param {string} url
     * @param {object} data will be passed to  axios's config.params
     * @param {object }config
     * @return {Promise}
     */
    get: (url, data, config) => {
        return axios.get(url, { ...config, params: data });
    },

    /**
     * @param {string} url
     * @param {data} object
     * @param {object }config
     * @return {Promise}
     */
    post: (url, data, config) => {
        return axios.post(url, data, { ...config, headers: { "__RequestVerificationToken": CSRFToken } });
    },

    put: (url, data, config) => {
        return axios.put(url, data, { ...config, headers: { "__RequestVerificationToken": CSRFToken } });

    },

    delete: (url, data, config) => {
        return axios.delete(url, { ...config, params: data, headers: { "__RequestVerificationToken": CSRFToken } });
    }
};

export const mockPromise = {
    /**
     * @param {string} url
     * @param {object} data will be returned when the promise resovles
     * @return {Promise}
     */
    get: (url, data) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data });
            }, 1000);
        });
    },
};