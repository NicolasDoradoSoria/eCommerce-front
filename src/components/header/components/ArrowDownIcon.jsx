const ArrowDownIcon = ({ size, height, width, ...props }) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg" >
            <path d="M7 10l5 5 5-5" />
        </svg>
    )
}

export default ArrowDownIcon;