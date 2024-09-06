import { ComponentBase } from "../types/component-base.type";

export type PriceProps = Omit<ComponentBase, 'isdisabled' | 'varient'> & {
    price?: number;
    text?: string;
}