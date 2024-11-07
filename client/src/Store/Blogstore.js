import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const otherPeopleArticlesStore = (set, get) => ({
    article: [],
    specificArticle: [],

    addOtherPeoplePost: (data) => {
        set(() => ({ article: [] }));
        set((state) => ({
            article: [...state.article, data],
        }));
    },

    // getSpecificArticle: async (id) => {
    //     //set specific artical to none
    //     set(() => ({ specificArticle: [] }));
       
    //     //update the article now
    //     set((state) => {
    //         const specificArticle = state.article.find((article) => article.id === id);
    //         return { specificArticle: specificArticle ? [specificArticle] : [] };
    //     });
        

    //     console.log(`selected id is ${id}`)
    //     const allArticles = get().article
    //     console.log("all articles below")
    //     console.log(allArticles)
    //     const article = get().specificArticle;
    //     console.log("Selected article below");
    //     console.log(article);
    // },
});

const useArticleStore = create(devtools(persist(otherPeopleArticlesStore, { name: 'article' })));

export default useArticleStore;
