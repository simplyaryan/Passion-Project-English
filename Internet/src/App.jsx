import "./App.css";
import background from "./assets/StarBackground.webp";

function Banner() {
  return (
    <>
      <div className="mainbanner">
        <img src={background} />
        <h1>HOW DOES THE INTERNET WORK ?</h1>
        <h3>By-Aryan Singh</h3>
      </div>
    </>
  );
}
export default Banner;
