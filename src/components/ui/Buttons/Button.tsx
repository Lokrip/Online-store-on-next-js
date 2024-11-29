import { useCorrectClass } from "@/hooks/hooks";
import { CLName } from "@/types/react/type.type";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";


const ButtonPrimary: FC<PropsWithChildren & CLName> = ({
    children, className, ...props
}) => {
    const classNameValid = useCorrectClass('bg-primary text-white', className)

    return <button {...props} className={classNameValid}>{children}</button>
}

const ButtonHoverPrimary: FC<PropsWithChildren & CLName> = ({children, ...props}) => {
    return (
        <ButtonPrimary {...props} className='hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full focus:outline-none'>
            {children}
        </ButtonPrimary>
    );
}

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>  {
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const Button: FC<ButtonProps> = ({children, variant, ...props}) => {
    const buttonVariants: Record<string, FC<PropsWithChildren & CLName>> = {
        primary: ButtonHoverPrimary,
        // secondary: ButtonSecondary
    };

    const ButtonChoise = buttonVariants[variant!];

    return (
        <ButtonChoise {...props}>
            {children}
        </ButtonChoise>
    )
}

export const ButtonGroup: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="flex items-center space-x-4">
            {children}
        </div>
    )
}   