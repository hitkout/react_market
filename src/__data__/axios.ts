import axios from 'axios';
import { getConfigValue } from '@ijl/cli';

const baseApiUrl = getConfigValue('project_pcm.api');
export const pcmBhAxios = axios.create({
    baseURL: baseApiUrl,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});
