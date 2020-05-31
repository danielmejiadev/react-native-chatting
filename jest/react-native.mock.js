// Global mocks

// Mocking react native sensitive info
jest.mock('react-native-sensitive-info', () => ({
  setItem: jest.fn(),
  deleteItem: jest.fn(),
  getItem: jest.fn(),
}));
