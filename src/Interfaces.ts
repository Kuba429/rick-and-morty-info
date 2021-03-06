export interface Response {
    info: Info;
    results: Character[];
}
export interface Info {
    count: number;
    next: string;
    prev: string;
    pages: number;
}
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    url: string;
    gender: string;
    location: {
        name: string;
        url: string;
    }[];
}
export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
}
export interface Location {
    id: number;
    dimension: string;
    name: string;
    residents: Character[];
    type: string;
    url: string;
}
