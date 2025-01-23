import { ChangeEvent, FormEvent, useState } from 'react'
import { Activity } from '../types/index';
import { categories } from '../data/categories'

export const Form = () => {

    const [ activity, setActivity ] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {

        const isNumberField = [ 'calories', 'category' ].includes(e.target.id)

        setActivity({
            ...activity,
            [ e.target.id ]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


    }

    return (
        <form
            className='space-y-5 bg-white shadow p-10 rounded-lg'
            onSubmit={handleSubmit}
        >
            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor='category' className='font-bold'>Category:</label>
                <select
                    id='category'
                    className='border border-slate-300 p-2 rounded-lg w-full bg-white'
                    value={activity.category}
                    onChange={handleChange}
                >
                    {
                        categories.map((category) => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor='name' className='font-bold'>Activity:</label>
                <input
                    id='name'
                    type='text'
                    className='border border-slate-300 p-2 rounded-lg w-full'
                    placeholder='Ex. Running, Walking, Orange juice, Salad, etc.'
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className='grid grid-cols-1 gap-3'>
                <label htmlFor='calories' className='font-bold'>Calories:</label>
                <input
                    id='calories'
                    type='number'
                    className='border border-slate-300 p-2 rounded-lg w-full'
                    placeholder='Enter the number of calories. Ex. 100, 200, 300, etc.'
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type='submit'
                value={activity.category === 1 ? 'Add Meal' : 'Add Exercise'}
                className='bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10'
                disabled={!isValidActivity()}
            />
        </form>
    )
}
