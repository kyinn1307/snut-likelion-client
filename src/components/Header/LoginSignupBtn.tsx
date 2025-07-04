interface LoginSignupBtnProps {
    onClick?: () => void;
}

export const LoginSignupBtn = ({ onClick }: LoginSignupBtnProps) => {
    return (
        <div
            className="w-[122px] h-[41px] font-medium text-[#ff7700] text-[14px] border border-[#ff7700] rounded-[164px] flex items-center justify-center cursor-pointer"
            onClick={onClick}
        >
            로그인/회원가입
        </div>
    );
};
