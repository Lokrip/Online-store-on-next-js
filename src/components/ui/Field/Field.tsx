import { InputHTMLAttributes, useState } from "react";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder?: string
}


export function Field<P extends FieldProps>({ label, placeholder = '', ...props }: P) {
    const [placeholderName, _] = useState<string>(placeholder);

    const handleOffPlaceHolder = (event: React.FocusEvent<HTMLInputElement>) => {
        const action = event.target as HTMLInputElement | HTMLTextAreaElement;
        action.placeholder = '';
    }
    
    const handleOnPlaceHolder = (event: React.FocusEvent<HTMLInputElement>) => {
        const action = event.target as HTMLInputElement | HTMLTextAreaElement;
        action.placeholder = placeholderName
    }
    
    return (
        <div>
            <label htmlFor={label.toLowerCase()}>{label}: </label>
            <input 
                onFocus={handleOffPlaceHolder}
                onBlur={handleOnPlaceHolder}
                placeholder={placeholderName}
                {...props}
            />
        </div>
    )
}