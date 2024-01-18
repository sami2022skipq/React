import React from "react";

const Card = ({name ="unknown", designation= "undefine", city='City'}) => {
  return (
    <div className="p-1">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://media.licdn.com/dms/image/C5603AQFa0j_IV2XdOA/profile-displayphoto-shrink_200_200/0/1646141117303?e=1710979200&v=beta&t=WmhT13fp6GvgmgALiD7JbZFTssmYJNf9JL6Rh7jlvG0"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {designation}, {city}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
