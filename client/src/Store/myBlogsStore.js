import { create } from "zustand";
import {devtools,persist} from "zustand/middleware"

const myBlogStore = (set)=>({
    blog:[],

    addBlog: (data) => {
        set(() => ({ blog: [] }));
        set((state) => ({
            blog: [data],
        }));
    },
    
})

const useBlogStore = create(devtools(persist(myBlogStore, { name: 'myBlog' })));

export default useBlogStore