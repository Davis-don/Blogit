import { create } from "zustand";
import {devtools,persist} from "zustand/middleware"

const otherPeopleArticlesStore = (set)=>({
    article:[],

    addArticle: (data) => {
        set(() => ({ article: [] }));
        set((state) => ({
            article: [data],
        }));
    },
    
})

const useArticleStore = create(devtools(persist(otherPeopleArticlesStore, { name: 'article' })));

export default useArticleStore