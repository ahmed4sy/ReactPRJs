import "../Styles/comst.css";

export default function Posts() {
  return (
    <div className="Posts">
      <Post />
      <Post />
      <Post />
    </div>
  );
}
function Post() {
  return (
    <div className="Post">
      <h2 className="Title ">This is my post</h2>
      <p className="contaner ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt neque
        sed fuga, magnam fugit deleniti?
      </p>
    </div>
  );
}
