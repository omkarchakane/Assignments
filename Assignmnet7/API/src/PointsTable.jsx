import React from "react";

const PointsTable = ({ teams }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 text-center">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Position</th>
          <th className="border px-4 py-2">Team</th>
          <th className="border px-4 py-2">Played</th>
          <th className="border px-4 py-2">Won</th>
          <th className="border px-4 py-2">Lost</th>
          <th className="border px-4 py-2">Points</th>
          <th className="border px-4 py-2">NRR</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.id} className="text-center border">
            <td className="border px-4 py-2">{index + 1}</td>
            <td className="border px-4 py-2">{team.Team}</td>
            <td className="border px-4 py-2">{team.Played}</td>
            <td className="border px-4 py-2">{team.Won}</td>
            <td className="border px-4 py-2">{team.Lost}</td>
            <td className="border px-4 py-2">{team.Points}</td>
            <td className="border px-4 py-2">{team.NRR}</td>
          </tr>
        ))}
        

      </tbody>
    </table>
  );
};

export default PointsTable;
