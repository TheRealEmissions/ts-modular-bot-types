import "reflect-metadata";
import { Dependency } from "./Dependency.js";
import HeadFile from "../classes/FileDesign/Base.js";
export interface InjectWith {
    injectWith: Dependency | null;
}
export declare const vars: Map<Dependency, [HeadFile, string][]>;
export declare function inject(type: Dependency): (target: any, key: string) => void;
