import useLockBodyScroll from "../hooks/useLockBodyScroll";

export type ViewMoalProps = {
    imgSrc: string;
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
};

const ViewModal = ({
    imgSrc,
    isOpen,
    onClose,
    title,
    description,
}: ViewMoalProps) => {
    useLockBodyScroll(isOpen);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex-center"
            onClick={onClose}
        >
            <div
                className=" fixed w-[80%] h-[50%] md:h-[80%] bg-white p-4 z-50 rounded-lg shadow-lg flex flex-col items-center justify-between"
                onClick={(e) => e.stopPropagation()}
            >
                <div className=" flex-center flex-col">
                    <div className="text-xl font-bold">{title}</div>
                    <div className="text-sm">{description}</div>
                </div>
                <div className="flex-center w-[250px] h-[250px] md:w-[600px] md:h-[600px]">
                    <img src={imgSrc} alt="example image" />
                </div>
                <div className=" absolute top-1.5 right-6">
                    <button
                        onClick={onClose}
                        className="text-sm border px-2 rounded-lg"
                    >
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
