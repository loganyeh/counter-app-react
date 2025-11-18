
function MinuteButton({ text, size }) {
    
    return (
        <>
            <div>
                <div className={`${size} flex justify-center items-center font-bold bg-blue-400 border-2 border-red-600 shadow-lg rounded-full`}>
                    <span className="text-5xl">{text}</span>
                </div>
            </div>
        </>
    )
}

export default MinuteButton;