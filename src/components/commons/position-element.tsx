import clsx from "clsx";

export type PositionedElementProps = {
    className?: string; // 기본 클래스 (Tailwind 유틸리티 사용 가능)
    responsiveClassName?: string; // 반응형 클래스 (sm:, md: 등 포함)
    onClick: () => void; // 클릭 이벤트
    text: string; // 표시할 텍스트
};

const PositionedElement = ({
    className,
    responsiveClassName,
    onClick,
    text,
}: PositionedElementProps) => {
    return (
        <div
            className={clsx(
                "absolute z-40 cursor-pointer hover:bg-white hover:opacity-80 flex-center text-sm font-bold",
                className, // 기본 클래스
                responsiveClassName // 반응형 클래스
            )}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default PositionedElement;
