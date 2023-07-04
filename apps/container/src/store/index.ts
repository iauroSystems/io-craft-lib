import blog, { IRBlog } from './blogSlice';



export interface IRootState {
  blog: IRBlog;
}

const reducers = {
  blog,
};

export default reducers;