module.exports = Object.freeze({
  ///////////
  // COMÚN //
  ///////////
  BUTTON_BACK_TEXT: '< Volver',

  ///////////
  // PATHS //
  ///////////

  // COMUNES
  HOME_PATH: '/home',
  LOGIN_PATH: '/log-in',
  SIGNUP_PATH: '/sign-up',
  ROOT_PATH: '/',

  // RESTO
  ADVERTS_PATH: '/adverts',
  USERS_PATH: '/users',

  // FORM VALIDATIONS
  EMPTY_ERROR_FORM_VALIDATION: 'Las contraseñas han de coincidir.',
  LENGTH_ERROR_FORM_VALIDATION: 'Número de caracteres insuficiente.',
  PASSWORD_ERROR_FORM_VALIDATION: 'Las contraseñas han de coincidir',

  ////////////
  // MODELS //
  ////////////
  MODELS: {
    // USERS
    USER: {
      FIELDS : {
        EMAIL: 'Email',
        FIRST_NAME: 'Nombre',
        LAST_NAME: 'Apellido',
        TELEPHONE: 'Teléfono',
        USERNAME: 'Nombre de usuario',
        ROLE: 'Rol',
      },
    },
  },

  ///////////
  // VIEWS //
  ///////////
  VIEWS : {
    // REGISTRARSE
    SIGNUP: {
      TITLE: 'Crear cuenta',
      FORM: {
        TITLE: 'Usuario',
        FIELD_OK: 'Parece correcto!',
      },
    },
    // USER
    USER: {
      FORM: {
        TITLE: 'Usuario',
        FIELD_OK: 'Parece correcto!',
        ERRORS: {
          TELEPHONE_REQUIRED: 'Teléfono es obligatorio',
          USERNAME_REQUIRED: 'Nombre de usuario es obligatorio',
        }
      },
      INDEX: {
        TITLE: 'Mi perfil',
      },
    },
    // COMUNES
    COMMON: {
      // BOTONES
      BUTTONS : {
        EDIT: 'Editar',
        NEW: 'Nuevo',
        DELETE: 'Eliminar',
        SAVE: 'Guardar',
        UPDATE: 'Actualizar',
        LOG_OUT: 'Cerrar sesión',
        EDIT_PROFILE: 'Editar perfil',
        CONTACT: 'Contactar con el anunciante',
      },
    },
  },
});