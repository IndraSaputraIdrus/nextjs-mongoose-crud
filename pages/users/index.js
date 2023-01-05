import Head from "next/head";
import { unAuthPages } from "../../middlewares/authPages";

export default function Users(props) {
  let no = 1;

  return (
    <div>
      <Head>
        <title>List User</title>
      </Head>

      <div className="container mx-auto p-5">
        <table className="w-full table-fixed shadow">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-gray-200 text-left">
              <th className="p-3 text-sm tracking-wider">No</th>
              <th className="p-3 text-sm tracking-wider">Name</th>
              <th className="p-3 text-sm tracking-wider">Password</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((user) => (
              <tr
                key={user._id}
                className={no % 2 == 1 ? "bg-gray-100" : "bg-gray-50"}
              >
                <td className="p-3 text-sm tracking-wider text-gray-700">
                  {no++}
                </td>
                <td className="p-3 text-sm tracking-wider text-gray-700">
                  {user.username}
                </td>
                <td className="p-3 text-sm tracking-wider text-gray-700 truncate">
                  {user.password}
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
  unAuthPages(context);

  const token = verifyTokenCookie(context);

  const getData = async () => {
    const req = await fetch(`${process.env.DOMAIN}/api/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

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
