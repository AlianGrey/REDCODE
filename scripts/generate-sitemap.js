import { readFile, writeFile } from 'fs/promises';

const domain = 'https://redcode.ru';

// Читаем файл с проектами
const projectsFile = await readFile('./src/data/projects.js', 'utf-8');

// Находим все значения slug: '...'
const projectSlugs = [
    ...projectsFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)
].map(match => match[1]);

// Основные страницы сайта
const pages = [
    '/',
    '/services',
    '/about',
    '/portfolio',
    '/contact',
];

// Объединяем основные страницы и страницы проектов
const urls = [
    ...pages,
    ...projectSlugs.map(slug => `/projects/${slug}`),
];

// Создаём sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `    <url>
            <loc>${domain}${url}</loc>
        </url>`).join('\n')}
    </urlset>
`;

// Записываем sitemap в папку public
await writeFile('./public/sitemap.xml', sitemap, 'utf-8');

console.log(`✓ sitemap.xml создан`);
console.log(`✓ Найдено проектов: ${projectSlugs.length}`);