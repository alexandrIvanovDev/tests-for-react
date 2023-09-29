import {render, screen} from '@testing-library/react';
import {Search} from './Search';
import userEvent from '@testing-library/user-event';

const onChange = jest.fn()

describe('Test Search component', () => {
    test('Search render', () => {
        render(<Search children="Find"/>)

        expect(screen.getByText(/find/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    })

    test('with custom placeholder', () => {
        render(<Search value="" onChange={onChange} placeholder={'find post'}/>)

        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument();
    })

    test('With onChange function', () => {
        render(<Search value="" onChange={onChange}/>)

        const input = screen.getByRole('textbox')

        userEvent.type(input, 'some text')

        expect(onChange).toHaveBeenCalledTimes(9)
    })

    test('check classes', () => {
        render(<Search value="" onChange={onChange}>Find</Search>)

        const input = screen.getByRole('textbox');
        const label = screen.getByText(/find/i);

        expect(input).toHaveClass('input');
        expect(label).toHaveClass('label');
    })

    test('check dynamic classes', () => {
        render(<Search value="hello" onChange={onChange}>Find</Search>)

        const input = screen.getByRole('textbox');

        expect(input).toHaveClass('input');
        expect(input).toHaveClass('filled');
    })

    test('Search with snapshot', () => {
        const view = render(<Search value="hello" onChange={onChange}>Find</Search>)

        expect(view ).toMatchSnapshot();
    })
})