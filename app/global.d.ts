/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.css';
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}