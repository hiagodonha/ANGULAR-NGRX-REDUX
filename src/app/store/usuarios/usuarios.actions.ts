import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";

export const enum usuariosTypeAction {

    // LIST
    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
    LOAD_USUARIOS_SUCCESS = '[LOAD_USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',

    // JUST ONE
    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
    LOAD_USUARIO_SUCCESS = '[LOAD_USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
    LOAD_USUARIO_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIO FAIL',

    CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
    CREATE_USUARIO_FAIL = '[CREATE_USUARIO] CREATE USUARIO FAIL',

    UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
    UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO] UPDATE USUARIO FAIL',

    DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
    DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
    DELETE_USUARIO_FAIL = '[DELETE_USUARIO] DELETE USUARIO FAIL',
}


// LOAD USUÁRIOS
export const LoadUsuarios = createAction(
    usuariosTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSuccess = createAction(
    usuariosTypeAction.LOAD_USUARIOS_SUCCESS,
    props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFail = createAction(
    usuariosTypeAction.LOAD_USUARIOS_FAIL,
    props<{ error: string }>()
);

// LOAD USUÁRIO 
export const LoadUsuario = createAction(
    usuariosTypeAction.LOAD_USUARIO,
    props<{ payload: number }>()
);

export const LoadUsuarioSuccess = createAction(
    usuariosTypeAction.LOAD_USUARIO_SUCCESS,
    props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
    usuariosTypeAction.LOAD_USUARIO_FAIL,
    props<{ error: string }>()
);

// CREATE USUÁRIO
export const CreateUsuario = createAction(
    usuariosTypeAction.CREATE_USUARIO,
    props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCCESS,
    props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFail = createAction(
    usuariosTypeAction.CREATE_USUARIO_FAIL,
    props<{ error: string }>()
);

// UPDATE USUÁRIO

export const UpdateUsuario = createAction(
    usuariosTypeAction.UPDATE_USUARIO,
    props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
    usuariosTypeAction.UPDATE_USUARIO_SUCCESS,
    props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioFail = createAction(
    usuariosTypeAction.UPDATE_USUARIO_FAIL,
    props<{ error: string }>()
);

// DELETE USUÁRIO
export const DeleteUsuario = createAction(
    usuariosTypeAction.DELETE_USUARIO,
    props<{ payload: number }>()
);

export const DeleteUsuarioSuccess = createAction(
    usuariosTypeAction.DELETE_USUARIO_SUCCESS,
    props<{ payload: number }>()
);

export const DeleteUsuarioFail = createAction(
    usuariosTypeAction.DELETE_USUARIO_FAIL,
    props<{ error: string }>()
);
