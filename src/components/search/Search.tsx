import {FC, InputHTMLAttributes} from 'react';
import c from './Search.module.css';
import cn from 'classnames';

type Props = {
    children?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Search: FC<Props> = (props) => {
    const {children, value, onChange, placeholder = 'Search...'} = props
    const inputClass = cn(c.input, {[c.filled]: value})
    return (
        <label className={c.label}>
            {children}
            <input
                className={inputClass}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </label>
    )
}