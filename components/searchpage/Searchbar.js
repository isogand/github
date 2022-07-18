import SearchIcon from '@mui/icons-material/Search';
export default function Searchbar(props) {

    return (
        <>
            <div className=" align-items mx-auto mt-4 flex max-w-sm justify-between space-x-2 rounded-lg bg-gray-800 p-2 pb-2 transition duration-300 ease-in dark:bg-[#2b365e] md:max-w-2xl">
                <input
                    name="search"
                    ref={props.userRef}
                    placeholder="Search ....."
                    className="text-md text-[#5176ff] mt-1 w-[400px] rounded-md bg-gray-800 px-2 py-2 font-mono leading-6 text-slate-500 placeholder-neutral-400 transition  duration-300 ease-in focus:outline-none dark:bg-[#2b365e] dark:text-gray-50 dark:placeholder-slate-500"
                />
                <button
                    onClick={props.handleClick}
                    onChange={props.onChange}
                    className="bg-gray-800 hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                    <SearchIcon  className="  h-6 w-8 text-[#5176ff] dark:text-blue-600" />
                </button>
            </div>
        </>
    )
}
