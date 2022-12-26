export default function Form(props) {
  return (
    <div className="container mx-auto px-2 min-h-screen flex items-center justify-center">
      <form
        onSubmit={props.onSubmit}
        className="max-w-lg bg-white my-10 p-5 flex flex-col gap-5 rounded-md shadow border-2 border-slate-400"
      >
        {props.status.error && (
          <div className="bg-red-500 text-white p-3 rounded-md">
            {props.status.message}
          </div>
        )}
        {props.children}
      </form>
    </div>
  );
}
