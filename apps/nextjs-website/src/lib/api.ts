/** This file contains all the functions useful to get data from external resources */

// Return all the pages
export const getAllPages = async () => ({
  // for now hardcoded, then retrieved from the cms
  pages: [
    { slug: ['a'] },
    { slug: ['a', 'b'] },
    { slug: ['a', 'b', 'c'] },
    { slug: ['a', 'b', 'c', 'd'] },
  ],
});
