import { RouterProvider } from "react-router-dom";
import router from "./libs/router";

function App() {
    return (
        <div className="font-NotoSans">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
