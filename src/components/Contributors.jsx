import { useEffect, useState } from "react";

export default function Contributors() {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch("/make-first-pr/contributors.json")
      .then((res) => res.json())
      .then((data) => setContributors(data));
  }, []);
  
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Project Contributors
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {contributors.map((user, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
          >
            <img
              src={"/make-first-pr"+user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold">{user.name}</h2>

            <p className="text-gray-500 mb-3">{user.bio}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {user.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-600 px-2 py-1 text-sm rounded"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={`https://github.com/${user.github}`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
