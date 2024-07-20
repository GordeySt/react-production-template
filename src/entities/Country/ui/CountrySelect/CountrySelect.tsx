import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo(
    ({ className, value, onChange, readonly }: CountrySelectProps) => {
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country);
            },
            [onChange],
        );

        return (
            <Select
                className={className}
                value={value}
                onChange={onChangeHandler}
                label="Country"
                options={options}
                readonly={readonly}
            />
        );
    },
);
