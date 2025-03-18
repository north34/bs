export interface IMenuItem {
    name: string,
    type: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link',
    callback: VoidFunction,
    icon?: boolean,
    class?: string | object,
}
