import {create} from "zustand"
import {devtools,persist} from 'zustand/middleware'

const userStore = (set) => ({
    user: [],

    deleteAllUsers: () => {
        set(() => ({
            user: []
        }));
    },

    addUser: (data) => {
        set(() => ({ user: [] }));
        set((state) => ({
            user: [data],
        }));
    },

    logoutUser: () => {
        set(() => ({
            user: []
        }));
    }
});

const useUserStore = create(devtools(persist(userStore, { name: 'user' })));

export default useUserStore;
