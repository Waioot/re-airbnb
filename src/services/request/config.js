// 开发环境还是vercel 环境
const VERCEL = process.env.REACT_APP_VERCEL;
const BASE_URL = VERCEL === 'true' ? '/api' : process.env.REACT_APP_BASE_URL;
const TIMEOUT = 10000;

export { BASE_URL, TIMEOUT };
