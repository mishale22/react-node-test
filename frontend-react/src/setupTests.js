import { configure } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// global.fetch = require('jest-mock-axios');
