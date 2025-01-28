import { useEffect, useMemo, useReducer } from 'react'
import { Form } from './components/Form'
import { activityReducer, initialState } from './reducers/activityReducer'
import { ActivityList } from './components/ActivityList'

function App() {

  const [ state, dispatch ] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [ state.activities ])

  const canRestartApp = () => useMemo(() => state.activities.length, [ state.activities ])

  const restartApp = () => {
    dispatch({ type: 'restart-app' })
  }


  return (
    <>
      <header className='bg-lime-600 py-3'>
        <div className='max-w-4xl mx-auto flex justify-between'>
          <h1 className='text-center text-lg font-bold text-white uppercase'>
            Calories Tracker
          </h1>

          <button
            className='bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded text-sm disabled:opacity-10'
            disabled={!canRestartApp()}
            onClick={restartApp}
          >
            Restart App
          </button>
        </div>
      </header>

      <section className='bg-lime-500 py-20 px-5'>
        <div className='max-w-4xl mx-auto bg-white p-5 rounded-lg shadow-lg'>
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>

      <section className='p-10 mx-auto max-w-4xl'>
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
