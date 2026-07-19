import Profile from "./components/Profile"
import Login from "./components/Login"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
        <h1 className="py-8 text-center text-5xl font-bold text-purple-700">
          Hello!
        </h1>

        <div className="flex flex-col items-center gap-8 px-4 pb-10">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  )
}

export default App