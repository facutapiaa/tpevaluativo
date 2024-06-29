import { cp } from "fs";

export interface Usuario {
    uid: any; //atributos del tipo any recien vacios o indefinidos
    email:string;
    password:string;
    rol:string;
}
