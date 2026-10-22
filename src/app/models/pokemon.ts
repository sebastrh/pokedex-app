//Definimos un intergace ya que solo vamos a definir propiedades
import { IStat } from "./stat.model";
export interface IPokemon {
    id: number;
    name: string;
    type1: string;
    type2? : string;
    sprite: string;
    height: number;
    weight: number;
    abilities: string [];
    hidenAbility?: string;
   ////   base_stat: number;
       // name: string;

    //}
    
    stats: IStat[];
}
