export interface InterestPoint {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    type: string;
};

export interface Reward {
    id: number;
    name: string;
    description: string;
    points: number;
    image: any;
}