import TeamCard from "../components/TeamCard";

export default function Team() {
  return (
    <div className="flex-col flex items-center gap-3 bg-[#242424] text-white">
      <div className="w-[300px] mb-5 flex flex-col gap-3">
        <h2 className="font-bold text-4xl text-center">Meet With $BALL Team</h2>
        <p className="text-sm leading-5 text-secondaryColor text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 flex-wrap">
        <TeamCard />

      </div>

    </div>
  );
}