import {
  Article,
  BlogPaginatedPostsQuery,
  useBlogPaginatedPostsQuery,
} from '@quiver/graphql-client';
import { BlogPostType, GenericConnectionType } from '@quiver/types';
import * as React from 'react';
import PageLoading from '../../utils/PageLoading';
import BlogPostCard from '../BlogPostCard';
import CustomPagination from '../customPagination/CustomPagination';
import useCustomPagination from '../customPagination/useCustomPagination.hook';
import { BlogPostsProps } from './BlogPostsProps';

function createBlogPostCard(post: BlogPostType) {
  return <BlogPostCard post={post} />;
}

function PaginatedBlogPosts() {
  const {
    data,
    loading,
    cursorRef,
    handlePaginationClick,
  } = useCustomPagination<BlogPaginatedPostsQuery>({
    useHook: useBlogPaginatedPostsQuery,
  });

  if (loading) return <PageLoading />;

  const posts = data?.articles as BlogPostType[];
  const {
    aggregate: { count: totalItems },
  } = data?.articlesConnection as GenericConnectionType<Article>;

  const customPaginationProps = {
    handlePaginationClick,
    cursorRef,
    totalItems,
  };

  return (
    <>
      {React.Children.toArray(posts.map(createBlogPostCard))}
      <CustomPagination {...customPaginationProps} />
    </>
  );
}

function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <>
      <PaginatedBlogPosts />
    </>
  );
}

export default BlogPosts;