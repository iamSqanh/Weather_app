import Weather from "./component/Weather";


function App() {
  return (
    <div className={`h-[100vh] w-full flex justify-center items-center  bg-[url(https://plus.unsplash.com/premium_photo-1679339461002-74ce1844b785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)]`}>
        <Weather />
    </div>
  );
}

export default App;
