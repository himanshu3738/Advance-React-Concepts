import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div className="m-auto max-w-7xl">
      <div className="flex ">
        <div
          id="sidebar"
          className="relative flex h-svh max-w-md flex-col  gap-y-3 divide-y rounded-md border border-slate-400 bg-slate-200  p-2 shadow-md"
        >
          <h1 className="fixed bottom-0  z-10">React Router Contacts</h1>
          <div className="flex items-center gap-2 p-2">
            <form className="flex" id="search-form" role="search">
              <input
                className="flex-1 rounded-md bg-white px-4 py-2 shadow-lg outline-none ring-1 ring-slate-300"
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <form method="post">
              <button
                type="submit"
                className="rounded-md bg-white px-4 py-2 font-bold text-blue-400 shadow-md"
              >
                New
              </button>
            </form>
          </div>
          <nav className="no-scrollbar p-2 flex flex-col gap-2 overflow-scroll ">
            <ul className="space-y-2 text-start">
              <li>
                <Link to={`/contacts/1`}>Your Name</Link>
              </li>
              <li>
                <Link to={`/contacts/2`}>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
