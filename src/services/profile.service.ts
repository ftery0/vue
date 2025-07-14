import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export interface Profile {
  _id: string;
  userId: string;
  email: string;
  name: string;
  nickname?: string;
  bio?: string;
  profileImage?: string;
  followers: string[];
  following: string[];
}

export interface Post {
  _id: string;
  author: string;
  content: string;
  image?: string;
  createdAt: string;
}

class ProfileService {
  // 내 프로필 조회
  async getMyProfile() {
    const res = await axios.get(`${API_BASE_URL}/user/me`, {
      withCredentials: true,
    });
    return res.data;
  }

  // 내 프로필 수정
  async updateMyProfile(data: {
    nickname?: string;
    bio?: string;
    profileImage?: string;
  }) {
    const res = await axios.put(`${API_BASE_URL}/user/me`, data, {
      withCredentials: true,
    });
    return res.data;
  }

  // 특정 유저 프로필 조회
  async getUserProfile(id: string) {
    const res = await axios.get(`${API_BASE_URL}/user/${id}`);
    return res.data;
  }

  // 게시물 리스트 (샘플)
  async getUserPosts(userId: string) {
    // 실제 API가 있다면 아래를 사용
    // const res = await axios.get(`${API_BASE_URL}/post/user/${userId}`);
    // return res.data;
    // 샘플 데이터 반환
    return [
      {
        _id: '1',
        author: userId,
        content: '첫 번째 게시물',
        createdAt: '2024-07-09',
      },
      {
        _id: '2',
        author: userId,
        content: '두 번째 게시물',
        createdAt: '2024-07-08',
      },
    ];
  }
}

export default new ProfileService();
