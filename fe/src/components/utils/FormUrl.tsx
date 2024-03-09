import { IKeyValueCheckProps } from "../Headers_dropdown";

export interface IFormURL {
    BASE_URL: string;
    req: string;
    method: string;
    headers: IKeyValueCheckProps[]; 
}

export default function FormUrl(props: IFormURL) {
    const hdrs = `{${props.headers.map(
        (header) => `"${header.key}":"${header.value}"` 
    ).join(",")}}`
    const val = `${props.BASE_URL}req=${props.req}&method=${props.method}&header=${hdrs}`
    return (
        <span onClick={e => navigator.clipboard.writeText(val)} className="cursor-pointer">
            {val}
        </span>
    )

}