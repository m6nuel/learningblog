import Link from "next/link"

const SideBar = () => {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">

      <h5 className="flex h-10 justify-center">Tema</h5>

      <Link
        className="mb-2 flex h-10 items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 p-4 md:h-10"
        href="/dashboard/crear"
      >
        <p> + Agregar tema</p>
      </Link>

      <Link
        className="mb-2 flex h-10 items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 p-4 md:h-10"
        href="/"
      >
        <p>Home</p>
      </Link>

      <Link
        className="mb-2 flex h-10 items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 p-4 md:h-10"
        href="/"
      >
        <p>Home</p>
      </Link>

      <Link
        className="mb-2 flex h-10 items-center justify-center rounded-md bg-gray-800 hover:bg-gray-700 p-4 md:h-10"
        href="/"
      >
        <p>Home</p>
      </Link>
    </div>
  )
}
export default SideBar