import "./Page1.css"
import UserCard from "./components/UserCard";
import Button from "../../../components/Button";
import ArrowLink from "../../../components/ArrowLink/ArrowLink.tsx";
import ProductCard from "./components/ProductCard";
import Dropdown from "../../../components/Dropdown";
import {useState} from "react";

interface Option {
    value: string;
    label: string;
}

const Page1 = () => {

    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const options: Option[] = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' },
    ];
    const handleSelectChange = (newSelectedOptions: Option[]) => {
        setSelectedOptions(newSelectedOptions);
        console.log('Selected options:', newSelectedOptions);
    };


    return (
        <>
            <div className="card">
                <h1 className={"section-title-text"}>Этап 2</h1>
                <p>Страница по подготовке основных компонентов</p>

                <UserCard/>

                <div className="card">
                    <Button children={"Click Me"} className="button-black" onClick={undefined}></Button>
                    <Button children={"Transparent button"} className={"button-frame"} onClick={undefined}></Button>
                </div>

                <ArrowLink children={"Просто какая-то ссылка"} href={"https:/vk.com"}/>

                <div className="product-card-body">
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={99.8}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={76.1}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={89.9}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={101.2}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={99.8}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={76.1}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={89.9}/>
                    <ProductCard image={"https://i.pinimg.com/736x/e6/36/99/e636991148fa6740c5278e6b6174889e.jpg"}
                                 subtitle={"Какое-то описание"} title={"Название товара"}
                                 description={"Описание какого-то товара, довольно длинное, может быть и короткое, но обычно подлиннее"}
                                 price={101.2}/>
                </div>

                <Dropdown placeholder={"Выбор-какой то"} options={options} selected={selectedOptions} onChange={handleSelectChange}/>

            </div>
        </>
    )
}

export default Page1;