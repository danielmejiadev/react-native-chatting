// Dependencies
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Mocks
import './react-native.mock';

/**
 * @file setup.js
 * @author Daniel Mejia.
 * @description Testing configuration for jest.
 */

// Mocks
jest.mock('decorators-js-pack', () => ({
  transform: jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });
