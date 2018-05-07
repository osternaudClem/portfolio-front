import moment from 'moment';
import { api } from '../config';

export function getPostBySlug(slug, posts) {
  return posts.find(post => post.slug === slug);
}

export function cleanPost(post) {
  const ghost = api.ghost;
  post.published_at = transformDate(post.published_at);
  if (post.mobiledoc) {
    post.mobiledoc = JSON.parse(post.mobiledoc);
    post.markdown = post.mobiledoc.cards[0][1].markdown;
  }
  if (post.feature_image) {
    if (!isURL(post.feature_image)) {
      post.feature_image = ghost.url + ':' + ghost.port + post.feature_image;
    }
  }
  return post;
}

export function transformDate(date) {
  return moment(date).format('MMM DD, YYYY');
}

export function getImage(pathname) {
  if (isURL(pathname)) {
    pathname = getDropboxImage(pathname);
    return pathname;
  }
  const { url } = api.ghost;
  return `${url}${pathname}`;
}

export function getDropboxImage(pathname) {
  const urlRegex = /https:\/\/www.dropbox.com\/s\/([\w\d]+)\/([\w\d-_]+).([\w]+)/i;
  const params = pathname.match(urlRegex);
  if (!params) {
    return pathname;
  }
  return `https://dl.dropboxusercontent.com/s/${params[1]}/${params[2]}.${
    params[3]
  }`;
}

export function isURL(str) {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return pattern.test(str);
}

export function isPage(page) {
  const checkPage = parseInt(page, 10);
  if (isNaN(checkPage)) {
    return false;
  }
  if (checkPage <= 0) {
    return false;
  }
  return true;
}
