export default defineEventHandler(() => [
    {
        block: 'FirstBlock',
        data: {
            mainImage: '/images/main.webp',
            titleImage: '/images/title.webp',
            images: [
                '/images/anim/image-0.png',
                '/images/anim/image-1.png',
                '/images/anim/image-2.png',
                '/images/anim/image-3.png',
                '/images/anim/image-4.png',
                '/images/anim/image-5.png',
            ],
        },
    },

    {
        block: 'Filter',
        data: {
            items: [
                {
                    type: 'select',
                    key: 'house',
                    value: 'Дом',
                    placeholder: 'Все дома',
                    items: [
                        /* */
                    ],
                },

                {
                    type: 'select',
                    key: 'rooms',
                    value: 'Комнатность',
                    placeholder: '1 комната',
                    items: [
                        /* */
                    ],
                },

                {
                    type: 'select',
                    key: 'size',
                    value: 'Площадь',
                    placeholder: '30-40 м²',
                    items: [
                        /* */
                    ],
                },

                {
                    type: 'button',
                    value: '126 квартир',
                },
            ],
        },
    },
]);
