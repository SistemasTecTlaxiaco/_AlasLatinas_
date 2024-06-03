export const POINT_ONE = '100000000000000000000000';

export class PostedMessage {
  premium: boolean;
  sender: string;
  text: string;

  constructor({ premium, sender, text }: PostedMessage) {
    this.premium = premium;
    this.sender = sender;
    this.text = text;
  }
}

export class Cliente {
  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  correo: string;

  constructor({ nombre, apellidos, direccion, telefono, correo }: Cliente) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.telefono = telefono;
    this.correo = correo;
  }
}

export class Ticket {
  idVuelo: string;
  precio: number;
  numAsiento: number;

  constructor({ idVuelo, precio, numAsiento }: { idVuelo: string; precio: number; numAsiento: number }) {
    this.idVuelo = idVuelo;
    this.precio = precio;
    this.numAsiento = numAsiento;
  }
}

export class Pasajero {
  correo: string;
  nombre: string;
  numTelefono: string;

  constructor({ correo, nombre, numTelefono }: { correo: string; nombre: string; numTelefono: string }) {
    this.correo = correo;
    this.nombre = nombre;
    this.numTelefono = numTelefono;
  }
}

export class Vuelo {
  dispAsiento: number;
  fechaSalida: string;
  idVuelo: string;
  precioTicket: number;
  ubicacionDestino: string;
  ubicacionSalida: string;

  constructor({ dispAsiento, fechaSalida, idVuelo, precioTicket, ubicacionDestino, ubicacionSalida }: { dispAsiento: number; fechaSalida: string; idVuelo: string; precioTicket: number; ubicacionDestino: string; ubicacionSalida: string }) {
    this.dispAsiento = dispAsiento;
    this.fechaSalida = fechaSalida;
    this.idVuelo = idVuelo;
    this.precioTicket = precioTicket;
    this.ubicacionDestino = ubicacionDestino;
    this.ubicacionSalida = ubicacionSalida;
  }
}

