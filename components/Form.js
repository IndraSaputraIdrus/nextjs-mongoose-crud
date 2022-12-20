export default function Form(props) {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <form
        onSubmit={props.onSubmit}
        className="w-2/5 bg-white my-10 p-5 flex flex-col gap-5 rounded-md shadow"
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
