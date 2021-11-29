import React from 'react';
import {Select} from "../../../../shared/Select/Select";

export function Selector({options, defaultValue, onChange, ...props}) {
    return (
        <div>
            <Select
                value={props.value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value="">{defaultValue}</option>
                {options.map(
                    (option) => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )
                  )
                }
            </Select>
        </div>
    );
}