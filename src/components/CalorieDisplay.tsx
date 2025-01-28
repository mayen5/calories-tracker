type CalorieDisplayProps = {
    calories: number
    text: string
    color: string
}

export const CalorieDisplay = ({ calories, text, color }: CalorieDisplayProps) => {
    return (
        <p className='text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center'>
            <span className={`font-black text-6xl text-${color}-600`}> {calories}</span> {text}
        </p>
    )
}
