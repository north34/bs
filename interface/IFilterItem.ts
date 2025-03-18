export interface IFilterItem {
    type: EFilterType,
    value: string,
    key?: string,
    placeholder?: string,
    items?: {
        key: string | number,
        value: string,
    }[],
}

export enum EFilterType {
    Select = 'select',
    Button = 'button',
}
