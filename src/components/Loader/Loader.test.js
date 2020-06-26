import React from 'react';
import {shallow} from 'enzyme';
import Loader from './Loader';

describe('<Loader />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Loader/>);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
