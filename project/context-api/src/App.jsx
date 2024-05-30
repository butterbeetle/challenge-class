import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import AuthProvider from "./contexts/auth.context";

function App() {
  console.log("앱 리렌더링");

  return (
    <AuthProvider>
      <main>
        <Display />
        <Button />
      </main>
    </AuthProvider>
  );
}

export default App;
