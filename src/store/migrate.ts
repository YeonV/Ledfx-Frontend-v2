/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { produce } from 'immer'

export interface MigrationState {
  [key: string]: any
}

interface Migrations {
  [version: number]: (state: MigrationState) => MigrationState
}

export const migrations: Migrations = {
  // Adds a new key
  11: produce((draft) => {
    draft.uiPersist = draft.uiPersist || {}
    draft.uiPersist.testZustand = { test: true }
  }),
  // Removes a key
  12: produce((draft) => {
    if (draft.uiPersist) {
      delete draft.uiPersist.testZustand
    }
  }),

  // Removes an existing value (deprecatedValue) and repositions an existing value (existingValue) based on another value (anotherValue)
  14: (state) => {
    const { deprecatedValue, ...rest } = state
    return {
      ...rest,
      existingValue: state.anotherValue + 1 // Change position of an existing value
      // Remove a deprecated value
    }
  },

  // Adds a new value (newValue) based on an existing value (existingValue). Also adds a new function (newFunction)
  15: (state) => ({
    ...state,
    // Transformations for version 15
    newValue: state.existingValue + 1, // Add new value based on existing value
    // Add a new function
    newFunction: () => console.log('New Function')
  }),

  16: (state) => ({ ...state }),
  17: (state) => ({ ...state })
}
