# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Комментарий
Адаптив сказали не делать (+ в фигме его нет).\
Некоторые косяки с изображениями появились уже только после билда, уже не было времени фиксить, подумаю потом.\
Думаю описывать остальные компоненты нет особо смысла, описал только основной.

## Анимированный компонент
Самый верхний/первый блок на сайте. Проигрывает анимацию из изображений.\
Путь до компонента: `/components/Blocks/FirstBlock`\
Описание принимаемых пропсов:

```ts
interface FirstBlock {
    // ссылка на основное изображение
    // отображается до и после анимации
    mainImage: string,
    
    // ссылка на изображение-надпись поверх основного изображения
    // отображается в конце анимации
    titleImage?: string,

    // список ссылок на изображения, которые будут анимироваться
    images?: string[], 
}
```

Пример ответа от сервера с нужными для компонента данными:

```json
{
    "mainImage": "/images/main.webp",
    "titleImage": "/images/title.webp",
    "images": [
        "/images/anim/image-0.png",
        "/images/anim/image-1.png",
        "/images/anim/image-2.png",
        "/images/anim/image-3.png",
        "/images/anim/image-4.png",
        "/images/anim/image-5.png"
    ]
}
```

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
