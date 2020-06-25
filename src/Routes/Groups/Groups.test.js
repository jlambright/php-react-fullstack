import React from 'react';
import {shallow} from 'enzyme';
import Groups from './Groups';

describe('<Groups />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Groups/>);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
