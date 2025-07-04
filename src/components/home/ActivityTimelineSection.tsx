type Props = {
    onShowDetail: () => void;
};
const ActivityTimelineSection = ({ onShowDetail }: Props) => {
    const timeline = [
        { month: "정기", label: "세션 및 스터디" },
        { month: "5월", label: "아이디어톤" },
        { month: "8월", label: "중앙해커톤" },
        { month: "12월", label: "데모데이" }
    ];

    return (
        <div className="flex flex-col pt-25 sm:pt-[160px] w-full pb-31 sm:pb-[260px] ">
            <h2 className="flex justify-center text-[20px] sm:text-[56px] font-semibold pb-10 sm:pb-[72px]">
                활동소개
            </h2>

            <div className="relative w-full h-28 flex items-center justify-center gap-2 sm:gap-[96px] mx-auto mb-15 sm:mb-[82px]">
                <div
                    className="absolute top-1/2 left-0 right-0 -translate-y-1/2"
                    style={{
                        border: "1px solid",
                        borderImageSource:
                            "linear-gradient(90deg, rgba(107, 50, 0, 0.2) 0%, #FF7700 50.35%, rgba(107, 50, 0, 0.2) 100%)",
                        borderImageSlice: 1
                    }}
                />

                {timeline.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-18 sm:w-[114px] flex flex-col items-center sm:mt-4"
                    >
                        <span className="text-[#FF7700] text-base sm:text-[20px] font-semibold pb-[6px] sm:pb-[8px]">
                            {item.month}
                        </span>
                        <div className="w-2 sm:w-[20px] h-2 sm:h-[20px] bg-[#FF7700] rounded-full mt-[10px] sm:mt-2" />
                        <span className="text-sm sm:text-[20px] font-semibold whitespace-nowrap pt-5 sm:pt-[32px]">
                            {/* 모바일: 세션 스터디 */}
                            {item.label === "세션 및 스터디" ? (
                                <>
                                    <span className="block sm:hidden">세션 · 스터디</span>
                                    <span className="hidden sm:block">세션 및 스터디</span>
                                </>
                            ) : (
                                item.label
                            )}
                        </span>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={onShowDetail}
                    className="w-28 sm:w-[216px] h-[33px] sm:h-[76px] text-sm sm:text-[24px] font-bold rounded-full cursor-pointer border-[0.4px] sm:border-[2px] border-white text-white hover:bg-[#2D2D2D] transition duration-200"
                >
                    세부 일정 보기
                </button>
            </div>
        </div>
    );
};

export default ActivityTimelineSection;
