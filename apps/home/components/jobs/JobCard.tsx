import { FC } from "react";

interface Props {
  title?: string;
  collab?: string[] | null | undefined;
  description?: string;
}

const JobCard: FC<Props> = ({ title, collab, description }) => {
  return (
    <div className="py-6 px-6 border-2 border-black dark:border-white rounded-lg flex flex-col w-4/5 md:w-3/4 lg:w-2/3 3xl:w-1/3">
      <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold">{title}</h1>
      <h2 className="lg:text-lg md:text-sm">
        Work with{" "}
        <span className="text-blue-600 font-bold">
          {collab &&
            collab
              .map((pos) => {
                return pos;
              })
              .join(", ")}
        </span>
      </h2>
      <p className="mt-8 whitespace-pre-wrap">{description}</p>
    </div>
  );
};

export default JobCard;
