export class InformacionFamiliar {
    tiene_esposa:string;
    nombre_esposa:string;
    profesion_ocupacion_esposa:string;
    empresa_trabaja_esposa:string;
    cargo_actual_esposa:string;
    direccion_esposa:string;
    telefono_esposa:string;
    ciudad_esposa:string;

    numero_personas_dependen:number;

    dependen: DatosDependen[] = [];

    nombre_padre:string;
    profesion_ocupacion_padre:string;
    telefono_padre:string;
    nombre_madre:string;
    profesion_ocupacion_madre:string;
    telefono_madre:string;

    numero_hermanos:string;
    nombre_hermano:string;
    profesion_ocupacion_hermano:string;
    telefono_hermano:string;

}

export class DatosDependen{
    nombres_parentesco:string;
    parentesco:string;
    edad:string;
    constructor(nombres_parentesco:string, parentesco:string,edad:string){
        this.nombres_parentesco=nombres_parentesco;
        this.parentesco=parentesco;
        this.edad=edad;  
    }
}
