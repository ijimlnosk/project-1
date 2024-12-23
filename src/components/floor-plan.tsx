import { useState } from "react";
import ViewModal from "./view-modal";

export type FloorPlanProps = {
    url: string;
    alt: string;
};

const FloorPlan = ({ url, alt }: FloorPlanProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full flex-center">
            <ViewModal
                imgSrc="/assets/image/ex_Washroom.jpg"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="TITLE"
                description="대충 설명들"
            />
            <div className="relative min-size md:medium-size sm:small-size">
                <img src={url} alt={alt} />
                <div
                    className=" absolute z-40 position-min-size h-[40%]  sm:position-smaill-size md:position-medium-size sm:w-[14.5%] sm:h-[32%] md:w-[14.5%] md:h-[30%] cursor-pointer text-sm border-black border-2"
                    onClick={() => setIsOpen(true)}
                >
                    화장실
                </div>
            </div>
        </div>
    );
};
export default FloorPlan;
