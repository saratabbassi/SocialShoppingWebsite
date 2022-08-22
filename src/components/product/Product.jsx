import "./product.scss"
import '../../images/Capture2.PNG'

const Product = () => {
  return (
    <div className="product">
     
        


        <table style= {{ width : "90%", margin:"auto" ,   borderCollapse: "collapse" }}>
                    <tr>
                    <td>
                    <img src={require('../../images/Capture2.PNG')} style= {{ margin: "-20px", width: "100px ",height: "100px" ,borderRadius: "8px"}} />

                    </td>
                    <td style= {{ margin: "-20px", color: "white"}} > 
                        <h4>L'oreal</h4> 
                        <p>perfect match fond de teint</p>
                    </td>
                    <td> <button className="button">voir produit</button></td>
                    </tr>
                  
          </table>
            
           
              
           
       
    </div>
  )
}

export default Product