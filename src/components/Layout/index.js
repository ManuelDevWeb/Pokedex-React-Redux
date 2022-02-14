import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "semantic-ui-react";

// Actions
import { clearError } from "../../actions";

// Components
import Menu from "../Menu";

// Styles
import "./styles.css";

const Layout = ({ children }) => {
  // useDispatch() dispara acciones
  const dispatch = useDispatch();
  // useSelector() permite acceder al state
  const errorMessage = useSelector((state) => state.error);

  // Función para limpiar el error
  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className="wrapper">
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color="red"
          />
        </div>
      )}
      <div className="Layout-content">{children}</div>
    </div>
  );
};

export default Layout;
