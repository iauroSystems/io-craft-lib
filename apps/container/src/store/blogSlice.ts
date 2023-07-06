import {createSelector, createSlice} from '@reduxjs/toolkit';
import {IRootState} from '.';


export interface IRBlogPost {
  id: number;
  title: string;
  author: string;
  createdAt: string;
}

export interface IRBlog {
  posts: IRBlogPost[];
  activeBlogPost: number;
}

/**
 * Notice how we have used createSelector for fetching list and post by ID but
 * not for random blog post. This is because createSelector memoizes
 * the result and recomputes only if input param has changed
 */
export const getBlogPosts = createSelector(
  (state: IRootState) => state.blog.posts,
  (data) => data
);

export const getBlogPostById = createSelector(
  (state: IRootState, id: number) =>
    state.blog.posts.filter((post) => post.id === id),
  (data) => data[0]
);

export const getRandomBlogPost = (state: IRootState) => {
  const posts = state.blog.posts;
  return posts[Math.floor(Math.random() * posts.length)];
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [
      {
        id: 1,
        title: 'The Plan for React 18',
        author: 'Andrew Clark',
        createdAt: '2021-06-18',
      },
      {
        id: 2,
        title: 'Introducing Zero-Bundle-Size React Server Components',
        author: 'Dan Abramov',
        createdAt: '2020-12-21',
      },
      {
        id: 3,
        title: 'Introducing the New JSX Transform',
        author: 'Luna Ruan',
        createdAt: '2020-07-22',
      },
      {
        id: 4,
        title:
          'Building Great User Experiences with Concurrent Mode and Suspense',
        author: 'Joseph Savona',
        createdAt: '2019-11-06',
      },
      {
        id: 5,
        title: 'Preparing for the Future with React Prereleases',
        author: 'Andrew Clark',
        createdAt: '2019-10-22',
      },
      {
        id: 6,
        title: 'Is React Translated Yet? ¡Sí! Sim! はい！',
        author: 'Nat Alison',
        createdAt: '2019-02-23',
      },
    ],
    activeBlogPost: 1,
  },
  reducers: {
    setBlogPosts: (state, action) => {
      state.posts = action.payload;
    },
    setActiveBlogPost: (state, action) => {
      state.activeBlogPost = action.payload;
    },
  },
});

export const {setBlogPosts, setActiveBlogPost} = blogSlice.actions;
export default blogSlice.reducer;
