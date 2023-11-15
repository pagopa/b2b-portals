export const getFooterData = async () => {
  const token = process.env['STRAPI_API_TOKEN'];
  const apiBaseUrl = process.env['STRAPI_API_BASE_URL'];
  const FooterApiUrl: string = `${apiBaseUrl}/api/footer/?populate[0]=companyLink,links_aboutUs.links,links_followUs.links,links_resources.links,links_services.links`;

  const FooterResponse = await fetch(FooterApiUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!FooterResponse.ok) {
    return {
      error: 'Failed to fetch footer data',
      footerData: null,
    };
  }

  const FooterJson = await FooterResponse.json();
  const footerData = FooterJson;

  if (!footerData) {
    return {
      error: 'No footer data found',
      footerData: null,
    };
  }

  return {
    footerData,
    error: null, // No error occurred
  };
};
