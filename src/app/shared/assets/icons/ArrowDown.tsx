export const ArrowDownIcon = ({ rotated }: { rotated: boolean }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
        }}
    >
        <path
            d="M14.932 6.81567H5.06536C4.26536 6.81567 3.86536 7.78234 4.43203 8.34901L8.74869 12.6657C9.44036 13.3573 10.5654 13.3573 11.257 12.6657L12.8987 11.024L15.5737 8.34901C16.132 7.78234 15.732 6.81567 14.932 6.81567Z"
            fill="white"
        />
    </svg>
)

export const ChevronUpIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={29}
        fill="none"
    >
        <path
            stroke="#FAFAFA"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m7 18 7-7 7 7"
        />
    </svg>
)
