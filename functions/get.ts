import API_BASE_URL from '@/utils/config';
const isCacheEnabled = process.env.NEXT_PUBLIC_CACHE_ENABLED === 'true';

export async function getAbout() {
  const res = await fetch(`${API_BASE_URL}/about`, {
    cache: isCacheEnabled ? 'force-cache' : 'no-cache',
    method: 'GET'
  });
  return res.json();
}

export async function getProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/project`, {
      cache: isCacheEnabled ? 'force-cache' : 'no-cache',
      method: 'GET'
    });
    return res.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProject(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/project/${slug}`, {
      cache: isCacheEnabled ? 'force-cache' : 'no-cache',
      method: 'GET'
    });
    return res.json();
  } catch (error) {
    console.error('Error fetching project:', error);
    return {};
  }
}
