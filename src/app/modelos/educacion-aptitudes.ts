export class EducacionAptitudes {
    primaria_ano_finalizacion:string;
    primaria_anos_cursados:string;
    primaria_titulo_obtenido:string;
    primaria_nombre_institucion:string;
    primaria_ciudad:string;

    bachillerato_tipo:string;
    bachillerato_ano_finalizacion:string;
    bachillerato_anos_cursados:string;
    bachillerato_titulo_obtenido:string;
    bachillerato_nombre_institucion:string;
    bachillerato_ciudad:string;

    numero_tecnicos:number;
    tecnicos: DatosEducacionSuperior[]=[];

    numero_tecnologos:number;
    tecnologos: DatosEducacionSuperior[]=[];

    numero_carreras:number;
    carreras: DatosEducacionSuperior[]=[];

    numero_postgrados:number;
    postgrados: DatosEducacionSuperior[]=[];

    esta_estudiando:string;
    que_estudia:string;
    duracion:string;
    ano_semestre:string;
    nombre_institucion:string;
    horario:string;

    otros_conocimientos:string;


}

export class DatosEducacionSuperior{
    ano_finalizacion:string;
    anos_cursados:string;
    titulo_obtenido:string;
    nombre_institucion:string;
    ciudad:string;

    constructor(ano_finalizacion:string, anos_cursados:string,titulo_obtenido:string, 
        nombre_institucion:string,ciudad:string){

        this.ano_finalizacion=ano_finalizacion;
        this.anos_cursados=anos_cursados;
        this.titulo_obtenido=titulo_obtenido;  
        this.nombre_institucion=nombre_institucion;
        this.ciudad=ciudad;  

    }
}
