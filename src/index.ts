import {AxiosRequestConfig} from './types/dateInterface'
import {xhr} from './xhr'
function axios(config: AxiosRequestConfig) {
    xhr(config)
}
export {axios}