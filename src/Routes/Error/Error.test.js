import React from 'react';
import {shallow} from 'enzyme';
import Error from './Error';

describe('<Error />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Error/>);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
