import { useState } from 'react';

export const useForm = <T extends Object>(initState: T) => {
    const [form, setForm] = useState(initState);

    const onChange = (value: string, field: keyof T) => {
        setForm({
            ...form,
            [field]: value
        });
    };

    return {
        ...form,
        form: form,
        onChange,
        setForm
    };
};
