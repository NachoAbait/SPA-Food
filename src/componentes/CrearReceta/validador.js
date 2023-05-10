export function validate(input) {
  const errors = {};

  //-----------------------------  NOMBRE  -----------------------------------

  if (!input.nombre) errors.nombre = "El nombre es requerido";
  else if (input.nombre.search(/^[a-zA-Z\s]*$/)) {
    errors.nombre = "El nombre no admite numeros ni simbolos";
  }

  //-----------------------------  IMG -----------------------------------
  else if (!input.img) errors.img = "La imagen es requerida";
  else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(input.img)) {
    errors.img = "Por favor inserte la URL de la imagen";
  }

  //------------------------------  SALUDABLE  ---------------------------------
  else if (!input.saludable)
    errors.saludable = "El nivel saludable es requerido";
  else if (!/^[0-9]\d*(.\d+)?$/.test(input.saludable)) {
    errors.saludable = "Solo acepta numeros";
  } else if (input.saludable < 1 || input.saludable > 99) {
    errors.saludable = "Debe ser un valor entre 1 y 100";
  }

  //------------------------------  RESUMEN  --------------------------------
  else if (!input.resumen) errors.resumen = "Resumen es requerido";
  /*    
  else if (.test(input.resumen)) {
    errors.resumen = "Solo acepta texto";
  }
  */
  //------------------------------   PASOS    ---------------------------------
  else if (!input.pasos) errors.pasos = "Los pasos son requeridos";
  /*
  else if (.test(input.pasos)) {
    errors.pasos = "Solo acepta texto";
  }
  */

  return errors;
}
