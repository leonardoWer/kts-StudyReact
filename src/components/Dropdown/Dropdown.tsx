import React, {useState} from "react";
import "./Dropdown.css"


// Interface для данных опций
interface Option {
    value: string;
    label: string;
}

export type DropdownProps = {
    options: Option[];
    selected: Option[];
    onChange: (selected: Option[]) => void;
    placeholder?: string;
}


const Dropdown: React.FC<DropdownProps> = ({options, selected, onChange, placeholder = "Выберите..."}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option: Option) => {
        const isSelected = selected.some(item => item.value === option.value);
        let newSelected: Option[];

        if (isSelected) {
            newSelected = selected.filter(item => item.value !== option.value);
        } else {
            newSelected = [...selected, option];
        }

        onChange(newSelected);
    }

    return (
        <div className={isOpen ? "dropdown-container dropdown-container-active" : "dropdown-container"}>

            <div className="selected-options" onClick={toggleDropdown}>
                {selected.length === 0 ? (
                    <span className={isOpen ? "placeholder placeholder-active" : "placeholder"}>{placeholder}</span>
                ) : (
                    selected.map(option => option.label).join(', ')
                )
                }
            </div>

            {isOpen && (
                <ul className={isOpen ?"options-list options-list-active" : "options-list"}>
                    {options.map(option => (
                        <li key={option.value}
                            className={selected.some(item => item.value === option.value) ? "option-item-selected" : "option-item"}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Dropdown;