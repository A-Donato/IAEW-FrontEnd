export interface City {
    id: number;
    nombre: string;
    paisEntity: [ {
        id: number,
        nombre: string
    }];
    paisId: number;
  }
