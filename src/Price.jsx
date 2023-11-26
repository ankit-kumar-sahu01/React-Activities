export default function Price({oldPrice, newPrice}){
    let styles = {
        height:"28px",
        backgroundColor:"yellow",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
    return(
        <div style={styles}>
            <span style={{textDecorationLine: "line-through"}}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style = {{fontWeight:"bold"}}>{newPrice}</span>
        </div>
    );
}