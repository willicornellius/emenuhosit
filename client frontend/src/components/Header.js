import React, { useState } from "react";
import { useHistory, Link as Link1 } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Actions/userActions";
import { Link as Link2 } from "react-scroll";

const Header = () => {
  const [keyword, setKeyword] = useState();
  const dispatch = useDispatch();
  let history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  //nav

  //nav use

  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container">
          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link1 className="navbar-brand" to="/">
                    <img alt="logo" src="/images/logo1.png" />
                  </Link1>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link1 className="dropdown-item" to="/profile">
                          Profile
                        </Link1>

                        <Link1
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link1>
                      </div>
                    </div>
                  ) : (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="fas fa-user"></i>
                      </button>
                      <div className="dropdown-menu">
                        <Link1 className="dropdown-item" to="/login">
                          Login
                        </Link1>

                        <Link1 className="dropdown-item" to="/register">
                          Register
                        </Link1>
                      </div>
                    </div>
                  )}

                  <Link1 to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link1>
                </div>
                <div className="col-12 d-flex align-items-center">
                  <form onSubmit={submitHandler} className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="Search"
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                      search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* PC HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-6 d-flex align-items-center">
                <Link1 className="navbar-brand" to="/">
                  <img alt="logo" src="/images/logo1.png" />
                </Link1>
              </div>
              <div className="col-md-8 col-12 d-flex align-items-center ms-auto">
                <div>
                  <Link1 className="navbar-brand" to="/">
                    Beranda
                  </Link1>
                  <Link2 to="services" className="navbar-brand">
                    Menu & Produk
                  </Link2>
                  <Link2 className="navbar-brand" to="about">
                    Tentang Kami
                  </Link2>
                </div>
                <div className="col-md-3 col-8 d-flex align-items-center ms-auto Login-Register">
                  {userInfo ? (
                    <div className="btn-group">
                      <button
                        type="button"
                        className="name-button dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Halo {userInfo.name}
                      </button>
                      <div className="dropdown-menu">
                        <Link1 className="dropdown-item" to="/profile">
                          Profile
                        </Link1>

                        <Link1
                          className="dropdown-item"
                          to="#"
                          onClick={logoutHandler}
                        >
                          Logout
                        </Link1>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Link1 to="/register">Register</Link1>
                      <button className="login__btn">
                        <Link1 to="/login">Login</Link1>
                      </button>
                    </>
                  )}

                  <Link1 to="/cart">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">{cartItems.length}</span>
                  </Link1>
                </div>
              </div>

              {/* <div className="col-md-6 col-8 d-flex align-items-center">
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div> */}
              {/* nav */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
