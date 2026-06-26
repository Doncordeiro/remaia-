// Single source of truth for category & service labels across languages.
// Projects store KEYS only; these map keys -> translated labels (Approach B).
// PT + EN are solid. ES / FR / DE are best-effort and need a native pass.

type Label = { pt: string; en: string; es: string; fr: string; de: string };

export const categories: Record<string, Label> = {
  rehabilitation: {
    pt: 'Reabilitação', en: 'Rehabilitation', es: 'Rehabilitación',
    fr: 'Réhabilitation', de: 'Sanierung',
  },
  new_construction: {
    pt: 'Construção nova', en: 'New construction', es: 'Obra nueva',
    fr: 'Construction neuve', de: 'Neubau',
  },
  fit_out: {
    pt: 'Remodelação interior', en: 'Fit-out', es: 'Reforma interior',
    fr: 'Aménagement intérieur', de: 'Innenausbau',
  },
  maintenance: {
    pt: 'Manutenção', en: 'Maintenance', es: 'Mantenimiento',
    fr: 'Maintenance', de: 'Instandhaltung',
  },
  engineering_services: {
    pt: 'Engenharia', en: 'Engineering', es: 'Ingeniería',
    fr: 'Ingénierie', de: 'Ingenieurwesen',
  },
  infrastructure: {
    pt: 'Infraestruturas', en: 'Infrastructure', es: 'Infraestructuras',
    fr: 'Infrastructures', de: 'Infrastruktur',
  },
};

export type Lang = keyof Label;

export function categoryLabel(key: string, lang: Lang = 'pt'): string {
  return categories[key]?.[lang] ?? categories[key]?.en ?? key;
}
