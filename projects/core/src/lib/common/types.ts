export interface Dictionary<T> {
    [Key: string]: T;
}
export interface Theme {
    name: string;
    class: string;
    properties: any;
  }