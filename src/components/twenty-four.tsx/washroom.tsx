import { useState } from "react";
import PositionedElement from "../commons/position-element";
import ViewModal from "../view-modal";

const WashRoom = () => {
    const [isWashRoom1Open, setIsWashRoom1Open] = useState(false);
    const [isWashRoom2Open, setIsWashRoom2Open] = useState(false);
    return (
        <div>
            <ViewModal
                imgSrc={"/assets/image/ex_Washroom.jpg"}
                alt="화장실1 예시 이미지"
                isOpen={isWashRoom1Open}
                onClose={() => setIsWashRoom1Open(false)}
                title="안방 화장실"
                description="설명"
            />
            <ViewModal
                imgSrc={"/assets/image/ex_Washroom.jpg"}
                alt="화장실2 예시 이미지"
                isOpen={isWashRoom2Open}
                onClose={() => setIsWashRoom2Open(false)}
                title="거실 화장실"
                description="설명"
            />

            <PositionedElement
                text="안방 화장실"
                onClick={() => setIsWashRoom1Open(true)}
                className="position-min-24-right-washroom-location h-[40%] w-10 text-[8px]"
                responsiveClassName="sm:top-32 sm:right-8 sm:w-[14.5%] sm:text-xs md:top-48 md:right-[49px] md:h-[30%]"
            />
            <PositionedElement
                text="거실 화장실"
                onClick={() => setIsWashRoom2Open(true)}
                className="position-min-24-left-washroom-location h-[40%] w-10 text-[8px]"
                responsiveClassName="sm:top-[86px] sm:left-24 sm:w-[14.5%] sm:text-xs md:top-32 md:left-36 md:h-[30%]"
            />
        </div>
    );
};
export default WashRoom;
