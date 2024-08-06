// contexts/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import { axiosInstance } from '../utils/apiConfig';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            fetchMemberInfo();
        } else {
            setUserInfo(null);
        }
    }, []);

    const fetchMemberInfo = async () => {
        try {
            const response = await axiosInstance.get(`/members/info`);
            setUserInfo(response.data.data);
            console.log(response);
        } catch (error) {
            console.error('유저 정보를 가져오는데 실패했습니다.', error);
            setUserInfo(null);
        }
    };

    const fetchLogout = async () => {
        try {
            await axiosInstance.post(`/logout`);
        } catch (error) {
            console.error('로그아웃 실패', error);
        }
    };

    const login = ({ accessToken, refreshToken }) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        fetchMemberInfo();
    };

    const logout = async () => {
        const isConfirmed = window.confirm('정말 로그아웃 하시겠습니까?');
        if (isConfirmed) {
            localStorage.removeItem('provider');
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            setUserInfo(null);
            alert('로그아웃 성공!');
        } else {
            alert('로그아웃 취소');
        }
    };

    const value = {
        userInfo,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
