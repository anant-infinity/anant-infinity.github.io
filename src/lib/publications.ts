import raw from '../content/publications/publications.json';
import { profile } from '../data/profile';

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  year: number | null;
  venue: string;
  type: string;
  doi?: string;
  url?: string;
  pdf?: string;
  arxiv?: string;
  featured?: boolean;
  placeholder?: boolean;
};

export const publications = raw as Publication[];

export function getFeaturedPublications(limit = 3): Publication[] {
  return publications.filter((p) => p.featured && !p.placeholder).slice(0, limit);
}

export function boldAuthorHtml(authors: string[]): string {
  return authors
    .map((author) => {
      const lower = author.toLowerCase();
      const match = profile.authorMatch.some(
        (token) => lower === token.toLowerCase() || lower.includes('telikicherla'),
      );
      return match ? `<strong>${author}</strong>` : author;
    })
    .join(', ');
}

export function publicationYearLabel(year: number | null): string {
  return year == null ? 'Year TBD' : String(year);
}

export function uniqueTypes(items: Publication[] = publications): string[] {
  return [...new Set(items.map((p) => p.type))].sort();
}

export function uniqueYears(items: Publication[] = publications): Array<number | null> {
  const years = [...new Set(items.map((p) => p.year))];
  return years.sort((a, b) => {
    if (a == null) return 1;
    if (b == null) return -1;
    return b - a;
  });
}

export function publicationsByYear(items: Publication[] = publications): Array<{
  year: number | null;
  items: Publication[];
}> {
  const years = uniqueYears(items);
  return years.map((year) => ({
    year,
    items: items.filter((p) => p.year === year),
  }));
}

export function doiUrl(doi?: string): string | undefined {
  if (!doi) return undefined;
  return doi.startsWith('http') ? doi : `https://doi.org/${doi}`;
}

export function arxivUrl(arxiv?: string): string | undefined {
  if (!arxiv) return undefined;
  return arxiv.startsWith('http') ? arxiv : `https://arxiv.org/abs/${arxiv}`;
}
