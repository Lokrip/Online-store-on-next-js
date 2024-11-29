import { forwardRef, InputHTMLAttributes, PropsWithChildren } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    function Checkbox({...props}, ref) {
        return <input {...props} ref={ref} />
    }
)

export default Checkbox;

