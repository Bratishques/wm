import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    className?: string
}

const ListMark = ({children, className=""}:Props) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img className={`mr-4 w-3 h-3 min-w-max`} src="/icons/check-icon.svg" alt=""/>
            {children}
        </div>
    )
}

export default ListMark