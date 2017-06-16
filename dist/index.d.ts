export declare type attrs = {
    [key: string]: string;
};
declare function createScript(url: string, attrs?: attrs): Promise<{}>;
export default createScript;
