// model i dades de prova per la sessió 7 - PROERTY BINDINGS

export interface ProducteLab{

    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    imatgeUrl: string;

}


export const PRODUCTES_LAB: ProducteLab [] = [

    {
        id: 1,
        nom: 'Iphone 18 pro',
        preu: 999,
        estoc: 77,
        categoria: 'Móbiles',
        imatgeUrl: 'https://picsum.photos/id/237/200/300'


    }

   , {
         id: 2,
        nom: 'PlayStation 5 Slim',
        preu: 568,
        estoc: 3,
        categoria: 'Consolas',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'

    }


    , {
         id: 3,
        nom: 'Televisión Samsung Oled 4K ',
        preu: 800,
        estoc: 90,
        categoria: 'Televisiones',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'

    }

    , {
        id: 4,
        nom: 'AirFrayer Xiaomi',
        preu: 60,
        estoc: 299,
        categoria: 'Electronica Cocina',
        imatgeUrl: 'https://picsum.photos/seed/picsum/200/300'

    }





]


