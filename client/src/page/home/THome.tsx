import logo from "../../assets/images/logo.png"
const THome = () => {
    return(
        <div>
        <h2>Public Folder</h2>
        <img src="/logo.png" className="w-40 rounded-full"></img>
        <h2>Assets Folder</h2>
        <img src={logo} className="w-40 rounded-full"></img>

        <h1 className="text-3xl text-red-300 font-bold  underline">
            Hello world!
        </h1>
    </div>
    )
}

export default THome