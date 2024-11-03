import {create} from "zustand"
import {devtools,persist} from 'zustand/middleware'

const userStore = (set) => ({
    user: [],


    addUser: (data) => {
        set((state) => ({
            user: [...state.user, data],
        }));
    },
    logoutUser:(data)=>{
        set((state)=>{
            return {user:[]}
        })
    }
});

const useUserStore = create(devtools(persist(userStore,{name:'user' })));

export default  useUserStore;