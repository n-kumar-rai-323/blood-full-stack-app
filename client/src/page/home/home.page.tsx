import style from "./home.module.css"
const HomePage = () => {
  return (
    <div>
        
      <h1 className="title">Global CSS</h1>

     
      <h2 className={`${style.title}`}>Moduar CSS</h2>
    </div>
  );
}

export default HomePage;