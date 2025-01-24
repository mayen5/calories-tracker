// Import the Activity type from the types directory
import { Activity } from '../types/index';

// Define the type for activity actions
export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity[ 'id' ] } }


// Define the state type for activities
export type ActivityState = {
    activities: Activity[], // Array of Activity objects
    activeId: Activity[ 'id' ] // ID of the active activity
}

// Initialize the state with an empty activities array
export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

// Define the reducer function to handle activity actions
export const activityReducer = (
    state: ActivityState, // Current state
    action: ActivityActions // Action to be handled
): ActivityState => {
    switch (action.type) {
        case 'save-activity': // Handle the save-activity action
            let updatedActivities: Activity[] = []
            if (state.activeId) {
                updatedActivities = state.activities.map((activity) => {
                    if (activity.id === state.activeId) {
                        return action.payload.newActivity
                    } else {
                        return activity
                    }
                })
            } else {
                updatedActivities = [
                    ...state.activities, // Keep the existing activities
                    action.payload.newActivity // Add the new activity to the list
                ]
            }
            return {
                ...state, // Keep the existing state
                activities: updatedActivities, // Set the activities to the updated list
                activeId: '' // Reset the activeId to an empty string
            }
        case 'set-activeId': // Handle the set-activeId action
            return {
                ...state, // Keep the existing state
                activeId: action.payload.id // Set the activeId to the new ID
            }
        default: // Return the current state for any unknown action
            return state
    }
}