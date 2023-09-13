import {render, screen} from '@testing-library/react';
import {List} from './List';

const data = ['js', 'react', 'redux']

describe('List tests', () => {
    test('List render with data', () => {
        render(<List items={data}/>)

        // get - assumes that something exists on the page
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('js')).toBeInTheDocument()
    })
    test('List render without data', () => {
        render(<List />)

        // query - if something may not exist
        expect(screen.queryByRole('list')).toBeNull()
    })
    test('Snapshot test with data', () => {
        const view = render(<List items={data} />)

        expect(view).toMatchSnapshot()
    })
    test('Snapshot test without data', () => {
        const view = render(<List />)

        expect(view).toMatchSnapshot()
    })
})