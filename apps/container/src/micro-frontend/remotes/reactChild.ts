import { environment } from '../../environments/environment';



const MFReactChild = {
  url: environment.react_child + 'remoteEntry.js',
  scope: 'reactChild',
  components: {
    BlogPostType1: './BlogPostType1',
    BlogPostType2: './BlogPostType2',
    BlogPostType3: './BlogPostType3',
  },
  slices: {
    blogSlice: './blogSlice',
  },
  routes: {
    blogArticleRoutes: './blogArticleRoutes',
  },
};

export default MFReactChild;