import React from 'react';
import {shallow} from 'enzyme';
import People from './People';

describe('<People />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<People/>);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
