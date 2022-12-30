import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const UserPage = lazy(() => import("./pages/UserPage"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/Questify" element={<HomePage />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <h1 className="wrong-address">There's nothing here: 404!</h1>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
