// Single source of truth for category & service labels across languages.
// Projects store KEYS only; these map keys -> translated labels (Approach B).
// PT + EN are solid. ES / FR / DE are best-effort and need a native pass.

type Label = { pt: string; en: string; es: string; fr: string; de: string };

export type Lang = keyof Label;

/* ------------------------------------------------------------------ *
   CATEGORIES — one per project (the 6 project types)
 * ------------------------------------------------------------------ */
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

export function categoryLabel(key: string, lang: Lang = 'pt'): string {
  return categories[key]?.[lang] ?? categories[key]?.en ?? key;
}

/* ------------------------------------------------------------------ *
   SERVICES — many per project (the 12 offerings, two families)
   `family` groups them on the Serviços page (insertion order = display order).
 * ------------------------------------------------------------------ */
export type ServiceFamily = 'construction' | 'engineering';

export const services: Record<string, Label & { family: ServiceFamily }> = {
  // — Reabilitação e Construção —
  rehab_restoration: {
    family: 'construction',
    pt: 'Reabilitação e restauro', en: 'Rehabilitation & restoration',
    es: 'Rehabilitación y restauración', fr: 'Réhabilitation et restauration',
    de: 'Sanierung und Restaurierung',
  },
  space_adaptation: {
    family: 'construction',
    pt: 'Remodelação de espaços', en: 'Space remodelling',
    es: 'Remodelación de espacios', fr: "Réaménagement d'espaces",
    de: 'Raumumbau',
  },
  maintenance: {
    family: 'construction',
    pt: 'Manutenção', en: 'Maintenance', es: 'Mantenimiento',
    fr: 'Maintenance', de: 'Instandhaltung',
  },
  exteriors: {
    family: 'construction',
    pt: 'Arranjos exteriores', en: 'Exterior works',
    es: 'Espacios exteriores', fr: 'Aménagements extérieurs',
    de: 'Außenanlagen',
  },
  carpentry_metalwork: {
    family: 'construction',
    pt: 'Carpintaria e serralharia', en: 'Carpentry & metalwork',
    es: 'Carpintería y cerrajería', fr: 'Menuiserie et serrurerie',
    de: 'Tischlerei und Schlosserei',
  },
  turnkey: {
    family: 'construction',
    pt: 'Construção «chave na mão»', en: 'Turn-key construction',
    es: 'Construcción «llave en mano»', fr: 'Construction clé en main',
    de: 'Schlüsselfertiges Bauen',
  },
  infrastructure: {
    family: 'construction',
    pt: 'Infraestruturas', en: 'Infrastructure',
    es: 'Infraestructuras', fr: 'Infrastructures', de: 'Infrastruktur',
  },
  // — Engenharia —
  pathology_diagnosis: {
    family: 'engineering',
    pt: 'Diagnóstico de patologias', en: 'Pathology diagnosis',
    es: 'Diagnóstico de patologías', fr: 'Diagnostic des pathologies',
    de: 'Schadensdiagnose',
  },
  construction_management: {
    family: 'engineering',
    pt: 'Gestão de obra', en: 'Construction management',
    es: 'Gestión de obra', fr: 'Gestion de chantier', de: 'Bauleitung',
  },
  engineering_projects: {
    family: 'engineering',
    pt: 'Projetos de engenharia', en: 'Engineering projects',
    es: 'Proyectos de ingeniería', fr: "Projets d'ingénierie",
    de: 'Ingenieurprojekte',
  },
  consulting: {
    family: 'engineering',
    pt: 'Consultoria', en: 'Consulting', es: 'Consultoría',
    fr: 'Conseil', de: 'Beratung',
  },
  inspection: {
    family: 'engineering',
    pt: 'Fiscalização', en: 'Inspection', es: 'Inspección',
    fr: 'Inspection', de: 'Bauüberwachung',
  },
};

export function serviceLabel(key: string, lang: Lang = 'pt'): string {
  return services[key]?.[lang] ?? services[key]?.en ?? key;
}
