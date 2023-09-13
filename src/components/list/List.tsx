import {FC} from 'react';

type Props = {
    items?: Array<string>
}

export const List: FC<Props> = ({items = []}) => {
    if (items.length === 0) return null

    return (
        <ul>
            {items.map(el => <li key={el}>{el}</li>)}
        </ul>
    )
}