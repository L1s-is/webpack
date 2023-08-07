import cls from "./Sidebar.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "widgets/themeSwitcher";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [ isCollapsed, setIsCollapsed ] = useState(false)
    const handleClick = () => {
        setIsCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.isCollapsed]: isCollapsed}, [className])}>
            <button onClick={handleClick}>toggle</button>
            <ThemeSwitcher />
        </div>
    );
};