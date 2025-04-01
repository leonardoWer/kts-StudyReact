import Button from "../../../../../components/Button";
import * as React from "react";
import "./ProductCard.css"

export type ProductCardProps = {
    image: string;
    subtitle: string;
    title: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({image, subtitle, title, description, price}) => {
    const [isInCart, setIsInCart] = React.useState(false);

    const handleAddToCartClick = () => {
        setIsInCart(!isInCart);
    }


    return (
        <div className="product-card">
            <div className="product-card-image">
                <img src={image} alt=""/>
            </div>

            <p className="product-card-subtitle">{subtitle}</p>
            <h3 className={"product-card-title"}>{title}</h3>
            <p className="product-card-description">{description}</p>

            <div className="product-card-price-container">
                <p className="product-card-price">{price}</p>
                <Button className={isInCart ? "button-frame" : "button-black"}
                        children={isInCart ? "Корзина" : "В корзину"}
                        onClick={handleAddToCartClick}
                />
            </div>

        </div>
    )
}

export default ProductCard;