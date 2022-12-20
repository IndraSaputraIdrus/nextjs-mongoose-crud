export default function ButtonForm(props) {
  return (
    <button
      type="submit"
      className="bg-slate-900 text-white text-sm py-3 rounded-full hover:bg-slate-700"
    >
      {props.children}
    </button>
  );
}
