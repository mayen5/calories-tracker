import { useMemo } from 'react'
import { Activity } from '../types'
import { CalorieDisplay } from './CalorieDisplay'

type CalorieTrackerProps = {
    activities: Activity[]
}

export const CalorieTracker = ({ activities }: CalorieTrackerProps) => {
    //counters
    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [ activities ])

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [ activities ])

    const totalCalories = useMemo(() => caloriesConsumed - caloriesBurned, [ caloriesConsumed, caloriesBurned ])

    return (
        <>
            <h2 className='text-4xl font-black text-white text-center'>Calories resume</h2>

            <div className='flex flex-col item md:flex-row md:justify-between gap-5 mt-10'>
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text='Consumed'
                    color='orange'
                />
                <CalorieDisplay
                    calories={caloriesBurned}
                    text='Burned'
                    color='green'
                />
                <CalorieDisplay
                    calories={totalCalories}
                    text='Total'
                    color='blue'
                />
            </div>

        </>
    )
}
