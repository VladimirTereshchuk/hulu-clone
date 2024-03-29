import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Result = ({ results }) => {
  return (
    <div className="px-5 my-10 sm:grid gap-3 md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Result;
