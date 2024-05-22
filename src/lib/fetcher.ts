import appAxios from './axios';

const fetcher = (url: string) => appAxios.get(url).then((res) => res.data);
export default fetcher;
