import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tsconfig from './tsconfig.json';

// Путь к папке src
const SRC_PATH = path.resolve(__dirname, 'src');

// Функция для парсинга алиасов из tsconfig.json
const parseTsConfigPaths = (paths: Record<string, string[]>): Record<string, string> => {
  const viteAliases: Record<string, string> = {};

  Object.entries(paths).forEach(([alias, paths]) => {
    // Убираем звездочку (*) из пути
    const aliasPath = paths[0].replace('/*', '');

    // Создаем абсолютный путь
    viteAliases[alias.replace('/*', '')] = path.join(SRC_PATH, aliasPath);
  });

  return viteAliases;
};



// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: parseTsConfigPaths(tsconfig.compilerOptions.paths),
  },
})
