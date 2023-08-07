import { authRoutes, outRoutes, publicRoutes } from "./routes.jsx";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../components/Layout.jsx";
import { useEffect } from "react";

export default function AppRouter() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        {isAuthenticated &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

        {outRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        <Route path="/" element={<Layout />}>
          {publicRoutes.map(({ path, element, children }) => (
            <Route key={path} path={path} element={element}>
              {children &&
                children.map(({ path: childPath, element: childElement }) => (
                  <Route
                    key={childPath}
                    path={childPath}
                    element={childElement}
                  />
                ))}
            </Route>
          ))}
        </Route>
      </Routes>
    </>
  );
}
