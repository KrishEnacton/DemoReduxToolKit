import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserById = createAsyncThunk(
    'counter/request_action',
    async (userId, thunkAPI) => {
        try {
            const response = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            console.log("Res:-", response);
            if (response.length >= 0) {
                return response[Math.floor(Math.random() * 10)].name;
            }
            throw 'Request failed';
        } catch (err) {
            console.log(err);
            return rejectWithValue([]);
            // const res = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
            // return res[Math.floor(Math.random() * 10)].name;
        }
    }
)

const initialState = { value: "Null" }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        },
        request_action(state) {
            state.loading = true
        },
        success_action(state) {
            state.loading = false
        },
        fail_action(state) {
            state.loading = false
        }
    },
    // extraReducers: {
    //     // Add reducers for additional action types here, and handle loading state as needed
    //     [fetchUserById.fulfilled]: (state, action) => {
    //         // Add user to the state array
    //         console.log("state:-", state.value);
    //         console.log("action:-", action);
    //         state.value = action.payload;
    //     },
    //     [fetchUserById.pending]: (state, action) => {
    //         state.value = "loading";
    //     },
    //     [fetchUserById.rejected]: (state, action) => {
    //         state.value = "rejected";
    //     }
    // },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUserById.pending, (state, action) => {
            // Add user to the state array
            state.value = "loading";
        })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                // Add user to the state array
                state.value = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                // Add user to the state array
                state.value = "rejected";
            })

    },
})


export const {
    increment,
    decrement,
    incrementByAmount,
    request_action,
    success_action,
    fail_action
} = counterSlice.actions
export default counterSlice.reducer