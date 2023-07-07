import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";
import * as fromUsuariosAction from '../usuarios/usuarios.actions';

export interface UsuarioState {
    usuarios: UsuarioModel[];
    usuario: UsuarioModel | null,
    error: string | ''
}

export const initialState: UsuarioState = {
    usuarios: [],
    usuario: null,
    error: ''
}

const _usuariosReducer = createReducer(
    initialState,
    //list
    on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({ ...state, usuarios: payload, error: '' })),
    on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({ ...state, error: error })),
    //one
    on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({ ...state, usuario: payload, error: '' })),
    on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({ ...state, error: error })),
    //create
    on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({ ...state, usuarios: [...state.usuarios, payload], error: '' })),
    on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({ ...state, error: error })),

    on(fromUsuariosAction.UpdateUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: [...state.usuarios, payload].map((row) => {
            if (row.id == payload.id) {
                return payload;
            } else {
                return row;
            }
        }),
        error: ''
    })),
    on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({ ...state, error: error })),

    on(fromUsuariosAction.DeleteUsuarioSuccess, (state, { payload }) => ({
        ...state,
        usuarios: [...state.usuarios].filter((filter) => filter.id != payload),
        error: ''
    })),
    on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({ ...state, error: error })),
)

export function usuariosReducer(state = initialState, action: Action) {
    return _usuariosReducer(state, action);
}


// selectors
const getUsuariosFeatureStatus = createFeatureSelector<UsuarioState>(
    'usuarios'
)

export const getUsuarios = createSelector(
    getUsuariosFeatureStatus,
    (state: UsuarioState) => state.usuarios
)

export const getUsuario = createSelector(
    getUsuariosFeatureStatus,
    (state: UsuarioState) => state.usuario
)

export const getUsuarioError = createSelector(
    getUsuariosFeatureStatus,
    (state: UsuarioState) => state.error
)

export const getUsuarioAdmin = createSelector(
    getUsuariosFeatureStatus,
    (state: UsuarioState) => state.usuarios.filter((filter) => filter.perfil === 'Administrador')
)