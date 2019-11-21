export interface Dictionary<T> {
    [Key: string]: T;
}
export interface Theme {
    name: string;
    class: string;
    properties: any;
}

export const THEME_TOKEN = "THEME";
export const CONFIG_TOKEN = "CONFIG";