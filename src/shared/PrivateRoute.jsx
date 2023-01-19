import React from "react";
import { Navigate, Route } from "react-router-dom";

function PrivateRoute({ element: TimerPage, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("accessToken") ? (
          <TimerPage {...props} />
        ) : (
          <Navigate replace to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
