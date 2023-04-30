export interface Character {
    name: string,
    creation: Date | string,
    occupational: Profession,
    background: string,
    health: number,
    sanity: number,
    inventory: string[],
    journal: string,
    notebook: string,
    logs: string[]
}

export interface Profession {
    name: string,
    status: {
        physical: number,
        intellectual: number,
        social: number
    }
}