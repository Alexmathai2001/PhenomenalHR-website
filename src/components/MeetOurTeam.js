import React, { useState } from "react";
import { team } from "../constants";

const MeetOurTeam = () => {
  const [teams, setTeams] = useState(team);
  return (
    <div>
      <p className="flex justify-center text-xl font-semibold text-[#00B8A2] my-5">
        Meet Our Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
        {/* card one */}
        {teams.map((data, index) => (
          <div className="bg-slate-100 w-60 h-60 rounded-lg my-3 p-6 flex flex-col items-center justify-center gap-3">
            <img
              alt="image"
              src={data?.image}
              className="w-28 h-28 rounded-full object-cover"
            ></img>
            <div className="flex flex-col items-center">
              <p className="font-bold text-gray-700 text-lg">{data?.name}</p>
              <p className="font-light text-gray-500">
                {data?.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
