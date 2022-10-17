export interface SearchResult {
    image: string;
    page: string;
    width: number;
    height: number;
}
export declare class GRIS {
    private chrome;
    private protocol;
    private page;
    private DOM;
    ready: Promise<GRIS>;
    constructor();
    private getResultUrlByFile;
    private getResultUrlByUrl;
    private parsePage;
    kill(): Promise<void>;
    searchByFile(imagePath: string, page?: number): Promise<SearchResult[]>;
    searchByUrl(url: string, page?: number): Promise<SearchResult[]>;
}
