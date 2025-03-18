import type { IMenuItem, IPromo } from "~/interface";

export const logo: string = '/images/logo.webp';

export const menuItems: IMenuItem[] = [
    {
        name: 'Заказать звонок',
        type: 'link',
        callback: () => {},
    },
    {
        name: 'Выбрать квартиру',
        type: 'link',
        icon: true,
        class: 'underline hover:no-underline',
        callback: () => {},
    }
];

export const promo: IPromo = {
    badge: 'Акция',
    text: 'Квартиры месяца со скидкой -30%',
};
