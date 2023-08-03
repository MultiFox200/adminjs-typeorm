import { BaseRecord, BaseResource, Filter } from 'adminjs';
import { DataSource } from 'typeorm';
import { Property } from './Property.js';
type ParamsType = Record<string, any>;
interface Model {
    new (): object;
}
export type ResourceDefinition = {
    model: Model;
    dataSource: DataSource;
};
export declare class Resource extends BaseResource {
    static validate: any;
    private definition;
    private propsObject;
    constructor(definition: ResourceDefinition);
    private get repository();
    databaseName(): string;
    databaseType(): string;
    name(): string;
    id(): string;
    idName(): string;
    properties(): Array<Property>;
    property(path: string): Property;
    count(filter: Filter): Promise<number>;
    find(filter: Filter, params: any): Promise<Array<BaseRecord>>;
    findOne(id: string | number): Promise<BaseRecord | null>;
    findMany(ids: Array<string | number>): Promise<Array<BaseRecord>>;
    create(params: Record<string, any>): Promise<ParamsType>;
    update(pk: string | number, params?: any): Promise<ParamsType>;
    delete(pk: string | number): Promise<any>;
    private prepareProps;
    /** Converts params from string to final type */
    private prepareParams;
    validateAndSave(instance: object): Promise<any>;
    static isAdapterFor(args?: Partial<ResourceDefinition>): boolean;
}
export {};
