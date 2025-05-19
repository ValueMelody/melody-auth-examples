import Root from "./Root"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App
