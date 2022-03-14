/* eslint-disable no-undef */
import Enzyme from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import '@testing-library/jest-dom';


Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}) )
// const noScroll = () => {};
// Object.defineProperties( window, 'scrollTo', { value: noScroll, writeable: true});

// jest.mock('sweetalert2', () => ({
//     fire: jest.fn(),
//     close: jest.fn(),
//  }));