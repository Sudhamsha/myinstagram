import reducer from './photos'

describe('Photo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type: 'ANYTHING'})
        expect(result).toBeDefined();
    })

    test('adds a Photo', () => {
        const startState = {
            Photos: [
                {id: 1, name: 'Create Static UI', isComplete: true},
                {id: 2, name: 'Create Initial State', isComplete: true},
                {id: 3, name: 'Use State to render UI', isComplete: true},
            ]
        }
        const expectedState = {
            Photos: [
                {id: 1, name: 'Create Static UI', isComplete: true},
                {id: 2, name: 'Create Initial State', isComplete: true},
                {id: 3, name: 'Use State to render UI', isComplete: true},
                {id: 4, name: 'Added Photo', isComplete: false},
            ]
        }

        const action = {type: 'Photo_ADD', payload: {id: 4, name: 'Added Photo', isComplete: false}}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
});