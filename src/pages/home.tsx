import TwentyFourFloorPlan from "../components/twenty-four-floor-plan";

const Home = () => {
    return (
        <div className="w-full h-screen pt-20 flex-center">
            <div className=" w-[1280px] h-full border flex-center text-2xl">
                <TwentyFourFloorPlan
                    floorPlanSrc="/assets/image/24_floor_plan.jpg"
                    floorPlanAlt="24평형 도면"
                />
            </div>
        </div>
    );
};

export default Home;
