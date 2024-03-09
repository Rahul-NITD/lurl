export interface IFormURL {
    BASE_URL: string;
    req: string;
    method: string;
}

export default function FormUrl(props: IFormURL) {
    const val = `${props.BASE_URL}req=${props.req}&method=${props.method}`
    return (
        <span onClick={e => navigator.clipboard.writeText(val)} className="cursor-pointer">
            {val}
        </span>
    )

}