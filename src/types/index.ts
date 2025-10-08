// src/types/index.ts

export interface Party {
  id: number;
  name: string;
  subtitle: string;
  image: string;
  users: string[];
}

export interface ContinueWatchingItem {
  id: number;
  title: string;
  progress: string;
  image: string;
}

export interface User {
  id: number;
  image: string;
  alt: string;
}