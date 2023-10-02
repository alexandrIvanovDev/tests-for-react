import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
    test('render app', () => {
        render(<App/>);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/find course/i)).toBeInTheDocument();
    });
    test('typing in input', () => {
        render(<App/>)
        expect(screen.queryByDisplayValue(/react/i)).toBeNull();

        userEvent.type(screen.getByRole('textbox'), 'react');

        expect(screen.getByDisplayValue(/react/i)).toBeInTheDocument();
    });
    test('filter works correct', () => {
        render(<App/>)

        expect(screen.getByText(/css/i)).toBeInTheDocument();
        expect(screen.getByText(/vue/i)).toBeInTheDocument();
        expect(screen.getByText(/javascript/i)).toBeInTheDocument();

        userEvent.type(screen.getByRole('textbox'), 'script');

        expect(screen.queryByText(/css/i)).toBeNull();
        expect(screen.queryByText(/vue/i)).toBeNull();
        expect(screen.getByText(/javascript/i)).toBeInTheDocument();
    })
})