import WashRoom from "./twenty-four.tsx/washroom";

export type TwentyFourFloorPlanProps = {
    floorPlanSrc: string;
    floorPlanAlt: string;
};

const TwentyFourFloorPlan = ({
    floorPlanSrc,
    floorPlanAlt,
}: TwentyFourFloorPlanProps) => {
    return (
        <div className="w-full h-full flex-center flex-col">
            <div className="text-2xl font-bold">24평</div>
            <div className="relative min-size md:medium-size sm:small-size">
                <img src={floorPlanSrc} alt={floorPlanAlt} />
                <WashRoom />
            </div>
        </div>
    );
};
export default TwentyFourFloorPlan;
