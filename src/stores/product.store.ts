import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  gender: 'men' | 'women' | 'unisex';
}

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([
    // Men
    {
      id: 1,
      name: '남성 베이직 티셔츠',
      price: 19000,
      description: '편안한 착용감의 기본 티셔츠',
      image: 'https://via.placeholder.com/300x300?text=Men+T-Shirt',
      category: 'top',
      gender: 'men',
    },
    {
      id: 2,
      name: '남성 슬림핏 청바지',
      price: 49000,
      description: '스타일리시한 슬림핏 데님 팬츠',
      image: 'https://via.placeholder.com/300x300?text=Men+Jeans',
      category: 'bottom',
      gender: 'men',
    },
    {
      id: 3,
      name: '남성 오버핏 후드',
      price: 59000,
      description: '트렌디한 오버핏 후드 티셔츠',
      image: 'https://via.placeholder.com/300x300?text=Men+Hoodie',
      category: 'top',
      gender: 'men',
    },
    {
      id: 4,
      name: '남성 린넨 셔츠',
      price: 39000,
      description: '시원한 소재의 여름 셔츠',
      image: 'https://via.placeholder.com/300x300?text=Men+Shirt',
      category: 'top',
      gender: 'men',
    },
    {
      id: 5,
      name: '남성 카고 바지',
      price: 55000,
      description: '수납이 편리한 카고 팬츠',
      image: 'https://via.placeholder.com/300x300?text=Men+Cargo',
      category: 'bottom',
      gender: 'men',
    },

    // Women
    {
      id: 6,
      name: '여성 플로럴 원피스',
      price: 69000,
      description: '화사한 꽃무늬 패턴의 원피스',
      image: 'https://via.placeholder.com/300x300?text=Women+Dress',
      category: 'dress',
      gender: 'women',
    },
    {
      id: 7,
      name: '여성 크롭 티셔츠',
      price: 25000,
      description: '트렌디한 기장의 크롭 티셔츠',
      image: 'https://via.placeholder.com/300x300?text=Women+Crop',
      category: 'top',
      gender: 'women',
    },
    {
      id: 8,
      name: '여성 와이드 슬랙스',
      price: 45000,
      description: '편안하고 멋스러운 와이드 핏 슬랙스',
      image: 'https://via.placeholder.com/300x300?text=Women+Slacks',
      category: 'bottom',
      gender: 'women',
    },
    {
      id: 9,
      name: '여성 니트 가디건',
      price: 52000,
      description: '포근한 느낌의 니트 가디건',
      image: 'https://via.placeholder.com/300x300?text=Women+Cardigan',
      category: 'outer',
      gender: 'women',
    },
    {
      id: 10,
      name: '여성 데님 스커트',
      price: 35000,
      description: '캐주얼한 무드의 데님 스커트',
      image: 'https://via.placeholder.com/300x300?text=Women+Skirt',
      category: 'bottom',
      gender: 'women',
    },

    // Unisex / Accessories
    {
      id: 11,
      name: '공용 볼캡',
      price: 15000,
      description: '심플한 디자인의 볼캡',
      image: 'https://via.placeholder.com/300x300?text=Cap',
      category: 'accessories',
      gender: 'unisex',
    },
    {
      id: 12,
      name: '캔버스 백팩',
      price: 45000,
      description: '튼튼한 캔버스 소재의 백팩',
      image: 'https://via.placeholder.com/300x300?text=Backpack',
      category: 'accessories',
      gender: 'unisex',
    },
  ]);

  const getProductById = (id: number) => {
    return products.value.find((p) => p.id === id);
  };

  return {
    products,
    getProductById,
  };
});
