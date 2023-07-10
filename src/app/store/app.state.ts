import { ActionReducerMap } from "@ngrx/store";
import { UsuarioState, usuariosReducer } from "./usuarios/usuarios.reducer";
import { UsuariosEffects } from "./usuarios/usuarios.effects";

export interface AppState {
    usuarios: UsuarioState
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer
}

export const appEffects = [
    UsuariosEffects
]