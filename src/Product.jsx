import "./Product.css";
import Price from "./Price.jsx";

function Product({Title,idx}){
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let descriptions = [
        ["8,000 DPI","5 programmable buttons"],
        ["intutive surface","8,000 DPI"],
        ["designed for iPad Pro", "intutive surface"],
        ["wireless", "optical orientation"]];
    return(
        <div className="Product">
            <h4>{Title}</h4>
            <p>{descriptions[idx][0]}</p>
            <p>{descriptions[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}
export default Product;