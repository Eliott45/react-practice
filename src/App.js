import Gallery, { Profile } from "./Gallery.js";

export default function App() {
  return (
    <div>
      <h1>App:</h1>
      <Gallery />
      <TodoList />
      {/* <Profile /> */}
    </div>
  );
}

function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
