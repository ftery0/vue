import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; 

export interface LoginData {
  userId: string;
  password: string;
}

export interface RegisterData {
  email: string;
  userId: string;
  password: string;
  name: string;
}

export interface User {
  id: string;
  userId: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

class AuthService {
  // 회원가입
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, data);
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || '회원가입에 실패했습니다.',
      );
    }
  }

  // 일반 로그인
  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, data, {
        withCredentials: true, // 쿠키 포함
      });
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || '로그인에 실패했습니다.',
      );
    }
  }

  // 구글 로그인 (임시 비활성화)
  googleLogin(): void {
    // window.location.href = `${API_BASE_URL}/auth/google`;
    console.log('Google login is temporarily disabled');
  }

  // 로그아웃
  async logout(): Promise<AuthResponse> {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/logout`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.message || '로그아웃에 실패했습니다.',
      );
    }
  }

  // 로그인 상태 확인
  async checkAuthStatus(): Promise<{ authenticated: boolean; user?: User }> {
    try {
      const response = await axios.get(`${API_BASE_URL}/auth/me`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      return { authenticated: false };
    }
  }
}

export default new AuthService();
