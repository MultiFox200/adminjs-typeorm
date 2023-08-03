import { Filter } from 'adminjs';
import { FindOptionsWhere } from 'typeorm';
export declare const convertFilter: <T>(filterObject?: Filter) => FindOptionsWhere<T>;
