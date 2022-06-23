import { FC } from "react"
import { Logo } from "./Logo"

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    return (
        <div
            className="flex bg-gray-700 justify-center items-center py-5 
        border-b-2 border-b-gray-600">
            <Logo />
        </div>
    )
}
