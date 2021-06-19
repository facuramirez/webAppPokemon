export const POKEMON_CREATE = "POKEMON_CREATE";

export function modifyHome(boolean){
    return { type: POKEMON_CREATE, payload: boolean }
}