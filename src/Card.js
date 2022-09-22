import Button from "./Button";

const Card = ({monthly_products,yearly_products,isToggled}) => {
    monthly_products.map(monthly_product => {
        if (monthly_product.plan.toLowerCase() === "proffesional") {
            const month_plan = monthly_product.plan
        }
    })

    yearly_products.map(yearly_product => {
        if (yearly_product.plan.toLowerCase() === "proffesional") {
            const year_plan = yearly_product.plan
        }
    })

    

    return ( 
        <div>
           {isToggled ? 
           <div className="card-layout">
                {yearly_products.map(yearly_product => (
                    <div className="card" key = {yearly_product.id}>
                        <h4> {yearly_product.plan} </h4>
                        <h2> {yearly_product.amount} </h2>
                        <p> {yearly_product.storage} </p>
                        <p> {yearly_product.users} </p>
                        <p> {yearly_product.send} </p>
                        <Button />
                    </div>
                ))}
           </div> : 
           <div className="card-layout">
                {monthly_products.map(monthly_product => (
                    <div className="card" key={monthly_product.id}>
                      <h4> {monthly_product.plan} </h4>
                      <h2> {monthly_product.amount} </h2>
                      <p> {monthly_product.storage} </p>
                      <p> {monthly_product.users} </p>
                      <p> {monthly_product.send} </p>
                      <Button />
                  </div>
                ))}
           </div>
           }
        </div>
     );
}
 
export default Card;