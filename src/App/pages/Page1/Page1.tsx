import UserCard from "./components/UserCard";
import Button from "../../../components/Button";

const Page1 = () => {
    return (
        <>
            <div className="card">
                <h1>Page 1</h1>
                <UserCard />
                <Button children={"Click Me"} className="button-black" onClick={undefined} ></Button>
            </div>
        </>
    )
}

export default Page1;