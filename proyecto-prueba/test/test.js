import { expect } from 'chai';

// Función para buscar un pasaje
function findTicket(tickets, id) {
  return tickets.find(ticket => ticket.id === id);
}

// Función para eliminar un pasaje
function deleteTicket(tickets, id) {
  const index = tickets.findIndex(ticket => ticket.id === id);
  if (index !== -1) {
    tickets.splice(index, 1);
  }
  return tickets;
}

// Función para agregar un pasaje
function addTicket(tickets, newTicket) {
  tickets.push(newTicket);
  return tickets;
}

// Función para registrar un pasaje (suponiendo que registrar es lo mismo que agregar)
function registerTicket(tickets, newTicket) {
  return addTicket(tickets, newTicket);
}

describe('Find Ticket Test', function() {
  it('should find the correct ticket', function() {
    const tickets = [
      { id: 1, destination: 'New York', price: 150 },
      { id: 2, destination: 'London', price: 200 },
      { id: 3, destination: 'Paris', price: 180 }
    ];
    
    const ticket = findTicket(tickets, 2);
    expect(ticket).to.not.be.undefined; // Verificar que el pasaje fue encontrado
    expect(ticket.destination).to.equal('London'); // Verificar que el destino del pasaje es correcto
  });
});

describe('Delete Ticket Test', function() {
  it('should delete the ticket', function() {
    let tickets = [
      { id: 1, destination: 'New York', price: 150 },
      { id: 2, destination: 'London', price: 200 },
      { id: 3, destination: 'Paris', price: 180 }
    ];
    
    // Eliminar el pasaje
    tickets = deleteTicket(tickets, 2);
    
    const ticket = findTicket(tickets, 2);
    expect(ticket).to.be.undefined; // Verificar que el pasaje fue eliminado
    expect(tickets.length).to.equal(2); // Verificar que la lista de pasajes tiene 2 elementos
  });
});

describe('Add Ticket Test', function() {
  it('should add a new ticket', function() {
    let tickets = [
      { id: 1, destination: 'New York', price: 150 },
      { id: 2, destination: 'London', price: 200 }
    ];
    
    const newTicket = { id: 3, destination: 'Paris', price: 180 };
    
    // Agregar el pasaje
    tickets = addTicket(tickets, newTicket);
    
    const ticket = findTicket(tickets, 3);
    expect(ticket).to.not.be.undefined; // Verificar que el pasaje fue agregado
    expect(ticket.destination).to.equal('Paris'); // Verificar que el destino del pasaje es correcto
    expect(tickets.length).to.equal(3); // Verificar que la lista de pasajes tiene 3 elementos
  });
});

describe('Register Ticket Test', function() {
  it('should register a new ticket', function() {
    let tickets = [
      { id: 1, destination: 'New York', price: 150 },
      { id: 2, destination: 'London', price: 200 }
    ];
    
    const newTicket = { id: 3, destination: 'Tokyo', price: 250 };
    
    // Registrar el pasaje
    tickets = registerTicket(tickets, newTicket);
    
    const ticket = findTicket(tickets, 3);
    expect(ticket).to.not.be.undefined; // Verificar que el pasaje fue registrado
    expect(ticket.destination).to.equal('Tokyo'); // Verificar que el destino del pasaje es correcto
    expect(tickets.length).to.equal(3); // Verificar que la lista de pasajes tiene 3 elementos
  });
});
