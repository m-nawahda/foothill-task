import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import EmptyMsg from "../../components/ui-components/empty-msg/EmptyMsg";

const ShoppingCarts = () => {
  const carts = useSelector((state) => state.carts.value);

  return (
    <div className="products-container">
      {carts && carts.length ? (
        carts.map((cart) => <Card {...cart} key={cart.id} />)
      ) : (
        <EmptyMsg>There are no carts added</EmptyMsg>
      )}
    </div>
  );
};

export default ShoppingCarts;
