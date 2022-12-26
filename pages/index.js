import Head from "next/head";
import Link from "next/link";
import { HiPencilSquare, HiTrash, HiUserPlus } from "react-icons/hi2";

export default function Home(props) {
  let no = 1;

  const deleteHandler = async (id) => {
    const choice = confirm("are you sure you delete it?");

    if (!choice) return;

    const req = await fetch(`/api/siswa/delete/${id}`, {
      method: "DELETE",
    });

    await req.json();
  };

  return (
    <div>
      <Head>
        <title>CRUD nextjs</title>
      </Head>

      <div className="container mx-auto p-5">
        <button>
          <Link
            href="/add"
            className="py-3 px-5 bg-blue-500 text-white flex items-center gap-1 mb-5 shadow-lg font-bold tracking-wider rounded-lg hover:bg-blue-700"
          >
            Add new student <HiUserPlus />
          </Link>
        </button>

        <table className="w-3/4 table-auto shadow">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200 text-left">
              <th className="p-3 text-sm tracking-wider">No</th>
              <th className="p-3 text-sm tracking-wider">Name</th>
              <th className="p-3 text-sm tracking-wider">Email</th>
              <th className="p-3 text-sm tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((siswa) => (
              <tr
                key={siswa._id}
                className={no % 2 == 1 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="p-3 text-sm tracking-wider text-gray-700">
                  {no++}
                </td>
                <td className="p-3 text-sm tracking-wider text-gray-700">
                  {siswa.name}
                </td>
                <td className="p-3 text-sm tracking-wider text-gray-700">
                  {siswa.email}
                </td>
                <td className="p-3 text-xs text-white flex gap-2">
                  <button>
                    <Link
                      href={`/update/${siswa._id}`}
                      className="py-1 px-4 rounded-full bg-green-500 hover:bg-green-700 flex items-center gap-1"
                    >
                      Edit <HiPencilSquare />
                    </Link>
                  </button>
                  <button
                    onClick={() => deleteHandler(siswa._id)}
                    className="py-1 px-4 rounded-full bg-red-500 hover:bg-red-700 flex items-center gap-1"
                  >
                    Delete <HiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const getData = async () => {
    const req = await fetch("http://localhost:3000/api/siswa");

    const res = await req.json();

    return res;
  };

  const allData = await getData();
  return {
    props: {
      data: allData,
    },
  };
}
