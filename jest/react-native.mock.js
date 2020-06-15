// Global mocks

// Mocking react native sensitive info
jest.mock('react-native-sensitive-info', () => ({
  setItem: jest.fn(),
  deleteItem: jest.fn(),
  getItem: jest.fn(),
}));

// React native vector icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => ({ loadFont: jest.fn() }));
