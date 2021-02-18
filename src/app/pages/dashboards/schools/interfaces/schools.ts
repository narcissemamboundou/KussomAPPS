export interface Schools {
    id: number;
    imageSrc: string;
    cycle_length: number;
    videoSrc: string;
    name: string;
    city: string;
    average_scost: number;
    inscription_cost: number;
    pro_opportunity: Array<Opportunity>;
    type: string;
    selected: boolean;
    starred: boolean;
}
export interface Opportunity {
    id: number;
    name: string;

}
