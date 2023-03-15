export declare const BASE_PATH: string;
/**
 * This is the base class for all generated API classes.
 */
export declare class BaseAPI {
    protected configuration: Configuration;
    private middleware;
    constructor(configuration?: Configuration);
    withMiddleware<T extends BaseAPI>(this: T, ...middlewares: Middleware[]): T;
    withPreMiddleware<T extends BaseAPI>(this: T, ...preMiddlewares: Array<Middleware['pre']>): T;
    withPostMiddleware<T extends BaseAPI>(this: T, ...postMiddlewares: Array<Middleware['post']>): T;
    protected request(context: RequestOpts, initOverrides?: RequestInit): Promise<Response>;
    private createFetchParams;
    private fetchApi;
    /**
     * Create a shallow clone of `this` by constructing a new instance
     * and then shallow cloning data members.
     */
    private clone;
}
export declare class RequiredError extends Error {
    field: string;
    name: "RequiredError";
    constructor(field: string, msg?: string);
}
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
export declare type FetchAPI = WindowOrWorkerGlobalScope['fetch'];
export interface ConfigurationParameters {
    basePath?: string;
    fetchApi?: FetchAPI;
    middleware?: Middleware[];
    queryParamsStringify?: (params: HTTPQuery) => string;
    username?: string;
    password?: string;
    apiKey?: string | ((name: string) => string);
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string | Promise<string>);
    headers?: HTTPHeaders;
    credentials?: RequestCredentials;
}
export declare class Configuration {
    private configuration;
    constructor(configuration?: ConfigurationParameters);
    get basePath(): string;
    get fetchApi(): FetchAPI | undefined;
    get middleware(): Middleware[];
    get queryParamsStringify(): (params: HTTPQuery) => string;
    get username(): string | undefined;
    get password(): string | undefined;
    get apiKey(): ((name: string) => string) | undefined;
    get accessToken(): ((name?: string, scopes?: string[]) => string | Promise<string>) | undefined;
    get headers(): HTTPHeaders | undefined;
    get credentials(): RequestCredentials | undefined;
}
export declare type Json = any;
export declare type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | 'HEAD';
export declare type HTTPHeaders = {
    [key: string]: string;
};
export declare type HTTPQuery = {
    [key: string]: string | number | null | boolean | Array<string | number | null | boolean> | HTTPQuery;
};
export declare type HTTPBody = Json | FormData | URLSearchParams;
export declare type ModelPropertyNaming = 'camelCase' | 'snake_case' | 'PascalCase' | 'original';
export interface FetchParams {
    url: string;
    init: RequestInit;
}
export interface RequestOpts {
    path: string;
    method: HTTPMethod;
    headers: HTTPHeaders;
    query?: HTTPQuery;
    body?: HTTPBody;
}
export declare function exists(json: any, key: string): boolean;
export declare function querystring(params: HTTPQuery, prefix?: string): string;
export declare function mapValues(data: any, fn: (item: any) => any): {};
export declare function canConsumeForm(consumes: Consume[]): boolean;
export interface Consume {
    contentType: string;
}
export interface RequestContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
}
export interface ResponseContext {
    fetch: FetchAPI;
    url: string;
    init: RequestInit;
    response: Response;
}
export interface Middleware {
    pre?(context: RequestContext): Promise<FetchParams | void>;
    post?(context: ResponseContext): Promise<Response | void>;
}
export interface ApiResponse<T> {
    raw: Response;
    value(): Promise<T>;
}
export interface ResponseTransformer<T> {
    (json: any): T;
}
export declare class JSONApiResponse<T> {
    raw: Response;
    private transformer;
    constructor(raw: Response, transformer?: ResponseTransformer<T>);
    value(): Promise<T>;
}
export declare class VoidApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<void>;
}
export declare class BlobApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<Blob>;
}
export declare class TextApiResponse {
    raw: Response;
    constructor(raw: Response);
    value(): Promise<string>;
}
/** CUSTOM STARTS HERE! **/
/**
 * When the rest client raises an error, the Error's message would be a json string of this format:
 */
export declare class RestClientCallError extends Error {
    readonly statusCode: number;
    readonly statusMessage: string;
    readonly body: string;
    constructor(message: string, statusCode: number, statusMessage: string, body: string);
}
export declare class RestClientUtils {
    static getErrorFromFetchResponse(error: Response): Promise<RestClientCallError>;
}
