export class ExperienciaLaboral {
    experiencias_laborales:number;
    empresas: Empresas[]=[];
}

export class Empresas{
    nombre_empresa:string;
    direccion:string;
    telefono:string;
    jefe_inmediato:string;
    cargo_jefe_inmediato:string;
    fecha_ingreso:string;
    fecha_retiro:string;
    tiempo_servicio:string;
    sueldo_inicial:string;
    sueldo_final:string;
    cargo_desempenado:string;
    tipo_contrato:string;
    cual_contrato:string;
    horario_trabajo:string;
    jornada:string;
    motivo_retiro:string;

    constructor(nombre_empresa:string, direccion:string,telefono:string,
        jefe_inmediato:string, cargo_jefe_inmediato:string,fecha_ingreso:string,
        fecha_retiro:string, tiempo_servicio:string,sueldo_inicial:string,
        sueldo_final:string, cargo_desempenado:string,tipo_contrato:string,
        cual_contrato:string, horario_trabajo:string,jornada:string,
        motivo_retiro:string){
        this.nombre_empresa=nombre_empresa;
        this.direccion=direccion;
        this.telefono=telefono;  
        this.jefe_inmediato=jefe_inmediato;
        this.cargo_jefe_inmediato=cargo_jefe_inmediato;
        this.fecha_ingreso=fecha_ingreso;  
        this.fecha_retiro=fecha_retiro;
        this.tiempo_servicio=tiempo_servicio;
        this.sueldo_inicial=sueldo_inicial;  
        this.sueldo_final=sueldo_final;
        this.cargo_desempenado=cargo_desempenado;
        this.tipo_contrato=tipo_contrato;  
        this.cual_contrato=cual_contrato;
        this.horario_trabajo=horario_trabajo;
        this.jornada=jornada;  
        this.motivo_retiro=motivo_retiro;  
    }
}