import React from 'react';
import {shallow} from 'enzyme';
import CSVImportBlock from './CSVImportBlock';

describe('<CSVImportBlock />', () => {
    let component;

    beforeEach(() => {
        component = shallow(<CSVImportBlock/>);
    });

    test('It should mount', () => {
        expect(component.length).toBe(1);
    });
});
