import ToastForm from "./ToastForm";

export default function ToastMain() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col  gap-y-6">
        <h1 className="font-semibold text-2xl text-center">토스트 컨트롤러</h1>
        <ToastForm />
      </div>
    </main>
  );
}
