import { useState } from "react";
import ViewModal from "./view-modal";

export type FloorPlanProps = {
    url: string;
    alt: string;
    width: string;
    height: string;
};

const FloorPlan = ({ url, alt, width, height }: FloorPlanProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full h-full flex-center">
            <ViewModal
                imgSrc="../assets/image/ex_Washroom.jpg"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="TITLE"
                description="대충 설명들"
            />
            <div className=" relative">
                <img
                    src={url}
                    alt={alt}
                    width={`${width}px`}
                    height={`${height}px`}
                />
                <div
                    className=" absolute w-[80px] h-[120px] top-48 right-[49px] z-40 cursor-pointer"
                    onClick={() => setIsOpen(true)}
                ></div>
            </div>
        </div>
    );
};
export default FloorPlan;
