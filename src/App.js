import UseAuthentication from "./hooks/useAuthentication";
import RouterComponent from "./router/router.component";
import UseTheme from "./hooks/useTheme";

export default function App() {
  return (
      <UseAuthentication>
          <UseTheme>
              <RouterComponent />
          </UseTheme>
      </UseAuthentication>
  );
}
