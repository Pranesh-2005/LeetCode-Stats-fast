interface Config {
    username: string;
    site: "us" | "cn";
    width: number;
    height: number;
    css: string[];
    extensions: ExtensionInit[];
    colors?: string[];
    [key: string]: any;
}
type Extension = (generator: Generator, data: FetchedData, body: Record<string, (...args: unknown[]) => Item$1>, styles: string[]) => Promise<void> | void;
type ExtensionInit = (generator: Generator) => Promise<Extension> | Extension;
interface FetchedData {
    profile: {
        username: string;
        realname: string;
        about: string;
        avatar: string;
        skills: string[];
        country: string;
    };
    problem: {
        easy: {
            solved: number;
            total: number;
        };
        medium: {
            solved: number;
            total: number;
        };
        hard: {
            solved: number;
            total: number;
        };
        ranking: number;
    };
    submissions: {
        title: string;
        lang: string;
        time: number;
        status: string;
        id: string;
        slug: string;
    }[];
    contest?: {
        rating: number;
        ranking: number;
        badge: string;
    };
    [key: string]: unknown;
}
interface Item$1 {
    type: string;
    attr: Record<string, string[] | string | number>;
    style: Record<string, string | number>;
    single?: boolean;
    children?: Item$1[];
    content?: string;
}

declare class Item implements Item$1 {
    type: string;
    attr: Record<string, string[] | string | number>;
    style: Record<string, string | number>;
    single?: boolean;
    children?: Item[];
    content?: string;
    constructor(type?: string, { id, attr, style, single, children, content, }?: {
        id?: string;
        attr?: Record<string, string[] | string | number>;
        style?: Record<string, string | number>;
        single?: boolean;
        children?: Item[];
        content?: string;
    });
    stringify(): string;
    css(): string;
}

declare class Generator {
    verbose: boolean;
    config: Config;
    cache?: Cache;
    headers: Record<string, string>;
    fetches: Record<string, Promise<FetchedData>>;
    constructor(cache?: Cache, headers?: Record<string, string>);
    generate(config: Config): Promise<string>;
    protected fetch(username: string, site: "us" | "cn", headers: Record<string, string>): Promise<FetchedData>;
    protected _fetch(username: string, site: "us" | "cn", headers: Record<string, string>, cache_key: string): Promise<FetchedData>;
    protected body(): Record<string, (...args: any[]) => Item>;
    protected hydrate(data: FetchedData, body: Record<string, (...args: unknown[]) => Item>, extensions: Extension[]): Promise<string>;
    log(...args: unknown[]): void;
}

declare function ActivityExtension(): Extension;

declare function AnimationExtension(): Extension;

declare function ContestExtension(generator: Generator): Promise<Extension>;

declare function FontExtension(generator: Generator): Promise<Extension>;

declare function HeatmapExtension(generator: Generator): Promise<Extension>;

declare function RemoteStyleExtension(generator: Generator): Promise<Extension>;

interface Theme {
    palette: {
        bg?: string[];
        text?: string[];
        color?: string[];
    };
    css: string;
    extends?: Item;
}
declare function Theme(theme: Partial<Theme>): Theme;

declare const supported: Record<string, Theme>;
declare function ThemeExtension(): Extension;

/**
 * Generate a card.
 * @param config The configuration of the card
 * @returns The card (svg)
 */
declare function generate(config: Partial<Config>): Promise<string>;

export { ActivityExtension, AnimationExtension, type Config, ContestExtension, FontExtension, Generator, HeatmapExtension, RemoteStyleExtension, ThemeExtension, generate as default, generate, supported };
