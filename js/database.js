/**
 * Mock database - everything's stored in-memory
 */

// Model types
import Character from './types/character';

// Mock data
var characters = [];
(function() {
  characters.push(new Character(0, 'The Flash'));
  characters.push(new Character(1, 'Green Arrow'));
})();

export function getCharacter(id) {
  return characters.find(c => c.id === id);
}

export function getCharacters() {
  return characters;
}

export function deleteCharacter(name) {
  characters = characters.filter(c => c.name != name);
}
