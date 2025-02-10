export const BASE_URL: string = import.meta.env.VITE_BACKEND_URL
export const GET_CANDIDATES: string = `${BASE_URL}/candidates`
export const GET_CANDIDATE: string = `${BASE_URL}/candidate/`
export const ADD_CANDIDATE: string = `${BASE_URL}/candidate`
export const PARSE_CANDIDATE: string = `${BASE_URL}/candidate/parse`
export const REGISTRATION: string = `${BASE_URL}/auth/register`
export const AUTORIZATION: string = `${BASE_URL}/auth/login`
export const FORGOT: string = `${BASE_URL}/auth/forgot`
export const USER: string = `${BASE_URL}/employee`


