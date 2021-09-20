export declare type PositionData = {
    lat: number;
    lng: number;
    weight: number;
}[];
export declare type PositionMeta = {
    gps: {
        latitude: number;
        longitude: number;
    };
}[];
export interface HeatmapData {
    positions: {
        lat: number;
        lng: number;
        weight?: number;
    }[];
    options: {
        radius?: number;
        opacity?: number;
    };
}
