import React, { useEffect, useState } from "react";
// import { team } from "../constants";
import axios from "axios";

const MeetOurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const call = async () => {
      const info = await axios.get(
        "https://staging.phenomenalhr.com/api/v1/employees"
      );
      console.log("hello");
      console.log(info?.data?.data);
      setTeams(info?.data?.data);
    };
    call();
  }, []);
  return (
    <div>
      <p className="flex justify-center text-xl font-semibold text-[#00B8A2] my-5">
        Meet Our Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
        {/* card one */}
        {teams.map((data, index) => (
          <div className="bg-slate-100 w-60 h-60 rounded-lg my-3 p-6 flex flex-col items-center justify-center gap-3">
            {data?.image ? (
              <img
                alt="image"
                src={data.image}
                className="w-28 h-28 rounded-full object-cover"
              />
            ) : (
              <img
                alt="placeholder"
                src="/images/avatar.png" // Replace "path_to_static_image.jpg" with the actual path to your static image
                className="w-28 h-28 rounded-full object-cover"
              />
            )}

            <div className="flex flex-col items-center">
              <p className="font-bold text-gray-700 text-lg">
                {data?.first_name +" "+ data?.last_name}
              </p>
              <p className="font-light text-gray-500">{data?.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
