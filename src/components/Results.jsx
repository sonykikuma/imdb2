import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="mx-auto p-4 sm:grid max-w-6xl sm:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
