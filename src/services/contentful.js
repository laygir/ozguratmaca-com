import { createClient as createContentfulClient } from 'contentful';

const clientConfig = {
  space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
};

function getContentfulClient() {
  return createContentfulClient(clientConfig);
}

export async function fetchEntries(
  contentType,
  options = {},
  fields,
) {
  try {
    const client = getContentfulClient();

    const entries = await client.getEntries({
      content_type: contentType,
      select: fields && fields.join(','),
      ...options,
    });

    if (!entries.items) {
      return console.log(`Error getting Entries for ${contentType}.`);
    }

    return entries;
  } catch (error) {
    return console.error(`Error getting Entries for ${contentType}.`, error);
  }
}

/**
 * Fetches the available locales in the Contentful space.
 *
 * @param {boolean} preview - Create a client for Contentful previews when
 * truthy.
 *
 * @return {object} - Received entries.
 */
export async function fetchLocales(preview) {
  try {
    const client = getContentfulClient(preview);
    const locales = await client.getLocales();

    return locales?.items;
  } catch (error) {
    return console.error('Error getting locales.', error);
  }
}
