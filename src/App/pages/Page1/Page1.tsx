import UserCard from "./components/UserCard";
import Button from "../../../components/Button";
import ArrowLink from "../../../components/ArrowLink/ArrowLink.tsx";

const Page1 = () => {
    return (
        <>
            <div className="card">
                <h1 className={"section-title-text"}>Этап 2</h1>
                <p>Страница по подготовке основных компонентов</p>

                <UserCard />

                <div className="card">
                    <Button children={"Click Me"} className="button-black" onClick={undefined} ></Button>
                    <Button children={"Transparent button"} className={"button-frame"} onClick={undefined} ></Button>
                </div>

                <ArrowLink children={"Просто какая-то ссылка"} href={"https:/vk.com"}/>

            </div>
        </>
    )
}

export default Page1;