import React, { useEffect } from "react";
import OrderDetailProducts from "./OrderDetailProducts";
import OrderDetailInfo from "./OrderDetailInfo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverOrder,
  getOrderDetails,
  pickupOrder,
  laundryOrder,
} from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import moment from "moment";

const OrderDetailmain = (props) => {
  const { orderId } = props;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDelivered, success: successDelivered } = orderDeliver;

  const orderPickup = useSelector((state) => state.orderPickup);
  const { loading: loadingPickup, success: successPickup } = orderPickup;

  const orderLaundry = useSelector((state) => state.orderLaundry);
  const { loading: loadingLaundry, success: successLaundry } = orderLaundry;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId, successDelivered, successPickup, successLaundry]);

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };
  const pickupHandler = () => {
    dispatch(pickupOrder(order));
  };
  const laundryHandler = () => {
    dispatch(laundryOrder(order));
  };

  return (
    <section className="content-main">
      <div className="content-header">
        <Link to="/orders" className="btn btn-dark text-white">
          Kembali
        </Link>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="card">
          <header className="card-header p-3 Header-green">
            <div className="row align-items-center ">
              <div className="col-lg-6 col-md-6">
                <span>
                  <i className="far fa-calendar-alt mx-2"></i>
                  <b className="text-white">
                    {moment(order.createdAt).format("llll")}
                  </b>
                </span>
                <br />
                <small className="text-white mx-3 ">
                  Order ID: {order._id}
                </small>
              </div>
              {/* <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">
                <select
                  className="form-select d-inline-block"
                  style={{ maxWidth: "200px" }}
                >
                  <option>Change status</option>
                  <option>Awaiting payment</option>
                  <option>Confirmed</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
                <Link className="btn btn-success ms-2" to="#">
                  <i className="fas fa-print"></i>
                </Link>
              </div> */}
            </div>
          </header>
          <div className="card-body">
            {/* Order info */}
            <OrderDetailInfo order={order} />

            <div className="row">
              <div className="col-lg-9">
                <div className="table-responsive">
                  <OrderDetailProducts order={order} loading={loading} />
                </div>
              </div>
              {/* Payment Info */}
              <div className="col-lg-3">
                <div className="box shadow-sm bg-light text-center">
                  Info Order Makanan
                  {/* pickup */}
                  {order.isPickup ? (
                    <button className="btn btn-success col-12">
                      Telah diambil pada ({" "}
                      {moment(order.isPickupAt).format("MMM Do YY")})
                    </button>
                  ) : (
                    <>
                      {loadingPickup && <Loading />}
                      <button
                        onClick={pickupHandler}
                        className="btn btn-dark col-12"
                      >
                        Tandai Telah Diantar
                      </button>
                    </>
                  )}
                  {/* deliver */}
                  {order.isDelivered ? (
                    <button className="btn btn-success col-12">
                      Telah diantar pada ({" "}
                      {moment(order.isDeliveredAt).format("MMM Do YY")})
                    </button>
                  ) : (
                    <>
                      {loadingDelivered && <Loading />}
                      <button
                        onClick={deliverHandler}
                        className="btn btn-dark col-12"
                      >
                        Tandai Telah Diambil
                      </button>
                    </>
                  )}
                </div>
                <div className="col-lg-12">
                  <div className="box shadow-sm bg-light text-center">
                    Status Laundry
                    <div>
                      {/* deliver */}
                      {order.isLaundry ? (
                        <button className="btn btn-success col-12">
                          Laundry Selesai ({" "}
                          {moment(order.isLaundryAt).format("MMM Do YY")})
                        </button>
                      ) : (
                        <>
                          {loadingLaundry && <Loading />}
                          <button
                            onClick={laundryHandler}
                            className="btn btn-dark col-12"
                          >
                            Tandai Telah Selesai
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderDetailmain;
