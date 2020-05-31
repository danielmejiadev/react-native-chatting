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
jest.mock('@src/client/helpers/transformer.decorator', () => jest.fn());

Enzyme.configure({ adapter: new Adapter() });
