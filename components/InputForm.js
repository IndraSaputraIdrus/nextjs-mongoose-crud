export default function InputForm(props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm tracking-wider font-bold">
        {props.children}
      </label>
      <input
        type="text"
        className="bg-gray-100 p-3 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}
