import Product from "./Product";

let styles ={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px"
}
function ProductTab(){
    return(
        <div style={styles}>
        <Product Title="Logitech MX Master" idx={0} />
        <Product Title="Apple pencil (2nd Gen)" idx={1}/>
        <Product Title="Zebronics zeb-transformer" idx={2}/>
        <Product Title="Petronics Toad 23" idx={3}/>
        </div>
    );
}

export default ProductTab;