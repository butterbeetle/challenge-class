import ToastContextProvider from "./context/toastContext";

function App() {
  return (
    <ToastContextProvider>
      <main>
        <div className="flex flex-col  gap-y-6">
          <h1 className="font-semibold text-2xl text-center">
            토스트 컨트롤러
          </h1>
          <form className="flex flex-col  gap-y-5">
            <div className="flex flex-col gap-y-1.5">
              <label className="text-sm" htmlFor="title">
                제목 (필수)
              </label>
              <input
                className="border rounded-md w-80 px-4 py-2.5"
                id="title"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label className="text-sm" htmlFor="content">
                내용 (필수)
              </label>
              <input
                className="border rounded-md w-80 px-4 py-2.5"
                id="content"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label className="text-sm" htmlFor="time">
                노출 시간(ms) (선택)
              </label>
              <input
                className="border rounded-md w-80 px-4 py-2.5"
                id="time"
                type="number"
              />
            </div>
            <button className="bg-black text-white rounded-md py-3 hover:bg-black/80 active:bg-black/70 transition-colors">
              토스트 띄우기
            </button>
          </form>
        </div>
      </main>
    </ToastContextProvider>
  );
}

export default App;
