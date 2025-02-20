// src/derivAPI.js
import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic';
import WebSocket from 'ws';

const connection = new WebSocket(process.env.REACT_APP_DERIV_API_URL);
const api = new DerivAPIBasic({ connection });

export default api;
