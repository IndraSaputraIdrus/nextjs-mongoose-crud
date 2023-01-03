export default function Form(props) {
  return (
    <div
      className={`container mx-auto px-5 flex items-center justify-center ${props.className}`}
    >
      <form
        onSubmit={props.onSubmit}
        className="w-full md:max-w-lg bg-white my-10 p-5 flex flex-col gap-5 rounded-md shadow border-2 border-slate-400"
      >
        {props.status && (
          <div
            className={`${
              props.status === "success" ? "bg-green-500" : "bg-red-500"
            } text-white p-3 rounded-md`}
          >
            {props.status}
          </div>
        )}
        {props.children}
      </form>
    </div>
  );
}
