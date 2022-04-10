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
}
export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
}
