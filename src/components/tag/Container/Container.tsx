import { useCorrectClass } from "@/hooks/hooks";
import { CLName } from "@/types/react/type.type";
import { PropsWithChildren } from "react";

interface ContainerType extends PropsWithChildren, CLName {

}

export function Container<
P extends ContainerType
>({children, className}: P) {
    const classNameValid = useCorrectClass('container', className)
    return (
        <div className={classNameValid}>
            {children}
        </div>
    )
}
